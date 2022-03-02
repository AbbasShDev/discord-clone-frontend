import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import AuthBox from "../components/AuthBox";
import InputWithLabel from "../components/InputWithLabel";
import PrimaryButton from "../components/PrimaryButton";
import RedirectInfo from "../components/RedirectInfo";
import { validateLoginForm } from "../utils/validator";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormVaild, setIsFormVaild] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, isLoading, message]);

  useEffect(() => {
    setIsFormVaild(validateLoginForm(email, password));
  }, [email, password, setIsFormVaild]);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <AuthBox loading={isLoading}>
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
        style={{ marginTop: "30px", marginBottom: "10px" }}
        onClick={handleLogin}
        disabled={!isFormVaild}
      />
      <RedirectInfo
        text="Don't have an account?"
        redirectText="Create an account"
        redirectHandler={() => navigate("/register")}
      />
    </AuthBox>
  );
};

export default Login;
