import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { fireDB } from "./config";
class ProductService {
  async addProduct({ product_name, product_desc, product_img, price, weight }) {
    try {
      const productRef = collection(fireDB, "products");
      const newProduct = {
        product_name,
        product_desc,
        product_img,
        price,
        weight,
      };
      const docRef = await addDoc(productRef, newProduct);
      console.log("Product added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  }
  async updateProduct(productId, { updatedData }) {
    try {
      const productRef = doc(fireDB, "products", productId);
      await updateDoc(productRef, updatedData);
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  }
  async deleteProduct(productId) {
    try {
      const productRef = doc(fireDB, "products", productId);
      await deleteDoc(productRef);
      console.log("Product deleted successfully");
      return true;
    } catch (error) {
      console.error("Error deleting product: ", error);
      return false;
    }
  }
  async getAllProducts() {
    try {
      const productRef = collection(fireDB, "products");
      const querySnapshot = await getDocs(productRef);
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      return products;
    } catch (error) {
      console.log(":: error while getting all products", error);
      return [];
    }
  }
}

const productService = new ProductService();
export default productService;
