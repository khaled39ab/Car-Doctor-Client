import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    };

    const AuthInfo = { googleLogin, githubLogin };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;