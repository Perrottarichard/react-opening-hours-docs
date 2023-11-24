---
sidebar_position: 4
---

# Render Props

Learn how to use render props:

### renderSelect

_renderSelect_ can be used to substitute a custom component or 3rd party lib for the native select elements

Pass all the props to your custom component

```jsx
renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
```

### renderDayButton

_renderDayButton_ can be used to substitute the buttons that toggle the days of the week for custom components or a 3rd party button

```jsx
//key = unique key so React doesn't compain when iterating, pass it
//text = provides the button text -- first letter of the day of the week, @type String
//onClick = click handler, pass it
//active = flag that can be used for active/inactive styling, @type Boolean
renderDayButton={({ key, text, onClick, active }) => (
      <IconButton
        type="button"
        key={key}
        variant="contained"
        size="small"
        sx={(theme) => ({
          opacity: active ? 1 : 0.4,
          px: text === "M" || text === "W" ? 1.25 : 1.5,
          mx: 0.75,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          "&:hover": {
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.getContrastText(theme.palette.primary.dark),
          },
        })}
        onClick={onClick}
      >
        <Typography component={"span"}>{text}</Typography>
      </IconButton>
    )}
```

### renderCopyButton

_renderCopyButton_ can be used to substitute the native button element for a custom button. Typically an icon button would be used here as in the example below

Pass the click handler to your custom button

```jsx
renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton
          onClick={onClick}
          sx={{ position: "absolute", right: 16, top: 26 }}
        >
          <CopyAllRounded />
        </IconButton>
      </Tooltip>
    )}
```

### renderLabel

_renderLabel_ can be used to substitute the native label element for a custom label (parent div can be styled via _labelContainerStyles_ or _labelContainerClassName_)

```jsx

//label = day of the week, @type String
//other = key, htmlFor, just spread them like so...
renderLabel={({ label, ...other }) => (
      <Typography variant="caption" {...other}>
        {label}
      </Typography>
    )}
```

### Example using all 4 renderProps options:

```jsx title="src/form.js"
import { CopyAllRounded } from "@mui/icons-material";
import { OpeningHoursUnstyled } from "react-opening-hours";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Select from "react-select";

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: 8,
    border: "1px solid " + (state.isFocused ? "#4a90e2" : "#ccc"),
    boxShadow: state.isFocused ? "0 0 5px rgba(74, 144, 226, 0.5)" : null,
    "&:hover": {
      border: "1px solid #4a90e2",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? "#4a90e2" : null,
    color: state.isFocused ? "white" : "black",
  }),
};

export const OpeningHoursUnstyledStory = () => (
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
    dayButtonContainerStyles={{ marginBottom: 12 }}
    renderDayButton={({ key, text, onClick, active }) => (
      <IconButton
        type="button"
        key={key}
        variant="contained"
        size="small"
        sx={(theme) => ({
          opacity: active ? 1 : 0.4,
          px: text === "M" || text === "W" ? 1.25 : 1.5,
          mx: 0.75,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          "&:hover": {
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.getContrastText(theme.palette.primary.dark),
          },
        })}
        onClick={onClick}
      >
        <Typography component={"span"}>{text}</Typography>
      </IconButton>
    )}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton
          onClick={onClick}
          sx={{ position: "absolute", right: 16, top: 26 }}
        >
          <CopyAllRounded />
        </IconButton>
      </Tooltip>
    )}
    renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
    renderLabel={({ label, ...other }) => (
      <Typography variant="caption" {...other}>
        {label}
      </Typography>
    )}
  />
);
```
