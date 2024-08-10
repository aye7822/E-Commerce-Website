import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import "./paymentform.css";

export default function PaymentForm() {
  const AddressDetails = useSelector(
    (state) => state.AddressDataData.AddressDataData
  );
  console.log("AddressData", AddressDetails);

  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setcvvNumber] = useState("");

  const handleCheckout = () => {
    console.log("paymentpage");
    navigate("/PaymentSuccess");
  };

  return (
    <>
      <div className="big-div">
        <div className="payment-div">
          <div className="ConatctDetails">
            <p><b>PAYMENT</b></p>
            <br />
            <div className="payment-symbol-div">
              <img
                src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_23.gif"
                alt="All Cards"
              />
            </div>
            <br />
            <Box>
              <InputLabel htmlFor="card-number">CARD NUMBER</InputLabel>
              <TextField
                id="card-number"
                label="Must be 16 digit No*"
                value={cardNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 16) {
                    setCardNumber(value);
                  }
                }}
              />
              <br />
              <InputLabel htmlFor="expiry-date">EXP MONTH / EXP YEAR</InputLabel>
              <TextField
                id="expiry-date"
                label="MM/YY*"
              />
              <br />
              <InputLabel htmlFor="cvv">CVV</InputLabel>
              <TextField
                id="cvv"
                label="3 digits*"
                variant="outlined"
                value={cvvNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 3) {
                    setcvvNumber(value);
                  }
                }}
              />
            </Box>
            <button className="Make-Payment" onClick={handleCheckout}>
              <b>Make Payment</b>
            </button>
          </div>
        </div>

        <div className="address-div-list">
          <div className="address-list">
            <h3><b>Your Shipping Address</b></h3>
            <hr />
            <div className="all-shipping-address">
              <div className="address-div-one">
                <h4>Name: {AddressDetails?.name || "N/A"}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Address: {AddressDetails?.address || "N/A"}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>
                  Locality: {AddressDetails?.locality || "N/A"},
                  City / District: {AddressDetails?.city || "N/A"}
                </h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Pincode: {AddressDetails?.pincode || "N/A"}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Mobile: {AddressDetails?.mobile || "N/A"}</h4>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
