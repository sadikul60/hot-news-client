import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    // GoogleProvider 
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // GitHubProvider
    const providerGithubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // FacebookProvider
    const providerFacebookLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn from site
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // UpdateProfile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Veryfi Email address
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // SignOut from site
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
        });
        return () => {
            unsubscribe()
            setLoading(false);
        }
    }, [])


    const authInfo = { 
        user, 
        loading,
        setLoading, 
        providerLogin, 
        createUser, 
        signIn, 
        providerGithubLogin, 
        providerFacebookLogin,
        updateUserProfile,
        verifyEmail,
        logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;