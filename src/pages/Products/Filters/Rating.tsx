import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Grid,
  Rating as MuiRating,
} from "@mui/material";
import { RatingFilterOptions } from "./types";
import { changeRating } from "../../../redux/slices/filtersSlice";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

const Rating = () => {
  const rating = useAppSelector((state) => state.filters.rating);

  const dispatch = useAppDispatch();

  const handleChangeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRating(e.target.name === rating ? "" : e.target.name));
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "1.25rem",
          color: "#151875",
          padding: "1rem 0",
        }}
        fontWeight={700}
      >
        Rating
      </Typography>
      <FormGroup>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={rating === RatingFilterOptions.ABOVE_2}
                  onChange={handleChangeRating}
                  name={RatingFilterOptions.ABOVE_2}
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={2.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={rating === RatingFilterOptions.ABOVE_3}
                  onChange={handleChangeRating}
                  name={RatingFilterOptions.ABOVE_3}
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={3.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={rating === RatingFilterOptions.ABOVE_4}
                  onChange={handleChangeRating}
                  name={RatingFilterOptions.ABOVE_4}
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={4.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
      </FormGroup>
    </>
  );
};

export default Rating;
