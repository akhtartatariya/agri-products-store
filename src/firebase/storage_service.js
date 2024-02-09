import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";
class StorageService {
  constructor() {
    this.storage = getStorage();
  }

  async uploadFile(file) {
    const storageRef = ref(this.storage, "images/" + file.name);
    try {
      // Upload the file
      const snapshot = await uploadBytesResumable(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("File available at", downloadURL);
      return downloadURL ;
    } catch (error) {
      // Handle errors
      console.error("Error uploading image:", error);
      return false
    }
  }

  async deleteFile(imagePath) {
    try {
      const storageRef = ref(this.storage, imagePath);
      await deleteObject(storageRef);
      return true
      // console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
      return false;
    }
  }
}
const storageService = new StorageService();
export default storageService;
