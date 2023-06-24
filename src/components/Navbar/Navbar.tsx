import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import messageIcon from "../../assets/images/message-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import loginIcon from "../../assets/images/login-icon.svg";
import shoppingCartIcon from "../../assets/images/shopping-cart-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const { isLoggedIn } = useIsUserLoggedIn();

  const itemsInCart = useAppSelector((state) => state.shoppingCart.itemsInCart);

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{
          background: "#7E33E0",
          color: "white",
          padding: matches || matchesTablets ? ".5rem 5rem" : ".5rem 15rem",
        }}
      >
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <img
                src={messageIcon}
                alt="message"
                style={{ marginRight: ".5rem" }}
              />
            </Grid>
            <Grid item>
              <a href="mailto:comfy.decor@gmail.com">
                <Typography>comfy.decor@gmail.com</Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <Grid container alignItems="center">
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: ".5rem", marginLeft: "3rem" }}
              />
            </Grid>
            <Grid item>
              <a href="tel:+48786983989">
                <Typography>(+48)786983989</Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            {isLoggedIn && (
              <Grid item>
                <img
                  src={loginIcon}
                  alt="login"
                  style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                />
              </Grid>
            )}
            <Grid item>
              {isLoggedIn ? (
                <Link to="/my-account">
                  <Typography mr={3}>My Account</Typography>
                </Link>
              ) : (
                <Link to="/login">
                  <Typography>Login</Typography>
                </Link>
              )}
            </Grid>
            {!isLoggedIn && (
              <Grid item sx={{ marginLeft: "1.5rem", marginRight: "1.3rem" }}>
                <Link to="/register">
                  <Typography>Register</Typography>
                </Link>
              </Grid>
            )}
            {isLoggedIn && (
              <Grid
                item
                sx={{ marginRight: "1rem", ":hover": { cursor: "pointer" } }}
              >
                <Typography onClick={logout}>Logout</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Link to="/shopping-cart">
            <IconButton>
              <Badge
                badgeContent={itemsInCart.length}
                sx={{
                  color: "white",
                  "& .BaseBadge-badge": {
                    backgroundColor: "#FB578E",
                  },
                }}
                showZero
              >
                <img src={shoppingCartIcon} alt="shopping-cart" />
              </Badge>
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={"center"}
        sx={{ padding: matches || matchesTablets ? "1rem 5rem" : "1rem 15rem" }}
      >
        <Grid item>
          <Link to="/">
            <Typography
              fontSize={34}
              fontWeight={700}
              sx={{ marginRight: "1rem" }}
            >
              comfy decor
            </Typography>
          </Link>
        </Grid>
        <Grid item sm>
          <Link to="/">
            <Typography fontSize={18} fontWeight={600}>
              the furniture store
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
            <Typography fontSize={16} sx={{ marginRight: "1rem" }}>
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/products">
            <Typography fontSize={16} sx={{ marginRight: "1rem" }}>
              Products
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/contact">
            <Typography fontSize={16}>Contact</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
