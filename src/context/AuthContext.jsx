import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createContext, useContext, useEffect, useState } from "react";
  import { auth } from "../firebase/config";
  
  //creamos el contexto
  const AuthContext = createContext();
  
  //custom hook
  export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
  
    return context;
  };
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //conexion a firebase  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
  
      return unsubscribe;
    }, []);     //limpia el useeffect cuando se desmonta
  
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };
  
    return (
      <AuthContext.Provider value={{ user, loading, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  