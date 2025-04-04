import { createContext, useContext, useEffect, useState } from "react";
import { useViewTransitionState } from 'react-router-dom';
import { supabase } from '../supabaseClient';


const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined );

  const  signUpNewUser = async (email,password) =>{
    const {data,error} = await supabase.auth.signUp({
      email :email,
      password: password,
    });

    if (error)
    {
      console.error("their was an error in sign up : ", error);
      return {success : false , error};
    }
    return {success: true , data};

  };

  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      
      if (error) {
        console.error("Sign-in error:", error.message); 
        return { success: false, error: error.message }; 
      }

    
      console.log("Sign-in success:", data);
      return { success: true, data };
    } catch (error) {
      
      console.error("Unexpected error during sign-in:", err.message);
      return {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      };
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  }


  

  return (
    <AuthContext.Provider value={{ session, signUpNewUser , signOut ,signInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
