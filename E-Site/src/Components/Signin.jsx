import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import { UserAuth } from '../Context/AuthContext';

const Signin = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");
  const [loading  , setLoading] = useState("");
  const  {session, signInUser } =UserAuth()
  console.log(session);
  console.log(email, password);

  const navigate = useNavigate();
  


  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser(email, password);

      if (result.success) {
        navigate("/dash"); 
      } else {
        setError(result.error.message); 
      }
    } catch (err) {
      setError("An unexpected error occurred."); 
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <>
    <div>
      <form onSubmit={handleSignin}>
      <h2>Sign-in </h2>
      <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
      <div>
        <input onChange={(e)=> setEmail(e.target.value)}  placeholder = "Enter Your Email" type="email" name="" id = ""/> <br />
        <input onChange={(e)=> setPassword(e.target.value)}  placeholder = "Enter Your Password " type="password" name="" id="" /> <br />
        <button>Signin </button>
        {error && <p>{error}</p> }
      </div>
      </form>
      
    </div>
    </>
  )
}

export default Signin
 