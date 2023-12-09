import { createContext, useState } from "react";
import * as authService from "../services/authService";
import Path from "../paths";
import { useNavigate } from "react-router-dom";

 export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
  
      localStorage.removeItem("accessToken");
  
      return {};
    });
  
    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Path.Home);
    };
  
    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password, values.name, values.lastName);
  
      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Path.Home);
    };
  
    const logoutHandler = () => {
      setAuth({});
  
      localStorage.removeItem('accessToken');
      navigate(Path.Home);
    };
  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      name: auth.name,
      lastName: auth.lastName,
      email: auth.email,
      isAuthenticated: !!auth.email,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

