import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateTimePicker,
  DateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";

export default function BasicDateTimePicker(
  props: DateTimePickerProps<string>
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Date and Time of the Apppointment"
          sx={{ marginTop: "1.5rem" }}
          {...props}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
