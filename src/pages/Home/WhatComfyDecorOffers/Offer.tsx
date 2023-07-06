import { Box, Typography } from "@mui/material";

interface IOfferProps {
  icon: any;
  title: string;
  subtitle: string;
}

const Offer = ({ icon, title, subtitle }: IOfferProps) => {
  return (
    <Box sx={{ width: "16.875rem", height: "15rem" }}>
      <img src={icon} alt="icon" />
      <Typography
        sx={{ color: "#151875" }}
        fontWeight={700}
        fontSize={20}
        mt={2}
      >
        {title}
      </Typography>
      <Typography fontWeight={700} mt={1} sx={{ opacity: ".5" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Offer;
