import { CircularProgress, CircularProgressProps, Box } from "@mui/material";

const Loader = (props: CircularProgressProps) => {
  return (
    <Box sx={{ margin: "auto" }} textAlign="center">
      <CircularProgress
        {...props}
        sx={{ ...props.sx, margin: "2.5rem 0", color: "#FB2E86" }}
      />
    </Box>
  );
};

export default Loader;
