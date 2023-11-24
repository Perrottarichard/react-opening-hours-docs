---
sidebar_position: 4
---

# Render Props

Learn how to use render props:

### renderSelect

_renderSelect_ can be used to substitute a custom component or 3rd party lib for the native select elements

### renderDayButton

_renderDayButton_ can be used to substitute the buttons that toggle the days of the week for custom components or a 3rd party button

### renderCopyButton

_renderCopyButton_ can be used to substitute the native button element for a custom button. Typically an icon button would be used here as in the example below

### Example using all 3 renderProps options:

```jsx title="src/form.js"
import { CopyAllRounded } from "@mui/icons-material";
import { OpeningHoursUnstyled } from "react-opening-hours";
import { Button, IconButton, Tooltip } from "@mui/material";
import Select from "react-select";

//style the Select according to the react-select docs
const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginRight: "24px",
    border: "2px solid #5a6268",
    borderRadius: "8px",
    boxShadow: state.isFocused ? "0 0 0 2px #007bff" : "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e6f7ff" : "white",
    color: state.isSelected ? "#007bff" : "black",
  }),
};

export const MyForm = () => (
<div style={{width: '500px'}}>
  <OpeningHoursUnstyled
    values={{
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
    }}
    getValues={(values) => console.log(values)}
    ampm
    showCopyToAll
    verticalTimePairs
    renderDayButton={({ key, text, onClick }) => (
      <Button
        variant="outlined"
        color="secondary"
        key={key}
        onClick={onClick}
        sx={{ borderRadius: "8px", m: 1 }}
      >
        {text}
      </Button>
    )}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton
          onClick={onClick}
          sx={{ position: "absolute", right: 20, top: -10 }}
        >
          <CopyAllRounded />
        </IconButton>
      </Tooltip>
    )}
    renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
  />
);
```
