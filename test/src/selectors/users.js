import { signInWithEmailAndPassword , signOut } from 'firebase/auth' 
import { auth } from '../utils/firebase'


const logInWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
};

const logOut = async () => {
    await signOut(auth)
    .then(() => {
        console.log("user logout");
    })
    .catch((err) => {
        console.log(err)
    })
}


export { logInWithEmailAndPassword, logOut };