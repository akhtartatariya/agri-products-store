import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "./config";
class ProductService {
  async addProduct({
    productId, // Specify productId when calling this method
    product_name,
    product_desc,
    product_img,
    technology,
    used_for,
    price,
    weight,
  }) {
    try {
      const productRef = collection(fireDB, "products");

      const newProduct = {
        productId,
        product_name,
        product_desc,
        product_img,
        price,
        weight,
        technology,
        used_for,
      };

      // Use setDoc with a specified document ID
      const docRef = await setDoc(doc(productRef, productId), newProduct);

      console.log("Product added with ID: ", productId);
      return docRef;
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  }

  async updateProduct(
    productId,
    {
      product_name,
      product_desc,
      product_img,
      technology,
      used_for,
      price,
      weight,
    }
  ) {
    try {
      const productRef = doc(fireDB, "products", productId);
      const updatedProduct = await updateDoc(productRef, {
        product_name,
        product_desc,
        product_img,
        technology,
        used_for,
        price,
        weight,
      });
      console.log(updatedProduct);
      console.log("Product updated successfully");

      return updatedProduct; // Return the updated product here
    } catch (error) {
      console.error("Error updating product: ", error);
      return null; // Return null in case of an error
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
  async getProduct(productId) {
    try {
      const productDoc = await getDoc(doc(fireDB, "products", productId));
      if (productDoc.exists) {
        const productData = {
          id: productDoc.id,
          ...productDoc.data(),
        };
        return productData;
      } else {
        console.error("Product not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }
}

const productService = new ProductService();
export default productService;
