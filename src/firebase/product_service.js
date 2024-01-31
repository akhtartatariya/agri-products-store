import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { fireDB } from "./config";

class ProductService{
    async getAllProducts(){
        try {
            const productRef = collection(fireDB, 'products');
            const querySnapshot=await getDocs(productRef)
            const products=[]
            querySnapshot.forEach((doc)=>{
                products.push({id:doc.id,...doc.data()})
            })
            return products
        } catch (error) {
            console.log(":: error while getting all products",error);
            return [];
        }
    }
}

const productService=new ProductService()
export default productService