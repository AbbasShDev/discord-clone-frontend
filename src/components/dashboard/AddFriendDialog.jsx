import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/validator";
import InputWithLabel from "../InputWithLabel";
import PrimaryButton from "../PrimaryButton";
import { sendInviation, reset } from "../../features/friends/friendsSlice";

const AddFriendDialog = ({ isDialogOpen, closeDialogHnadler }) => {
  const [email, setEmail] = useState("");
  const [isVaildForm, setIsVaildForm] = useState(false);
  const dispatch = useDispatch();

  const { isError, isSuccess, message } = useSelector((state) => state.friends);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(`Invitaion has been sent to ${email}`);
    }

    dispatch(reset());
  }, [isError, isSuccess, message]);

  const handleSendInvitaion = () => {
    dispatch(sendInviation({ email }));

    closeDialogHnadler();
    setEmail("");
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
