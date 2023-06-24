import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

const useCalculateTotal = () => {
  const itemsInCart = useAppSelector((state) => state.shoppingCart.itemsInCart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const subtotals = itemsInCart.map((item) => item.subtotal);
      const total = subtotals.reduce((partialSum, a) => partialSum + a, 0);
      return total;
    };

    setTotal(calculateTotal());
  }, [itemsInCart]);

  return { total };
};

export default useCalculateTotal;
