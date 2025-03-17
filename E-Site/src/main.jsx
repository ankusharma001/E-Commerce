import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from "./router.jsx";
import { AuthContextProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <h1>React Supabase Auth</h1>

      <AuthContextProvider>
      <RouterProvider router={router} /> 
      {/* <App/> */}
      </AuthContextProvider>
      
    </>
  </StrictMode>,
);
