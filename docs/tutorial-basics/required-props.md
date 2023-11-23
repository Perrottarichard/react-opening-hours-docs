---
sidebar_position: 1
---

# Required Props

Learn about the required _values_ & _getValues_ props:

## values prop

The <em>values</em> prop is required and expects an object with 14 key/value pairs of this shape:

```js

        {
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
        }
```

:::danger The <em>values</em> object must include an the exact keys above for ALL 7 days of the week. Bad things will happen if you mess this up.
:::

        To denote a closed day, provide a string value of <em>'closed'</em> for both the open and close keys on any given day.
        Otherwise, provide a 24-hour format hh:mm:ss string value to prefill the time.

```js
//DO NOT do this:
          wed_open: "09:00:00",   // wed_open and wed_close are a team
          wed_close: "closed",    // together they need to have times to be considered "Opened"
                                  // or both be "closed" to be considered "Closed"

//DO this:
          wed_open: "09:00:00",
          wed_close: "17:00:00",

// Or this:
          wed_open: "closed",
          wed_close: "closed",
```

:::tip The example above denotes a standard Monday to Friday, 9:00AM - 5:00PM schedule and is the recommended default.
:::

#### Validation

Internally the component will not allow selection for an open time that is greater than or equal to the close time for the same day.
Similarly, it will not allow selection of a close time to be less than or equal to the open time for the same day.

The unavailable options will either be removed if using React-Select as a plugin for the _selectComponent_ slot,
or disabled if using the native _select_ element

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

_Important_ : getValues will always return the internal values in the shape described above.
All 14 keys will be included with either 'closed' for the day pair, or value 24-hour hh:mm:ss time string formats
