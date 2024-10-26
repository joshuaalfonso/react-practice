
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";


const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // result.user 
    return result;
}

const doSignOut = () => {
    return auth.signOut();
}

export {doSignInWithGoogle, doSignOut}


