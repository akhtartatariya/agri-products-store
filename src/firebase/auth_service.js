import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

class AuthService{
    async signUp(email, password){
        try {
           return await createUserWithEmailAndPassword(auth,email,password)
            
        } catch (error) {
            console.log(':: error creating user',error)
        }
    }
}


const authService=new AuthService();
export default authService