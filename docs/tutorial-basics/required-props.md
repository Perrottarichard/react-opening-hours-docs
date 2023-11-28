---
sidebar_position: 1
---

# Required Props

Learn about the required _defaultValues_ & _getValues_ props:

## defaultValues prop

The <em>defaultValues</em> prop is required and expects an array of 14 objects in this shape:

```js
type DefaultDay = { id: string, time: TimeValue, label: string };
type DefaultValues = DefaultDay[];
```

```js
//EXAMPLE:

const defaultValues = [
  { id: "sun_open", time: "closed", label: "Sunday" },
  { id: "sun_close", time: "closed", label: "Sunday" },
  { id: "mon_open", time: "09:00:00", label: "Monday" },
  { id: "mon_close", time: "17:00:00", label: "Monday" },
  { id: "tue_open", time: "09:00:00", label: "Tuesday" },
  { id: "tue_close", time: "17:00:00", label: "Tuesday" },
  { id: "wed_open", time: "09:00:00", label: "Wednesday" },
  { id: "wed_close", time: "17:00:00", label: "Wednesday" },
  { id: "thu_open", time: "09:00:00", label: "Thursday" },
  { id: "thu_close", time: "17:00:00", label: "Thursday" },
  { id: "fri_open", time: "09:00:00", label: "Friday" },
  { id: "fri_close", time: "17:00:00", label: "Friday" },
  { id: "sat_open", time: "closed", label: "Saturday" },
  { id: "sat_close", time: "closed", label: "Saturday" },
];

// NOTE: The id and label can be whatever you need them to be as long as there are 14 of them.
// However, the time must be a valid string of type TimeValue

//The object MUST be in the order you want them to render.
//The example above will render Sunday as the first day of the week.
//Want to start the week with Monday?
//Your default would be:
const defaultValues = [
  { id: "mon_open", time: "09:00:00", label: "Monday" },
  { id: "mon_close", time: "17:00:00", label: "Monday" },
  { id: "tue_open", time: "09:00:00", label: "Tuesday" },
  { id: "tue_close", time: "17:00:00", label: "Tuesday" },
  { id: "wed_open", time: "09:00:00", label: "Wednesday" },
  { id: "wed_close", time: "17:00:00", label: "Wednesday" },
  { id: "thu_open", time: "09:00:00", label: "Thursday" },
  { id: "thu_close", time: "17:00:00", label: "Thursday" },
  { id: "fri_open", time: "09:00:00", label: "Friday" },
  { id: "fri_close", time: "17:00:00", label: "Friday" },
  { id: "sat_open", time: "closed", label: "Saturday" },
  { id: "sat_close", time: "closed", label: "Saturday" },
  { id: "sun_open", time: "closed", label: "Sunday" },
  { id: "sun_close", time: "closed", label: "Sunday" },
];

//Internally, each object will be assigned a sequence based on its index
//so the returned values will look like this:
[
  { id: "mon_open", time: "09:00:00", label: "Monday", seq: 0 },
  { id: "mon_close", time: "17:00:00", label: "Monday", seq: 1 },
  { id: "tue_open", time: "09:00:00", label: "Tuesday", seq: 2 },
  { id: "tue_close", time: "17:00:00", label: "Tuesday", seq: 3 },
  { id: "wed_open", time: "09:00:00", label: "Wednesday", seq: 4 },
  { id: "wed_close", time: "17:00:00", label: "Wednesday", seq: 5 },
  { id: "thu_open", time: "09:00:00", label: "Thursday", seq: 6 },
  { id: "thu_close", time: "17:00:00", label: "Thursday", seq: 7 },
  { id: "fri_open", time: "09:00:00", label: "Friday", seq: 8 },
  { id: "fri_close", time: "17:00:00", label: "Friday", seq: 9 },
  { id: "sat_open", time: "closed", label: "Saturday", seq: 10 },
  { id: "sat_close", time: "closed", label: "Saturday", seq: 11 },
  { id: "sun_open", time: "closed", label: "Sunday", seq: 12 },
  { id: "sun_close", time: "closed", label: "Sunday", seq: 13 },
];
```

:::tip The default above denotes a standard Monday to Friday, 9:00AM - 5:00PM schedule and is the recommended default.
:::

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

### Configure a "Closed" day

        To denote a closed day, provide a string value of <em>'closed'</em> for both the open and close objects on a given day.

### Configure an "Open" day

         Provide a 24-hour formatted <code>hh:mm:ss</code> string value to prefill the time.

#### Example:

```js
// DO NOT do this:
  { id: "mon_open", time: "09:00:00", label: "Monday" }, //This is invalid
  { id: "mon_close", time: "closed", label: "Monday" }, //Monday cannot be opened and closed for the day

// DO this for an open day:
  { id: "mon_open", time: "09:00:00", label: "Monday" },
  { id: "mon_close", time: "16:00:00", label: "Monday" },

// OR this for a closed day:
  { id: "mon_open", time: "closed", label: "Monday" },
  { id: "mon_close", time: "closed", label: "Monday" },
```

### Validation

Internally the component will not allow selection of an open time that is greater than or equal to the close time of that same day.
Similarly, it will not allow selection of a close time that is less than or equal to the open time of that same day.

For example, if <code>mon_open</code> current time value = <code>"10:00:00"</code>, then the <code>mon_close</code> time options will be filtered to exclude times before 10:00:00

### Usage

```jsx title="src/form.js"
import { OpeningHoursUnstyled } from "react-opening-hours";

const defaultBusinessHoursGerman = [
  { id: "sonne_offen", time: "closed", label: "Sonntag" },
  { id: "sonne_geschlossen", time: "closed", label: "Sonntag" },
  { id: "montag_offen", time: "09:00:00", label: "Montag" },
  { id: "montag_geschlossen", time: "17:00:00", label: "Montag" },
  { id: "dienstag_offen", time: "09:00:00", label: "Dienstag" },
  { id: "dienstag_geschlossen", time: "17:00:00", label: "Dienstag" },
  { id: "mittwoch_offen", time: "09:00:00", label: "Mittwoch" },
  { id: "mittwoch_geschlossen", time: "17:00:00", label: "Mittwoch" },
  { id: "donnerstag_offen", time: "09:00:00", label: "Donnerstag" },
  { id: "donnerstag_geschlossen", time: "17:00:00", label: "Donnerstag" },
  { id: "freitag_offen", time: "09:00:00", label: "Freitag" },
  { id: "freitag_geschlossen", time: "17:00:00", label: "Freitag" },
  { id: "samstag_offen", time: "closed", label: "Samstag" },
  { id: "samstag_geschlossen", time: "closed", label: "Samstag" },
];

export default function MyForm() {
  return (
    <div style={{ width: "500px" }}>
      <OpeningHoursUnstyled defaultValues={defaultBusinessHoursGerman} />
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
        defaultValues={[
          { id: "sun_open", time: "closed", label: "Sunday" },
          { id: "sun_close", time: "closed", label: "Sunday" },
          { id: "mon_open", time: "09:00:00", label: "Monday" },
          { id: "mon_close", time: "17:00:00", label: "Monday" },
          { id: "tue_open", time: "09:00:00", label: "Tuesday" },
          { id: "tue_close", time: "17:00:00", label: "Tuesday" },
          { id: "wed_open", time: "09:00:00", label: "Wednesday" },
          { id: "wed_close", time: "17:00:00", label: "Wednesday" },
          { id: "thu_open", time: "09:00:00", label: "Thursday" },
          { id: "thu_close", time: "17:00:00", label: "Thursday" },
          { id: "fri_open", time: "09:00:00", label: "Friday" },
          { id: "fri_close", time: "17:00:00", label: "Friday" },
          { id: "sat_open", time: "closed", label: "Saturday" },
          { id: "sat_close", time: "closed", label: "Saturday" },
        ]}
        getValues={(values) => doSomethingWithValues(values)}
      />
    </div>
  );
}
```

_Important_ : getValues will always return the <code>values</code> in the shape of type <code>Day[]</code>

```js
type Day = { id: string, time: string, label: string, seq: number };
```
