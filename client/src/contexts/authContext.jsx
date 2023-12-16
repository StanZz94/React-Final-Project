import { createContext } from "react";
import * as authService from "../services/authService";
import Path from "../paths";
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";

 export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
    const loginSubmitHandler = async (values, onError) => {
      try {
        const result = await authService.login(values.email, values.password);
        
        setAuth(result);
    
        localStorage.setItem('accessToken', result.accessToken);
    
        navigate(Path.Home);
      } catch (error) {
        onError(await error);
      }
    };
  
    const registerSubmitHandler = async (values, onError) => {
      const { password, repeatPassword } = values;

      if (password != repeatPassword) {
          if (errors.includes("Password and Repeat password does not match!") == false){
              onError("Password and Repeat password does not match!");
          }

          return;
      }
        
      try {
        const result = await authService.register(values.email, values.password, values.name, values.lastName);
  
        setAuth(result);
    
        localStorage.setItem('accessToken', result.accessToken);
    
        navigate(Path.Home);
      } catch (error) {
        onError(await error);
      }
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
      _id: auth._id,
      isAuthenticated: !!auth.email,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

