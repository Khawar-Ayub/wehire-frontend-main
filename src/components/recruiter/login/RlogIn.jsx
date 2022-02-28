import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// import LoginImage from "./loginImage.svg";
import "./sign-in-up.css";
import Header from "../rheader/Rheader";

export default function Rlogin() {
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios
      .post(`http://localhost:5000/recruiter/Rlogin`, data, {
        headers: {
          "Content-Type": "application/json",
          },
          withCredentials: true,
          })
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        } else {
          seterror(res.data.message);
        }
      })
      .catch((err) => {
        seterror(err.response.data.message);
      });
  };

  return (
    <div className="sign-in">
      <Header/>
      <div className="sign-in-left-container">
        <div className="sign-in-left-wrapper">
          <h2 id="title">Login</h2>
          <h3>
            <span> Login in with Email</span>
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="error-messages">{error}</div>
            <label className="form-label">
              Email<span>* </span>
            </label>
            <span className="error-messages">
              {errors.email && errors.email.type === "required" && (
                <span>This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span>Enter a valid email</span>
              )}
            </span>
            <input
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <label className="form-label">
              Password<span>* </span>
            </label>
            <span className="error-messages">
              {errors.password && errors.password.type === "required" && (
                <span>This field is required</span>
              )}
            </span>
            <input
              id="password"
              type={"password"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <div className="remember-forgot">
              <label className="remember-me-checkbox">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="">Forgot password?</Link>
            </div>
            
            <input id="login-submit" type="submit" value="Login" />
            
          </form>
          {/* <p className="not-registered">
            Not registered yet?
            <Link to="/login"> Create an Account</Link>
          </p> */}
        </div>
      </div>
      {/* <div className="sign-in-right-container">
        <div className="sign-in-right-wrapper">
          <img src={LoginImage} alt="login-image" />
        </div>
      </div> */}
    </div>
  );
}
