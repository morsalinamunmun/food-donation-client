import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import {PropTypes} from 'prop-types'
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateProfileData = (name, image_url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image_url
        })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loginUser ={email: userEmail};
            setUser(currentUser);
            
            setLoading(false)
            //user token
            if(currentUser){
                axios.post('https://food-donation-server-five.vercel.app/jwt', loginUser, {withCredentials: true})
                .then(res => {
                    console.log('token', res.data);
                })
            }else{
                axios.post('https://food-donation-server-five.vercel.app/logout', loginUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return()=>{
            unsubscribe();
        }
    }, [])
    const authInfo = {user, createUser, signIn, logOut, googleSignIn, loading,updateProfileData}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;