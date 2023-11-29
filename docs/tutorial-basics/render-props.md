---
sidebar_position: 4
---

# Render Props

Learn how to use render props:

### renderSelect

_renderSelect_ can be used to substitute a custom component or 3rd party lib for the native select elements

For react-select just pass all the props to the Select component

```jsx
import { OpeningHoursUnstyled } from 'react-opening-hours';
import Select from "react-select";

...other code

<OpeningHoursUnstyled
  renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
  ...

```

For MUI Select or a custom implementation using the browser's native select, you'll have to place the props correctly:

Custom Component Example:

```jsx
import {OpeningHoursUnstyled} from "react-opening-hours";

const MyCustomSelect = (props) => {
  const { id, day, options, value, onChange } = props;
  //id = unique string
  //day = Day ie: type Day = { id: string, time: TimeOption, label: string, seq: number };
  //options = TimeOption []
  //value = TimeOption = {value: 'hh:mm:ss' | 'closed', label: 'hh:mm:ss' | 'closed' | 'hh:mm[am | pm]}
  //onChange = func
  return (
    <select
      key={id} //help React by providing unique key
      name={id}
      style={{
        padding: '10px',
        backgroundColor: '#555',
        color: '#fff',
        border: 'none',
        width: '150px',
        borderRadius: '5px',
        appearance: 'none',
        outline: 'none',
      }}
      value={value.value} //pass the string value from the TimeOption.value
      onChange={onChange} //pass the change handler directly
    >
      {options.map((o) => {
        return (
          <option
            key={o.value} //use value as a unique key
            value={o.value} //set TimeOption.value string as the value for the option
                            //and show the TimeOption.label below
          >
               {o.label}
          </option>
        );
      })}
    </select>
  );
};

const MyForm = () => {

  return(
    <OpeningHoursUnstyled
      renderSelect={(props) => <MyCustomSelect {...props} />}
      ...
  )
}
```

MUI Select Example:

```jsx
<OpeningHoursUnstyled
renderSelect={({ id, day, options, value, onChange }) => {
      return (
        <FormControl sx={{ width: '160px', my: 1 }}>
          <InputLabel>{day.label}</InputLabel>
          <Select
            size="small"
            key={id}
            id={id}
            value={value.value}
            label={day.label}
            onChange={onChange}
          >
            {options.map((o) => (
              <MenuItem key={o.value} value={o.value}>
                {o.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }}
...
/>
```

### renderDayButton

_renderDayButton_ can be used to substitute the buttons that toggle the days of the week for custom components or a 3rd party button

```jsx
//id = unique identifier -- pass it as key to your button
//text = provides the button text -- first letter of the day of the week, @type String
//onClick = click handler, pass it
//active = flag that can be used for active/inactive styling, @type Boolean
renderDayButton={({ id, text, onClick, active }) => (
      <IconButton
        key={id}
        type="button"
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
//id = unique identifier to be passed as a key to your component
//label = day of the week, @type String
//other = htmlFor, just spread it like so...
renderLabel={({ id, label, ...other }) => (
      <Typography key={id} variant="caption" {...other}>
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

export const MyForm = () => (
  <OpeningHoursUnstyled
    getValues={(values) => console.log(values)}
    defaultValues={[
      { id: "dimanche_ouvert", time: "closed", label: "Dimanche" },
      { id: "dimanche_fermé", time: "closed", label: "Dimanche" },
      { id: "lundi_ouvert", time: "09:00:00", label: "Lundi" },
      { id: "lundi_fermé", time: "17:00:00", label: "Lundi" },
      { id: "mardi_ouvert", time: "09:00:00", label: "Mardi" },
      { id: "mardi_fermé", time: "17:00:00", label: "Mardi" },
      { id: "mercredi_ouvert", time: "09:00:00", label: "Mercredi" },
      { id: "mercredi_fermé", time: "17:00:00", label: "Mercredi" },
      { id: "jeudi_ouvert", time: "09:00:00", label: "Jeudi" },
      { id: "jeudi_fermé", time: "17:00:00", label: "Jeudi" },
      { id: "vendredi_ouvert", time: "09:00:00", label: "Vendredi" },
      { id: "vendredi_fermé", time: "17:00:00", label: "Vendredi" },
      { id: "samedi_ouvert", time: "closed", label: "Samedi" },
      { id: "samedi_fermé", time: "closed", label: "Samedi" },
    ]}
    ampm
    showCopyToAll
    dayButtonContainerStyles={{ marginBottom: 12 }}
    renderDayButton={(props) => <AntDesignButton key={props.id} {...props} />}
    getDayButtonLabelText={(label) => label.slice(0, 3)}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton
          onClick={onClick}
          sx={{ position: "absolute", right: 30, top: 0 }}
        >
          <ContentCopyOutlined />
        </IconButton>
      </Tooltip>
    )}
    selectContainerStyles={{ width: "140px" }}
    labelContainerStyles={{ width: "90px" }}
    renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
    renderLabel={({ id, label, ...other }) => (
      <Typography
        key={id}
        variant="body1"
        {...other}
        sx={{ lineHeight: 3, fontFamily: "tahoma" }}
      >
        {label}
      </Typography>
    )}
  />
);
```
