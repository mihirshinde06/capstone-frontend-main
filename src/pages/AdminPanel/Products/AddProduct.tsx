import {
  Dialog,
  Box,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSnackbar } from "notistack";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";
import { IAddProductProps } from "./types";
import { useGetAllProductsAdminQuery } from "../../../react-query/queries/admin/admin";
import { useAddProductAdminMutation } from "../../../react-query/mutations/products/products";
import { useState } from "react";

const AddProduct = ({ open, handleClose }: IAddProductProps) => {
  const { token } = useIsUserLoggedIn();

  const { refetch } = useGetAllProductsAdminQuery(token || "");

  const addProduct = useAddProductAdminMutation(token || "");

  const { enqueueSnackbar } = useSnackbar();

  const [productFormData, setProductFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value,
    });
  };

  const [category, setCategory] = useState("");

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const [file, setFile] = useState("");
  const [imageFile, setImageFile] = useState<Blob>();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddProduct = () => {
    const formData = new FormData();

    formData.append("image", imageFile || "");
    formData.append("category", category);
    formData.append("name", productFormData.name);
    formData.append("quantity", productFormData.quantity.toString());
    formData.append("price", productFormData.price.toString());
    formData.append("description", productFormData.description);
    formData.append(
      "rating",
      Math.floor(Math.random() * (5 - 2 + 1) + 2).toString()
    );

    addProduct.mutate(formData, {
      onSuccess: (data) => {
        enqueueSnackbar(data.msg, {
          variant: "success",
        });
        handleClose();
        refetch();
      },
      onError: (error: any) => {
        enqueueSnackbar(
          error?.response?.data?.msg ||
            error?.response?.data?.errors[0]?.msg ||
            "An error occurred. Please try again.",
          {
            variant: "error",
          }
        );
      },
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box sx={{ padding: "1rem", color: "#1D3178" }}>
        <DialogTitle>
          <Typography fontWeight={700} fontSize={18} mb={1}>
            Add a new product
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "1rem", marginTop: "1rem" }}
            name="name"
            onChange={handleChange}
            value={productFormData.name}
            required
          />
          <TextField
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "1rem", marginTop: "1rem" }}
            name="quantity"
            onChange={handleChange}
            value={productFormData.quantity}
            required
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "1rem", marginTop: "1rem" }}
            name="price"
            onChange={handleChange}
            value={productFormData.price}
            required
          />
          <TextField
            label="Description"
            type="text"
            multiline
            fullWidth
            variant="standard"
            sx={{ marginBottom: "1rem", marginTop: "1rem" }}
            name="description"
            onChange={handleChange}
            value={productFormData.description}
            required
            minRows={3}
          />
          <Box mt={2} mb={3}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={handleChangeCategory}
              >
                <MenuItem value={"kitchen"}>Kitchen</MenuItem>
                <MenuItem value={"bedroom"}>Bedroom</MenuItem>
                <MenuItem value={"bathroom"}>Bathroom</MenuItem>
                <MenuItem value={"living-room"}>Living Room</MenuItem>
                <MenuItem value={"office"}>Office</MenuItem>
                <MenuItem value={"outdoor"}>Outdoor</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <input type="file" onChange={handleChangeImage} accept="image/*" />
          {file && (
            <img
              src={file}
              alt="product"
              style={{ width: "10rem", display: "block", margin: "1rem 0" }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={handleClose}
            disabled={addProduct.isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={handleAddProduct}
            disabled={addProduct.isLoading}
          >
            Submit
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddProduct;
