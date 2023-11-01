import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";

import { createContext, useContext, useEffect, useState} from "react";
import { auth } from "../config/firebase";

export const AuthFBContext = createContext();

const AuthFBProvider = ({ children }) => {
    const[user,setUser] = useState(false);

    const registerUser = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);
    const signin = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);
    const signout = () => 
        signOut(auth);
    
    useEffect(() => {
            const unsuscribe = onAuthStateChanged(auth, (user) => {
              setUser(user);
            });
            return unsuscribe;
    }, []);


    return (
        <AuthFBContext.Provider value={{user, setUser, registerUser, signin, signout}}>
            {children}
        </AuthFBContext.Provider>
    );   
};

export default AuthFBProvider;

export const useAuthFB = () => useContext(AuthFBContext);
