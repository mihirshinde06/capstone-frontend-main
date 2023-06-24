export const formatPrice = (price: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(parseFloat(price));
};

export const formatOrderId = (orderIdFromDB: string) => {
  return `#${orderIdFromDB.toUpperCase().slice(0, 9)}`;
};
