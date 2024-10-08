import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useState } from "react";
import loginn from "../Components/Assets/loginpage.jpg";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    // username: "",
=======
>>>>>>> origin/main
    email: "",
    password: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
<<<<<<< HEAD
    const response = await fetch("http://localhost:4000/login", {
=======
    const response = await fetch("http://54.204.66.236:4000/login", {
>>>>>>> origin/main
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.errors);
    }
  };

  const signup = async () => {
<<<<<<< HEAD
    const response = await fetch("http://localhost:4000/signup", {
=======
    const response = await fetch("http://54.204.66.236:4000/signup", {
>>>>>>> origin/main
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/loginsignup");
    } else {
      alert(data.errors);
<<<<<<< HEAD
    }
  };

  const requestOtp = async () => {
    const response = await fetch("http://localhost:4000/requestotp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });
    const data = await response.json();
    if (data.success) {
      alert("OTP sent to your email.");
      setState("Enter OTP");
    } else {
      alert(data.errors);
    }
  };

  const resetPassword = async () => {
    const response = await fetch("http://localhost:4000/resetpassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        otp: formData.otp,
        password: formData.password,
      }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Password reset successful.");
      setState("Login");
    } else {
      alert(data.errors);
=======
>>>>>>> origin/main
    }
  };

  const requestOtp = async () => {
    const response = await fetch("http://54.204.66.236:4000/requestotp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });
    const data = await response.json();
    if (data.success) {
      alert("OTP sent to your email.");
      setState("Enter OTP");
    } else {
      alert(data.errors);
    }
  };

  const resetPassword = async () => {
    const response = await fetch("http://54.204.66.236:4000/resetpassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        otp: formData.otp,
        password: formData.password,
      }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Password reset successful.");
      setState("Login");
    } else {
      alert(data.errors);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <div className="loginnn">
          <h4>ShopSJ</h4> <img src={loginn} alt="Shop Logo" />
        </div>
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {(state === "Sign Up" ||
            state === "Login" ||
            state === "Forgot Password") && (
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          )}
          {(state === "Sign Up" || state === "Login") && (
<<<<<<< HEAD
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
=======
            <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{
                        backgroundColor: "#f0f0f0", // Light grey background
                        color: "#1976d2", // Primary color
                        "&:hover": {
                          backgroundColor: "#e0e0e0", // Darker grey on hover
                        },
                        padding: "20px", // Custom padding
                        borderRadius: "50%", // Rounded corners
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            </FormControl>
>>>>>>> origin/main
          )}
          {state === "Enter OTP" && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={changeHandler}
              />
<<<<<<< HEAD
              <input
                type="password"
                placeholder="New Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
=======
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                />
              </FormControl>
>>>>>>> origin/main
            </>
          )}
        </div>

        <button
          onClick={() => {
            state === "Login"
              ? login()
              : state === "Sign Up"
              ? signup()
              : state === "Forgot Password"
              ? requestOtp()
              : resetPassword();
          }}
        >
          Continue
        </button>

        {state === "Login" ? (
          <>
            <p className="loginsignup-login">
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Click here
              </span>
            </p>
            <p className="loginsignup-login">
              Forgot password?{" "}
              <span
                onClick={() => {
                  setState("Forgot Password");
                }}
              >
                Click here
              </span>
            </p>
          </>
        ) : (
          state === "Sign Up" && (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login here
              </span>
            </p>
          )
        )}

        {state === "Forgot Password" && (
          <p className="loginsignup-login">
            Remembered your password?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
