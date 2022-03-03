import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { validateEmail } from "../../utils/validator";
import InputWithLabel from "../InputWithLabel";
import PrimaryButton from "../PrimaryButton";

const AddFriendDialog = ({ isDialogOpen, closeDialogHnadler }) => {
  const [email, setEmail] = useState("");
  const [isVaildForm, setIsVaildForm] = useState(false);

  const handleSendInvitaion = () => {
    //Send invitaion request
  };

  const handleCloseDialog = () => {
    closeDialogHnadler();
    setEmail("");
  };

  useEffect(() => {
    setIsVaildForm(validateEmail(email));
  }, [email, setIsVaildForm]);

  return (
    <Dialog fullWidth={true} open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite A Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <InputWithLabel
            label="Enter your friend's E-mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <PrimaryButton
          onClick={handleSendInvitaion}
          disabled={!isVaildForm}
          label="Send"
          style={{
            margin: "0 15px 15px 15px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddFriendDialog;
