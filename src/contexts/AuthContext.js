import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signOut = () => {
        return auth.signOut();
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        // observer to the user's sign-in state
        auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);

    const value = {
        currentUser,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateEmail,
        updatePassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}