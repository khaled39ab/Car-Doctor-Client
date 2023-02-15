import { createContext } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {

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

    const passwordLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const AuthInfo = { googleLogin, githubLogin, facebookLogin, passwordLogin };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;