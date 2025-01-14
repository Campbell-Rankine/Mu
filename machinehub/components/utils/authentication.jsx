import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/api/firebase/firebaseConfig';
import { useContext, createContext, useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserAuth } from "@/context/Account"
import UserMenu from '../utils/header-menu'

{/* button exports */}
export function GitHubSignUpButton() {
  const { user, googleSignUp, gitHubSignUp, logOut } = UserAuth();
  console.log(user)
  
  // Create handler
  const handleSignIn = async () => {
    try{
      await gitHubSignUp();
    }
    catch (e){
      console.log(e);
    }
  }

  return (
    <div className="gSignIn right-72 pr-4">
                  <button className={`btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center ${(user != undefined) ? 'opacity-0 z-1' : 'z-10'}`} onClick={handleSignIn}>
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16 auth-container">Continue with GitHub</span>
                  </button>
                </div>
  )
}
export function GoogleSignUpButton() {
  const { user, googleSignUp, gitHubSignUp, logOut } = UserAuth();
  console.log(user)
  
  // Create handler
  const handleSignIn = async () => {
    try{
      await googleSignUp();
    }
    catch (e){
      console.log(e);
    }
  }

  return (
    <div className="gSignIn right-4 pt-2 pb-2 pr-2">
                  <button className={`btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center ${(user != undefined) ? 'opacity-0 z-1' : 'z-10'}`} onClick={handleSignIn}>
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16 auth-container">Continue with Google</span>
                  </button>
          </div>
  )
}
export function AccountInfoCard() {
  const { user, googleSignUp, gitHubSignUp, logOut } = UserAuth();
  console.log(user)

  return (
    <div className={`gSignIn right-24 pt-2 pb-2 pr-2 ${(user != undefined) ? "opacity-100" : "opacity-0"}`}>
      <p className="">{`${(user != undefined) ? `Welcome Back, ${user.displayName}!` : ''}`}</p>
    </div>
  )
}
