
import { doSignInWithGoogle } from "../firebase/Auth";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";


const Auth = () => {

    const { userLoggedIn } = useAuth();

    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle()
            .catch(err => {
                setErrorMessage(err)
            })
        }
    }

    return (
        <div className="">
            {userLoggedIn && (<Navigate to={'/expense-tracker'} replace={true}/>)}
            {errorMessage && errorMessage}
            <button onClick={onGoogleSignIn} className="bg-zinc-800 text-blue-300 w-64">Sign In</button>
        </div>

    )
}

export default Auth;