import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import AuthBox from "../components/AuthBox";
import InputWithLabel from "../components/InputWithLabel";
import PrimaryButton from "../components/PrimaryButton";
import RedirectInfo from "../components/RedirectInfo";
import { validateRegisterForm } from "../utils/validator";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
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
    setIsFormVaild(validateRegisterForm(email, password, username));
  }, [email, password, username, setIsFormVaild]);

  const handleRegister = () => {
    dispatch(register({ email, password, username }));
  };

  return (
    <AuthBox loading={isLoading}>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
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
        label="Register"
        style={{ marginTop: "30px", marginBottom: "10px" }}
        onClick={handleRegister}
        disabled={!isFormVaild}
      />
      <RedirectInfo
        text="Already have an account?"
        redirectText="Login"
        redirectHandler={() => navigate("/login")}
      />
    </AuthBox>
  );
};

export default Register;
