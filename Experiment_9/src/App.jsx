import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 2)));
  }, []);

  const validate = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must contain 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");

      setShowUsers(true);

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setSuccess("");
      setShowUsers(false);
    }
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Register</button>

          {success && <h3 className="success">{success}</h3>}

        </form>

        {showUsers && (
          <div className="users-box">

            <h2>Registered Users</h2>

            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;