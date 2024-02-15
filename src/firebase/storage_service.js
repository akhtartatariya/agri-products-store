import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
  getMetadata,
} from "firebase/storage";
class StorageService {
  constructor() {
    this.storage = getStorage();
  }

  async uploadFile(file) {
    const storageRef = ref(this.storage, "images/" + file.name);

    // Check if the file with the same name already exists
    const existingImageRef = ref(this.storage, "images/" + file.name);
    try {
      await getDownloadURL(existingImageRef);

      // If the getDownloadURL doesn't throw an error, it means the file exists.
      // return the existing URL 
      const existingURL = await getDownloadURL(existingImageRef);
      console.log("File already exists. URL:", existingURL);
      return existingURL;
    } catch (error) {
      // proceed with the upload
      console.log("File doesn't exist. Uploading...");

      try {
        // Upload the file
        const snapshot = await uploadBytesResumable(storageRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("File available at", downloadURL);
        return downloadURL;
      } catch (uploadError) {
        // Handle errors
        console.error("Error uploading image:", uploadError);
        return null;
      }
    }
  }

  async checkExistingImage(imageName) {
    const storageRef = ref(this.storage, "images/" + imageName);
    try {
      // Check if the image exists in storage
      await getMetadata(storageRef);

      // If no error is thrown, return the download URL
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      // If the image doesn't exist, return null
      return null;
    }
  }
  async deleteFile(imagePath) {
    try {
      const storageRef = ref(this.storage, imagePath);
      await deleteObject(storageRef);
      return true;
      // console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
      return false;
    }
  }
}
const storageService = new StorageService();
export default storageService;
