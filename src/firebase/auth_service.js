import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

class AuthService{
    async signUp(email, password,name){
        try {
            
           const user= await createUserWithEmailAndPassword(auth,email,password,name)
            console.log(user.user)
            return user
        } catch (error) {
            console.log(':: error creating user',error)
        }
    }
}


const authService=new AuthService();
export default authService