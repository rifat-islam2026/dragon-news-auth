import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export  const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user sign in 
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out 
    const logOut = () => {
        return signOut(auth);
    }
    // on auth state change
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
       })
        return () => {
            return unSubscribe;
        }
    },[])
    const authInfo = {
        user,
        createUser,
        userSignIn,
        logOut
    };

  return (
      <AuthContext.Provider value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


/** -----context steps-----
 * 1. create context and export 
 * 2. set provider with value
 * 3. use userProvider in the main.jsx file
 * 4. access children in the UserProvider component as children and use it in the middle of the provider 
 * */

