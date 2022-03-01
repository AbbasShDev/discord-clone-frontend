import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import AuthBox from "../components/AuthBox";
import InputWithLabel from "../components/InputWithLabel";
import PrimaryButton from "../components/PrimaryButton";
import RedirectInfo from "../components/RedirectInfo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormVaild, setIsFormVaild] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#b9bbbe" }}>
        We are happy to see you again
      </Typography>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <PrimaryButton
        label="Login"
        style={{ marginTop: "30px" }}
        onClick={handleLogin}
        disabled={!isFormVaild}
      />
      <RedirectInfo
        text="Don't have an account?"
        redirectText="Create an account"
        style={{ marginTop: "10px" }}
        redirectHandler={() => navigate("/register")}
      />
    </AuthBox>
  );
};

export default Login;
