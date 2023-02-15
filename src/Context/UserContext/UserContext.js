import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    };

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
        })
        return () => unsubscribe();
    }, [])


    const AuthInfo = {
        user,
        googleLogin,
        githubLogin,
        facebookLogin,
        createUser,
        passwordLogin,
        logOut,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;