

// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(localStorage.getItem("username") || null);
//   const [person, setPerson] = useState(null);

//   const serverToken = localStorage.getItem("token");
//   const AuthorizationToken = `Bearer ${serverToken}`;

//   const storeTokenInLs = (serverToken, username) => {
//     localStorage.setItem("token", serverToken);
//     localStorage.setItem("username", username);
//     setUser(username);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     setUser(null);
//   };

//   const userAuthentication = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/see", {
//         method: "GET",
//         headers: {
//           Authorization: AuthorizationToken,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Fetched user: ", data.msg);
//         setPerson(data.msg);
//       }
//     } catch (error) {
//       console.log("Error in user fetching data ", error);
//     }
//   };

//   useEffect(() => {
//     userAuthentication();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ person, user, setUser, storeTokenInLs, logout, AuthorizationToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth used outside of the Provider.");
//   }
//   return authContextValue;
// };


import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || null);
  const [person, setPerson] = useState(null);
  const [AuthorizationToken, setAuthorizationToken] = useState(`Bearer ${localStorage.getItem("token")}`);

  useEffect(() => {
    setAuthorizationToken(`Bearer ${localStorage.getItem("token")}`);
  }, [user]);

  const storeTokenInLs = (serverToken, username) => {
    localStorage.setItem("token", serverToken);
    localStorage.setItem("username", username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    setPerson(null);
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/see", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (!response.ok) {
        logout();
        return;
      }

      const data = await response.json();
      console.log("Fetched user: ", data.msg);
      setPerson(data.msg);
    } catch (error) {
      console.log("Error in user fetching data ", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        person,
        user,
        setUser,
        storeTokenInLs,
        logout,
        AuthorizationToken,
        userAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider.");
  }
  return authContextValue;
};
