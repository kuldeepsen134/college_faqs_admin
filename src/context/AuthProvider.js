import { createContext, useEffect, useState } from "react";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    { token: localStorage.getItem("token") } || {}
  );
  useEffect(() => {
    if (auth?.token) {
      localStorage.setItem("token", auth.token);
    }
  }, [auth]);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
