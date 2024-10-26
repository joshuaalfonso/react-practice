import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";


const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return unsubscribe;
    }, [])  

    const initializeUser = async (user) => {
        if (user) {
            setCurrentUser({
                userID: user.uid,
                email: user.email,
                photoUrl: user.photoURL
            });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser, 
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export { useAuth, AuthProvider }
