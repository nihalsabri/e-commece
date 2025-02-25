
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import './navbar.css'

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">My E-Commerce</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>

        {user ? (
          <>
            <li><Link to="/cart">Cart</Link></li>
            <li>Welcome, {user.username}</li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <li><Link to="/signin">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
