import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutUs from "./pages/AboutUs/AboutUs";
import CheckOut from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserRegister from "./pages/UserRegister/UserRegister";
import OrderPlacedSuccessfully from "./pages/OrderPlacedSuccessfully/OrderPlacedSuccessfully";
import Products from "./pages/Products/Products";
import useJWTExpiry from "./hooks/useJWTExpiry";
import MyAccount from "./pages/MyAccount/MyAccount";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { queryClient } from "./react-query/config";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ChatBot from "./pages/chatBot/ChatBot";

function App() {
  const { isExpired } = useJWTExpiry();

  useEffect(() => {
    isExpired && localStorage.clear();
  }, [isExpired]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            preventDuplicate
          >
            <ScrollToTop />
            <Navbar />
            <ChatBot />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/order-placed-successfully"
                element={
                  <PrivateRoute>
                    <OrderPlacedSuccessfully />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<UserRegister />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/faq" element={<FAQ />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route
                path="/checkout"
                element={
                  <PrivateRoute>
                    <CheckOut />
                  </PrivateRoute>
                }
              />
              <Route
                path="/my-account"
                element={
                  <PrivateRoute>
                    <MyAccount />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </SnackbarProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
