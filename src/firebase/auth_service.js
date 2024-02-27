import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, fireDB } from "./config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Timestamp, addDoc, doc, getDoc } from "firebase/firestore";

class AuthService {
  async signUp(name, email, password, isAdmin = false) {
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
        isAdmin: isAdmin,
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      await updateProfile(userAccount.user, {
        displayName: name,
      });
      return userAccount.user;
    } catch (error) {
      console.log(":: error creating user", error);
      return Promise.reject(error);
    }
  }
  async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(":: error while login", error);
      return Promise.reject(error);
    }
  }
  async getCurrentUser() {
    try {
      const user = await new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          resolve(user);
          unsubscribe();
        });
      });

      if (!user) {
        console.log("No user is currently authenticated");
        return null;
      }

      const usersCollectionRef = collection(fireDB, "users");
      
      // Query for the user document with the specified UID in the 'uid' field
      const userQuery = query(usersCollectionRef, where("uid", "==", user.uid));
      
      try {
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
          // Assuming there is only one document matching the UID
          const userDocSnap = querySnapshot.docs[0];
          console.log(userDocSnap)
          const userData = userDocSnap.data();
          console.log(userData)
          const isAdmin = userData?.isAdmin || false;
            console.log(isAdmin)
          console.log("User Data:", userData); // Log for debugging
          return { ...user, isAdmin };
        } else {
          console.log("User Document does not exist");
          return { ...user, isAdmin: false };
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
        return { ...user, isAdmin: false }; // Resolve with default values in case of an error
      }
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }
  }
  async logout() {
    try {
      await auth.signOut();
      return true;
    } catch (error) {
      console.log("error while logging out user:", error);
      return false;
    }
  }
  async isAdmin() {
    const user = await this.getCurrentUser();
    return user ? user.isAdmin || false : false;
  }
}

const authService = new AuthService();
export default authService;
