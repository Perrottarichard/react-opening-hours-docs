---
sidebar_position: 5
---

# Recipes

Here is an example with a Bootstrap/MUI flavor. It swaps a React Select for the native select element,
styles the day buttons with a bootstrap look, and uses a MUI IconButton with a material icon for the Copy To All button

```jsx
import { OpeningHoursUnstyled } from "react-opening-hours";
import { IconButton } from "@mui/material";
import Select from "react-select";
import { CopyAllRounded } from "@mui/icons-material";

const defaultBusinessHours = {
  sun_open: "closed",
  sun_close: "closed",
  mon_open: "09:00:00",
  mon_close: "17:00:00",
  tue_open: "09:00:00",
  tue_close: "17:00:00",
  wed_open: "09:00:00",
  wed_close: "17:00:00",
  thu_open: "09:00:00",
  thu_close: "17:00:00",
  fri_open: "09:00:00",
  fri_close: "17:00:00",
  sat_open: "closed",
  sat_close: "closed",
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginRight: "24px",
    border: "2px solid #5a6268", // Border color
    borderRadius: "8px",
    boxShadow: state.isFocused ? "0 0 0 2px #007bff" : "none", // Border color on focus
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e6f7ff" : "white", // Background color on focus
    color: state.isSelected ? "#007bff" : "black", // Text color for selected option
  }),
};

const dayButtonActiveElementStyles = {
  display: "inline-block",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  cursor: "pointer",
  userSelect: "none",
  backgroundColor: "#007bff",
  border: "1px solid #007bff",
  color: "#fff",
  padding: "0.375rem 0.75rem",
  borderRadius: "0.25rem",
  marginRight: "16px",
  transition:
    "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease",
};

function MyForm() {
  return (
    <div style={{ width: "500px", height: "auto", padding: 24 }}>
      <OpeningHoursUnstyled
        values={defaultBusinessHours}
        getValues={(values) => console.log(values)}
        ampm
        showCopyToAll
        selectComponent={<Select style={customStyles} />}
        copyButtonComponent={
          <IconButton>
            <CopyAllRounded />
          </IconButton>
        }
        copyButtonElementStyles={{ position: "absolute", right: 20 }}
        dayButtonContainerStyles={{ marginBottom: 16 }}
        dayButtonActiveElementStyles={dayButtonActiveElementStyles}
        dayButtonInactiveElementStyles={{
          ...dayButtonActiveElementStyles,
          opacity: 0.3,
        }}
        rootContainerStyles={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          width: "500px",
        }}
        labelContainerStyles={{
          minWidth: 100,
          paddingTop: 4,
        }}
        selectContainerStyles={{
          minWidth: 120,
          marginRight: 8,
        }}
      />
    </div>
  );
}

export default MyForm;
```
