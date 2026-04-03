import axios from "axios";
import { useState } from "react";
import Home from "./pages/Home";

export default function Home() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const login = async () => {
    const res = await axios.post("http://localhost:8080/api/auth/login", user);
    alert(res.data);
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
      />

      <button onClick={login}>Login</button>
    </div>
  );
}