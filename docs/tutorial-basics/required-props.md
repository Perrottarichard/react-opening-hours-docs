---
sidebar_position: 1
---

# Required Props

Learn about the required _values_ & _getValues_ props:

## values prop

The <em>values</em> prop is required and expects an object with 14 key/value pairs of this shape:

### type FormValuesKey

```js
type FormValuesKey =
  | "sun_open"
  | "sun_close"
  | "mon_open"
  | "mon_close"
  | "tue_open"
  | "tue_close"
  | "wed_open"
  | "wed_close"
  | "thu_open"
  | "thu_close"
  | "fri_open"
  | "fri_close"
  | "sat_open"
  | "sat_close";
```

### type TimeValue

TimeValue is a string with a time format <code>HH:mm:ss</code>

```js
type TimeValue =
  | "00:00:00"
  | "00:30:00"
  | "01:00:00"
  | "01:30:00"
  | "02:00:00"
  | "02:30:00"
  | "03:00:00"
  | "03:30:00"
  | "04:00:00"
  | "04:30:00"
  | "05:00:00"
  | "05:30:00"
  | "06:00:00"
  | "06:30:00"
  | "07:00:00"
  | "07:30:00"
  | "08:00:00"
  | "08:30:00"
  | "09:00:00"
  | "09:30:00"
  | "10:00:00"
  | "10:30:00"
  | "11:00:00"
  | "11:30:00"
  | "12:00:00"
  | "12:30:00"
  | "13:00:00"
  | "13:30:00"
  | "14:00:00"
  | "14:30:00"
  | "15:00:00"
  | "15:30:00"
  | "16:00:00"
  | "16:30:00"
  | "17:00:00"
  | "17:30:00"
  | "18:00:00"
  | "18:30:00"
  | "19:00:00"
  | "19:30:00"
  | "20:00:00"
  | "20:30:00"
  | "21:00:00"
  | "21:30:00"
  | "22:00:00"
  | "22:30:00"
  | "23:00:00"
  | "23:30:00"
  | "closed";
```

### type FormValues

```js
type FormValues = {
  [key in FormValuesKey]: TimeValue;
}
```

```js
//EXAMPLE:

const defaultValues: FormValues = {
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
```

:::tip The default above denotes a standard Monday to Friday, 9:00AM - 5:00PM schedule and is the recommended default.
:::

### Configure a "Closed" day

        To denote a closed day, provide a string value of <em>'closed'</em> for both the open and close keys on any given day.

### Configure an "Open" day

         Provide a 24-hour formatted <code>hh:mm:ss</code> string value to prefill the time.

#### Example:

```js
// DO NOT do this:
          wed_open: "09:00:00",   // wed_open and wed_close are a "Day"
          wed_close: "closed",    // a "Day" cannot be both open and closed

// DO this for an open day:
          wed_open: "09:00:00",
          wed_close: "17:00:00",

// OR this for a closed day:
          wed_open: "closed",
          wed_close: "closed",
```

### Validation

Internally the component will not allow selection of an open time that is greater than or equal to the close time of that same day.
Similarly, it will not allow selection of a close time that is less than or equal to the open time of that same day.

For example, if <code>mon_open = "10:00:00"</code>, then <code>mon_close</code> cannot = <code>"08:00:00"</code>

### Usage

```jsx title="src/form.js"
import { OpeningHoursUnstyled } from "react-opening-hours";

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

export default function MyForm() {
  return (
    <div style={{ width: "500px" }}>
      <OpeningHoursUnstyled values={defaultBusinessHours} />
    </div>
  );
}
```

## getValues prop

The <em>getValues</em> prop is required to export the internal values up to the parent form

### Usage

```jsx title="src/form.js"
import { OpeningHoursUnstyled } from "react-opening-hours";

export default function MyForm() {
  function doSomethingWithValues(values) {
    // your logic to update your form, call an api,
    // log the values, or do something unrelated whenever internal values change
  }
  return (
    <div style={{ width: "500px" }}>
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
        getValues={(values) => doSomethingWithValues(values)}
      />
    </div>
  );
}
```

_Important_ : getValues will always return the <code>values</code> in the shape of type <code>FormValues</code>
