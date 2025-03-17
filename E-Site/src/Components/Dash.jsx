import React from 'react'
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';  


const Dash = () => {

  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); 
    }
  };
  // console.log(session);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <p
          onClick={handleSignOut}
          // className="hover:cursor-pointer  border inline-block px-4 py-3 mt-4 "
        >
          Sign out
        </p>
      </div>
      
    </div>
  )
}

export default Dash
