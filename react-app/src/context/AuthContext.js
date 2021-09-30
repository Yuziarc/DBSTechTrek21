import React, {useContext, useState, useEffect} from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
const AuthContext = React.createContext();


// able to access AuthContext using useAuth() hook
export function useAuth(){
    return useContext(AuthContext)
};

// do not want a default export, but a normal export
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    // loading is true by default, then when first round of useEffect is run, verification is done to see if there is a user

    function login(email, password) {
        return signInWithEmailAndPassword(auth,email,password)
        // returns a promise 
    };

    function logout() {
        return signOut(auth)
        // returns a promise 
    };

    // whenever createUserWithEmailAndPassword, it will activate setCurrentUser in line 24 for us
    // should not be in a render, but a useEffect as we only want to run this when we mount our component
    // auth.onAuthStateChanged actually returns a method, and when we call this method, it will unsubscribe the onAuthStateChanged event
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            // making sure we do not render any application until our user is set for the very first time
            setLoading(false)
            // when done loading, change setLoading to false
        })
        return unsubscribe
        // this will unsubscribe us from the listener in onAuthStateChanged whenever we unmount this component
    }, []
    );

    // returning currentUser in the provider in line 23, to use anywhere in the application
    const value = {
        currentUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
