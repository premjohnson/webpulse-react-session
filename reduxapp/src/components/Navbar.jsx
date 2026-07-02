import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="bg-blue-600 text-white px-10 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">
        Redux Demo
      </h1>

      <div className="flex items-center gap-5">
        <span>Welcome, {user.name}</span>

        <button
          onClick={() => dispatch(logout())}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;