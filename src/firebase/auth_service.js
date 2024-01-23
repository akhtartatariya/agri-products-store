import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

class AuthService {
  async signUp({ email, password }) {
    try {
      const userAccount= await createUserWithEmailAndPassword(auth, email, password);
      if(userAccount){
        return this.login({email, password})
      }
      else{
        return userAccount
      }
    } catch (error) {
      console.log(":: error creating user", error);
    }
  }
  async login({email,password}){
    try {
       return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(":: error while login", error);
    }
  }
  async getCurrentUser() {
    try {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            resolve(uid);
          } else {
            resolve(null);
          }
          
          unsubscribe();
        });
      });
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }
  }
  
}

const authService = new AuthService();
export default authService;
