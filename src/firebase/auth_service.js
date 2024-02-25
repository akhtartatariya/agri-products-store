import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, fireDB } from "./config";
import { Timestamp, addDoc, collection } from "firebase/firestore";

class AuthService {
  async signUp(name, email, password) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {
        name: name,
        email: userAccount.user.email,
        uid: userAccount.user.uid,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      await updateProfile(userAccount.user, {
        displayName: name,
      });
      return userAccount.user;
    } catch (error) {
      console.log(":: error creating user", error);
      console.log('ullullu')

    }
  }
  async login({email, password}) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(":: error while login", error);
    }
  }
  async getCurrentUser() {
    try {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve(user);
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
  async logout() {
    try {
      await auth.signOut();
      return true
    } catch (error) {
      console.log("error while logging out user:", error);
      return false
    }
  }
}

const authService = new AuthService();
export default authService;
