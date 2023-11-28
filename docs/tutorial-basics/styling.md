---
sidebar_position: 3
---

# Styling

Explore your options for styling

## Parent Container

Your parent container should define the dimensions you want for the Opening Hours component to fill.

#### Example:

```jsx title="src/form.js"
import { OpeningHoursUnstyled } from "react-opening-hours";

export default function MyForm() {
  return (
    // - explicitly define the width you want the component to be given
    // - set height auto to allow it to grow/shrink vertically as days are added/removed
    <div style={{ width: "500px", height: "auto" }}>
      <OpeningHoursUnstyled defaultValues={defaultBusinessHours} />
    </div>
  );
}
```

## className props

The following _className_ props can be passed to the component:

```js
rootContainerClassName,
dayButtonContainerClassName,
dayButtonActiveElementClassName,
dayButtonInactiveElementClassName,
labelContainerClassName,
labelElementClassName,
copyButtonContainerClassName,
copyButtonElementClassName,
selectContainerClassName,
selectElementClassName,
```

## style props

The following _style_ props can be passed to the component:

```js
rootContainerStyles,
dayButtonContainerStyles,
dayButtonActiveElementStyles,
dayButtonInactiveElementStyles,
labelContainerStyles,
labelElementStyles,
copyButtonContainerStyles,
copyButtonElementStyles,
selectContainerStyles,
selectElementStyles,
```

#### Keep in mind specificity if you mix _className_ and _style_!

## copyButtonElement

Whether using _className_ or _style_ or _renderCopyButton_ , it is recommended to use <code> position: 'absolute' </code>
and define the <code>top</code> and <code>right</code> values

Internally there is a <code> position: 'relative' </code> property on the first activated day's closing time container, which
places the expected position of the Copy To All button somewhere in the top-right region. Depending on other styles, the _top_
and _right_ values will surely need tweaking to get the placement just right

:::tip _Tip_: Use your own or 3rd party Icon Button. See [Render Props](render-props/#rendercopybutton).
:::
