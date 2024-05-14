import login_img_c4a81e from "../assets/login_img_c4a81e.png";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
export function NewUser() {
  //hooks
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="login-conatiner">
        <div className="login-content">
          <span>Looks like you're new here!</span>
          <p>Sign up with your mobile number to get started</p>
          <div>
            <img src={login_img_c4a81e} alt="pic" />
          </div>
        </div>
        <div className="login-box">
          <div className="login-input">
            <div className="login-text-box">
              <input
                type="text"
                placeholder="Enter Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </div>

            <button>CONTINUE</button>
            <div className="existing-user">
              <Link to={"/"}>Existing User? Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
