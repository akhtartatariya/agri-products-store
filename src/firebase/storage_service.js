import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
class StorageService {
  storage = getStorage();

  async uploadFile(file) {
    const storageRef = ref(this.storage, "images/" + file.name);
    try {
      const uploadTask = await uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error) {
      console.log(":: error while uploading file", error);
    }
  }
  async deleteFile(imagePath) {
    try {
      const storageRef = ref(this.storage, imagePath);
      await deleteObject(storageRef);
      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  }
}
const storageService = new StorageService();
export default storageService;
