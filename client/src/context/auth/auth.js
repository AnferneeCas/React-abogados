// import React, { useReducer, useEffect, useState } from "react";

// import app from "../../firebase";

// export const authContext = React.createContext();

// export const AuthState = props => {
//   const [currentUser, setCurrentUser] = useState(null);
//   useEffect(() => {
//     app.auth().onAuthStateChanged(setCurrentUser);
//     console.log("loading");
//   }, []);
//   return (
//     <authContext.Provider
//       value={{
//         currentUser
//       }}
//     >
//       {props.children}
//     </authContext.Provider>
//   );
// };
