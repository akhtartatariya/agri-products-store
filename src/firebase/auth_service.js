import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";

class AuthService {
  async signUp(name, email, password) {
    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userAccount.user, {
        displayName: name,
      });
      return name;
    } catch (error) {
      console.log(":: error creating user", error);
    }
  }
  async login(email, password) {
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
  async logout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("error while logging out user:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
