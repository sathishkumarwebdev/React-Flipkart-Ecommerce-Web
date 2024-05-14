import login_img_c4a81e from "../assets/login_img_c4a81e.png";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
export function Login({ setAuthentication }) {
  //hooks
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [trigger, setTrigger] = useState(false);

  // functions handle
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //data fetch

  async function handleLogin(userName, password) {
    setTrigger(true);
    try {
      const respose = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });
      const result = await respose.json();

      if (result?.token) {
        localStorage.setItem("token", result.token);
        setTrigger(false);
        setAuthentication(true);
      } else {
        setTrigger(false);
        alert(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <NavBar />
      <div className="login-conatiner">
        <div className="login-content">
          <span>Login</span>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <div>
            <img src={login_img_c4a81e} alt="pic" />
          </div>
        </div>
        <div className="login-box">
          <div className="login-input">
            <div className="login-text-box">
              <input
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={handleUserName}
              />
            </div>
            <div className="login-text-box">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <button
              onClick={() => handleLogin(userName, password)}
              disabled={trigger}
            >
              Login
            </button>
          </div>
          <div className="new-acc">
            <Link to={"/NewLogin"}>
              <span>New to Flipkart? Create an account</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
