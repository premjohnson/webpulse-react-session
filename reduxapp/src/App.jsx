import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <Home /> : <Login />;
}

export default App;