'use client';

import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/api/firebase/firebaseConfig';
import { useContext, createContext, useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();


{/* handlers */}
export const AuthContextProvider = ({children}) => {
  // init user
  const [user, setUser] = useState();

  // init sign in method params
  const gitHubSignUp = async () => {
    const gitHubAuth = new GithubAuthProvider()
    return signInWithPopup(auth, gitHubAuth)
    .then((response) => {
      console.log(response.user)
    })
  }
  const googleSignUp = async () => {
    const googleAuth = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuth)
    .then((response) => {
      console.log(response.user)
    })
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{user, googleSignUp, gitHubSignUp, logOut}}>{children}</AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
};