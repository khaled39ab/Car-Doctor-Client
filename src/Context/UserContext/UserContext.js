import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    };

    const facebookLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider)
    };

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const passwordLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const addDisplayName = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    };

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setIsLoading(false)
            setUser(currentUser)
        })

        return () => unsubscribe();

    }, [])


    const AuthInfo = {
        user,
        isLoading,
        googleLogin,
        githubLogin,
        facebookLogin,
        createUser,
        passwordLogin,
        addDisplayName,
        logOut,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;