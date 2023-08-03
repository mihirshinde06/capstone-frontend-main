import {
  Grid,
  Typography,
  IconButton,
  Badge,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import messageIcon from "../../assets/images/message-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import loginIcon from "../../assets/images/login-icon.svg";
import shoppingCartIcon from "../../assets/images/shopping-cart-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import useRole from "../../hooks/useRole";

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

  const { role } = useRole();

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
              <a href="tel:+918411893928">
                <Typography>(+91)8411893928</Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            {isLoggedIn !== "true" && (
              <Grid item>
                <img
                  src={loginIcon}
                  alt="login"
                  style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                />
              </Grid>
            )}
            <Grid item>
              {isLoggedIn === "true" ? (
                <Link
                  to={
                    role === "ADMINISTRATOR"
                      ? "/admin-panel"
                      : role === "USER"
                      ? "/my-account"
                      : "#"
                  }
                >
                  <Typography mr={3}>
                    {role === "ADMINISTRATOR"
                      ? "Admin Panel"
                      : role === "USER"
                      ? "My Account"
                      : ""}
                  </Typography>
                </Link>
              ) : (
                <Link to="/login">
                  <Typography>Login</Typography>
                </Link>
              )}
            </Grid>
            {isLoggedIn !== "true" && (
              <Grid item sx={{ marginLeft: "1.5rem", marginRight: "1.3rem" }}>
                <Link to="/register">
                  <Typography>Register</Typography>
                </Link>
              </Grid>
            )}
            {isLoggedIn === "true" && (
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
          <Tooltip title={role === "ADMINISTRATOR" ? "Not Allowed" : ""}>
            <Link to={role === "ADMINISTRATOR" ? "#" : "/shopping-cart"}>
              <IconButton disabled={role === "ADMINISTRATOR"}>
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
          </Tooltip>
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
