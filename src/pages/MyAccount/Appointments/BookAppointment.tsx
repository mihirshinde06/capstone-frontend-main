import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { IBookAppointmentProps } from "./types";
import BasicDateTimePicker from "./BasicDateTimePicker";
import { useState } from "react";

const BookAppointment = ({ open, handleClose }: IBookAppointmentProps) => {
  const [appointmentFormData, setApppointmentFormData] = useState({
    name: "",
    address: "",
    mobileNumber: "",
  });

  const [dateAndTime, setDateAndTime] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setApppointmentFormData({
      ...appointmentFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setApppointmentFormData({
      name: "",
      address: "",
      mobileNumber: "",
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Appointment</DialogTitle>
      <DialogContent>
        <DialogContentText mt={2}>
          Please enter the details. A representative will be at your service
          shortly.
        </DialogContentText>
        <TextField
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
          name="name"
          onChange={handleChange}
          value={appointmentFormData.name}
          required
        />
        <TextField
          label="Address"
          type="text"
          fullWidth
          variant="standard"
          sx={{ marginBottom: "1rem" }}
          multiline
          minRows={3}
          maxRows={3}
          name="address"
          onChange={handleChange}
          value={appointmentFormData.address}
          required
        />
        <TextField
          label="Mobile Number"
          type="number"
          fullWidth
          variant="standard"
          name="mobileNumber"
          onChange={handleChange}
          value={appointmentFormData.mobileNumber}
          required
        />
        <BasicDateTimePicker
          value={dateAndTime}
          onChange={(value) => setDateAndTime(value)}
          disablePast
        />
      </DialogContent>
      <DialogActions sx={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#FF1788",
            ":hover": { background: "#FF1788" },
            padding: "0.7rem",
            marginBottom: "1rem",
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#19D16F",
            ":hover": { background: "#19D16F" },
            padding: "0.7rem",
            marginBottom: "1rem",
            marginRight: "1rem",
          }}
          onClick={handleSubmit}
        >
          Book
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookAppointment;
