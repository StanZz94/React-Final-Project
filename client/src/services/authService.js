import * as request from "./request";

const baseUrl = "http://127.0.0.1:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });

  return result;
};

export const register = (email, password, name, lastName) => request.post(`${baseUrl}/register`, {
    name,
    lastName,  
    email,
    password,
});

 export const logout = () => request.get(`${baseUrl}/logout`)

