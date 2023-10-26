import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    //useEffect ( () => {
    //    setUser(null);
    //})

    const signin = (email, password) => {
        console.log('LOGIN ANTES:' + email);
        setUser({email, password});
        console.log('LOGIN:', user.email);
        return;
    };

    const signout = () => {
        setUser(null);

    };

    return (
        <AuthContext.Provider value={ {user, signin, signout} }>
            {children}
        </AuthContext.Provider>
    );

};