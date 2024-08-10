import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, TextField, InputLabel } from "@mui/material";
import {
  decreItem,
  deleteitemcart,
  increItem,
  removecart,
} from "../../redux/product/action";
import { AddressData } from "../../redux/address/Action";
import "./checkoutpage.css";

export const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartproducts = useSelector((state) => state.data.cart);

  let total = 0;

  const handleAddress = () => {
    const data = {
      name,
      mobile,
      pincode,
      address,
      locality,
      city,
      state,
    };
    dispatch(AddressData(data));
    navigate("/Paymentform");
  };

  const RemoveItem = (idx) => {
    dispatch(decreItem(idx));
  };

  const Additem = (idx) => {
    dispatch(increItem(idx));
  };

  const handlecartRemove = (idx) => {
    dispatch(deleteitemcart(idx));
  };

  const handlecartDelete = () => {
    dispatch(removecart());
  };

  return (
    <>
      <div className="shopptitle">
        <h3>SHOPPING CART</h3>
      </div>

      <div className="mainCo">
        <div className="address-div-div">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
            noValidate
            autoComplete="off"
          >
            <InputLabel>CONTACT DETAILS</InputLabel>
            <TextField
              label="Name*"
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Mobile No*"
              onChange={(e) => setMobile(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Pin Code*"
              onChange={(e) => setPincode(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Address (House No, Building, Street, Area)*"
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Locality / Town*"
              onChange={(e) => setLocality(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="City / District*"
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="State*"
              onChange={(e) => setState(e.target.value)}
              variant="outlined"
            />
          </Box>

          <div>
            <button
              onClick={handleAddress}
              disabled={
                !name ||
                !mobile ||
                !pincode ||
                !address ||
                !locality ||
                !city ||
                !state
              }
              id="go-to-payment-page-button"
            >
              <b>Go To Payment Page</b>
            </button>
          </div>
        </div>

        <div className="cart-div">
          <div className="maincont-cart">
            {cartproducts.map((elem) => {
              total += elem.price * elem.quantity;
              return (
                <div key={elem.id} className="cartdiv-div">
                  <div className="image-div-div">
                    <h3 className="title">{elem.brand}</h3>
                    <img
                      className="imguse-div"
                      src={elem.images.image1}
                      alt="product"
                    />
                  </div>
                  <div className="color-div-div">
                    <h4>Color: {elem.color}</h4>
                    <h4>Rs {elem.price * elem.quantity}</h4>
                    <button onClick={() => handlecartRemove(elem.id)}>
                      Remove Item
                    </button>
                    <button onClick={() => Additem(elem.id)}>+</button>
                    <h4>Qty: {elem.quantity}</h4>
                    {elem.quantity > 1 && (
                      <button onClick={() => RemoveItem(elem.id)}>-</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="offer-div-div">
            <div className="total-div-div">
              <div>
                <h4>Total:</h4>
                <h4>Shipping:</h4>
                <h4>Subtotal:</h4>
              </div>
              <div>
                <h4>Rs {total}</h4>
                <h4>FREE</h4>
                <h4>
                  <b>Rs {total}</b>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
