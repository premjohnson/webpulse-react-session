import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";


function Login() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      dispatch(
        login({
          name: "Admin",
          email,
        })
      );
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Redux Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Login
        </button>

        <div className="mt-6 text-sm text-gray-500">
          <p>Email : admin@gmail.com</p>
          <p>Password : 123456</p>
        </div>
      </div>
    </div>
  );
}

export default Login;


// import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// function Login() {
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (
//       email === "admin@gmail.com" &&
//       password === "123456"
//     ) {
//       login({
//         name: "Admin",
//         email,
//       });
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-96">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           Redux Login
//         </h1>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           className="w-full border p-3 rounded-lg mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           className="w-full border p-3 rounded-lg mb-6"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </button>

//         <div className="mt-5 text-gray-500 text-sm">
//           <p>Email : admin@gmail.com</p>
//           <p>Password : 123456</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;