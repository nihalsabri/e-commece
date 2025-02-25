import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './signin.css';


//  "username": "emilys",
// "password": "emilyspass",

// "username": "michaelw",
// "password": "michaelwpass",


const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(username, password);
      navigate("/"); 
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
<div className="signin-container">
<div className="signin-form">
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      </div>
      </div>
  );
};

export default Signin;
