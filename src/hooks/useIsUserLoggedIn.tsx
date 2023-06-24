import { useEffect, useState } from "react";

const useIsUserLoggedIn = () => {
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  return { isLoggedIn, token };
};

export default useIsUserLoggedIn;
