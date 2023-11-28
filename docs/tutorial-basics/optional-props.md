---
sidebar_position: 2
---

# Optional Props

Learn about the optional props:

### ampm

_ampm_ will display the time values in a 12-hour Am/Pm format

This prop is only for display purposes and DOES NOT affect the actual values <br/>
_getValues_ will still return the <code>values</code> in the shape of <code>Day[]</code> with <code>Day.time: TimeValue string</code>

```jsx title="src/form.js"
...
      <OpeningHoursUnstyled
        defaultValues={defaultBusinessHours}
        ampm
      />

        // shows a time string of '15:00:00' as '3:00pm', etc...
 ...

```

### showCopyToAll

_showCopyToAll_ will display the Copy to All button

The Copy To All button, when clicked, will take the first active day's open and close time
and will copy them to all other active days

:::tip _Tip_: Pass a custom Icon Button to _renderCopyButton_ . See [Render Props](render-props)
:::

```jsx title="src/form.js"
...
      <OpeningHoursUnstyled
        defaultValues={defaultBusinessHours}
        ampm
        showCopyToAll
      />
 ...

```

### verticalTimePairs

_verticalTimePairs_ will change the flex direction of the container for the label, open time, and close time elements.

By default they are displayed in a row.

:::tip _Tip_: Make this conditional as part of your responsive styling strategy. See [Styling](styling).
:::

```jsx title="src/form.js"
...
      <OpeningHoursUnstyled
        defaultValues={defaultBusinessHours}
        ampm
        showCopyToAll
        verticalTimePairs={isMobile}
      />
 ...

```

### getDayButtonLabelText

_getDayButtonLabelText_ is a callback that you can use to parse the label string provided in your defaultValues

```ts
getDayButtonLabelText?: (label: string) => string;
```

```jsx title="src/form.js"
...
     defaultValues={[
      { id: 'dimanche_ouvert', time: 'closed', label: 'Dimanche' },
      { id: 'dimanche_fermé', time: 'closed', label: 'Dimanche' },
      { id: 'lundi_ouvert', time: '09:00:00', label: 'Lundi' },
      { id: 'lundi_fermé', time: '17:00:00', label: 'Lundi' },
      { id: 'mardi_ouvert', time: '09:00:00', label: 'Mardi' },
      { id: 'mardi_fermé', time: '17:00:00', label: 'Mardi' },
      { id: 'mercredi_ouvert', time: '09:00:00', label: 'Mercredi' },
      { id: 'mercredi_fermé', time: '17:00:00', label: 'Mercredi' },
      { id: 'jeudi_ouvert', time: '09:00:00', label: 'Jeudi' },
      { id: 'jeudi_fermé', time: '17:00:00', label: 'Jeudi' },
      { id: 'vendredi_ouvert', time: '09:00:00', label: 'Vendredi' },
      { id: 'vendredi_fermé', time: '17:00:00', label: 'Vendredi' },
      { id: 'samedi_ouvert', time: 'closed', label: 'Samedi' },
      { id: 'samedi_fermé', time: 'closed', label: 'Samedi' },
    ]}
    ampm
    getDayButtonLabelText={(label) => label.slice(0, 3)}
    //slice whatever label is being returned in the current iteration
```
