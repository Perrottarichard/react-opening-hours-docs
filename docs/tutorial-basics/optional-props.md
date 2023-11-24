---
sidebar_position: 2
---

# Optional Props

Learn about the optional props:

### ampm

_ampm_ will display the time values in a 12-hour Am/Pm format

```jsx title="src/form.js"
...
      <OpeningHoursUnstyled
        values={defaultBusinessHours}
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
        values={defaultBusinessHours}
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
        values={defaultBusinessHours}
        ampm
        showCopyToAll
        verticalTimePairs={isMobile}
      />
 ...

```
