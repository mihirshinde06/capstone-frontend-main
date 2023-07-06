import { useEffect } from "react";

const useIsUserLoggedIn = () => {
  const token = localStorage.getItem("token");

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (token) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.setItem("isLoggedIn", "false");
    }
  }, [token]);

  return { isLoggedIn, token };
};

export default useIsUserLoggedIn;
