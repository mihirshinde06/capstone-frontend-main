import { useState, useEffect } from "react";
import decode from "jwt-decode";

const useRole = () => {
  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  const [decodedToken, setDecodedToken] = useState<any>(null);

  useEffect(() => {
    token && setDecodedToken(decode(token));
  }, [token]);

  useEffect(() => {
    decodedToken &&
      localStorage.setItem(
        "role",
        decodedToken?.administrator?.role || decodedToken?.user?.role
      );
  }, [decodedToken]);

  return { role };
};

export default useRole;
