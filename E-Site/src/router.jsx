import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dash from './Components/Dash';
import PrivateRoute from "./Components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dash",
    element: (
      <PrivateRoute>
        <Dash />
      </PrivateRoute>
    ),
  },
]);
