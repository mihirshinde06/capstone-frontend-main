import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { formatPrice } from "../../utils/utils";
import visaImg from "../../assets/images/visa.svg";
import mastercardImg from "../../assets/images/mastercard.svg";
import americanExpressImg from "../../assets/images/amex.svg";
import creditCardType from "credit-card-type";
import { ICheckOutFormProps } from "./types";

const CheckOutForm = ({
  formData,
  handleChangeFormData,
  deliveryMethod,
  handleChangeDeliveryMethod,
}: ICheckOutFormProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    cardNumber !== ""
      ? creditCardType(cardNumber).length === 1 &&
        setCardType(creditCardType(cardNumber)[0].niceType)
      : setCardType("");
  }, [cardNumber]);

  return (
    <>
      <Typography
        sx={{ color: "#1D3178", fontSize: "1.5rem", padding: "1rem 0" }}
      >
        Personal Details
      </Typography>
      <Grid container>
        <Grid item sm={6} pr={"0.7rem"}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            value={formData.firstName}
            onChange={handleChangeFormData}
            name="firstName"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            value={formData.lastName}
            onChange={handleChangeFormData}
            name="lastName"
          />
        </Grid>
      </Grid>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem" }}
        value={formData.email}
        onChange={handleChangeFormData}
        name="email"
      />
      <Typography
        sx={{ color: "#1D3178", fontSize: "1.5rem", padding: "1rem 0" }}
      >
        Shipping Details
      </Typography>
      <TextField
        label="Street Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem" }}
        value={formData.streetName}
        onChange={handleChangeFormData}
        name="streetName"
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem" }}
        value={formData.city}
        onChange={handleChangeFormData}
        name="city"
      />
      <Grid container>
        <Grid item sm={6} pr={"0.7rem"}>
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            value={formData.country}
            onChange={handleChangeFormData}
            name="country"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
            value={formData.postalCode}
            onChange={handleChangeFormData}
            name="postalCode"
          />
        </Grid>
      </Grid>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <InputLabel>Delivery Method</InputLabel>
        <Select
          value={deliveryMethod}
          label="Delivery Method"
          onChange={handleChangeDeliveryMethod}
          name="deliveryMethod"
        >
          <MenuItem value={"standard"}>
            Standard - {formatPrice("9.99")}
          </MenuItem>
          <MenuItem value={"express"}>
            Express - {formatPrice("19.99")}
          </MenuItem>
        </Select>
      </FormControl>
      <Typography
        sx={{ color: "#1D3178", fontSize: "1.5rem", padding: "1rem 0" }}
      >
        Payment Details
      </Typography>
      <Grid container mb={2} gap={2}>
        <Grid item>
          <img
            src={visaImg}
            alt="visa"
            style={{ width: "3.5rem", opacity: cardType === "Visa" ? 1 : 0.5 }}
          />
        </Grid>
        <Grid item>
          <img
            src={mastercardImg}
            alt="mastercard"
            style={{
              width: "3.5rem",
              opacity: cardType === "Mastercard" ? 1 : 0.5,
            }}
          />
        </Grid>
        <Grid item>
          <img
            src={americanExpressImg}
            alt="american-express"
            style={{
              width: "3.5rem",
              opacity: cardType === "American Express" ? 1 : 0.5,
            }}
          />
        </Grid>
      </Grid>
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem" }}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <TextField
        label="Cardholder's Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem" }}
      />
      <Grid container>
        <Grid item sm={6} pr={"0.7rem"}>
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOutForm;
