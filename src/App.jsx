import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/1 Home/home";
import Signin from "./pages/2 signin/signin";
import Cart from "./pages/3 cart/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user, checkAuth, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>; 

  return (
    <Router>
         <ToastContainer />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/cart" element={<ProtectedRoute> <Cart /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
