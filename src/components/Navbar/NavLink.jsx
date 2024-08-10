import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputBase, Button } from "@material-ui/core";
import { searchData } from "../../redux/product/action";
import "./NavLink.css";
import { Link } from "react-router-dom";

export const NavLink = () => {
  const [form, setForm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setForm(e.target.value);
    dispatch(searchData(e.target.value)); // Dispatch searchData with updated input value
  };

  return (
    <>
      <ul className="nav">
        <li>
          <Button variant="contained" color="success">
            <Link to="/" className="home">
              Home
            </Link>
          </Button>
        </li>

        <li style={{ marginLeft: "10px" }}>
          <Button variant="contained" color="red">
            <Link to="/ProductPage">Products</Link>
          </Button>
        </li>

        <li>
          <InputBase
            type="text"
            placeholder="Search Favourite Products"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInput}
            name="searchProducts"
            style={{
              width: "450px",
              marginTop: "12px",
              marginLeft: "60px",
              border: "2px solid black",
              height: "26px",
              borderRadius: "5px",
            }}
          />
        </li>
      </ul>
    </>
  );
};
