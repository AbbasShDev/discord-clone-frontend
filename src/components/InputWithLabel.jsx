import React from "react";
import { styled } from "@mui/system";

const InputWrapper = styled("dive")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393F",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
  outline: "none",
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleValueChange}
        {...props}
      />
    </InputWrapper>
  );
};

export default InputWithLabel;
