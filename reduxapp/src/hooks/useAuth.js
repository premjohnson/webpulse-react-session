// import { useDispatch, useSelector } from "react-redux";
// import {
//   login as loginAction,
//   logout as logoutAction,
// } from "../redux/authSlice";

// export const useAuth = () => {
//   const dispatch = useDispatch();

//   const { user, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );

//   const login = (userData) => {
//     dispatch(loginAction(userData));
//   };

//   const logout = () => {
//     dispatch(logoutAction());
//   };

//   return {
//     user,
//     isAuthenticated,
//     login,
//     logout,
//   };
// };