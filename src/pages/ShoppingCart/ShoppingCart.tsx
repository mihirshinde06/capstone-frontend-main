import { Grid, useMediaQuery } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import CartItemsTable from "./CartItems/CartItemsTable";
import CartPaymentSummary from "./CartPayment/CartPaymentSummary";
import { useAppSelector } from "../../redux/hooks";

const ShoppingCart = () => {
  const { itemsInCart } = useAppSelector((state) => state.shoppingCart);

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesLg = useMediaQuery("(max-width:1440px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <PageHeader title={"Shopping Cart"} />;
      <Grid
        container
        justifyContent={"center"}
        sx={{
          padding:
            matches || matchesTablets || (matchesLg && itemsInCart.length > 0)
              ? "5rem"
              : "5rem 15rem",
        }}
      >
        <Grid
          item
          md={12}
          lg={8}
          pr={matchesTablets ? 0 : matches || matchesLg ? 10 : 20}
        >
          <CartItemsTable />
        </Grid>
        <Grid item md={12} lg={4}>
          {itemsInCart.length > 0 && <CartPaymentSummary />}
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCart;
