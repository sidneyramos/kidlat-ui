---
id: textarea
title: Textarea
sidebar_label: Textarea
---

An easy-to-style Textarea component. Includes debounced (delayed until keypress pause) input change, to save input from updating too much.

```jsx live
<Textarea placeholder="Default textarea" />
```

## Disabled

```jsx live
<Textarea disabled placeholder="Default textarea" />
```

## Invalid Value

```jsx live
<>
  <Textarea required placeholder="Default textarea" />
  <Textarea isInvalid placeholder="Default textarea" />
</>
```

## Get Value

```jsx live
function LiveTextarea() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Textarea
        placeholder="Default textarea"
        getValue={setValue} // accepts a callback
        valueDelay={500} // how long to wait to get the value
      />
      <p>Textarea value: {value}</p>
    </div>
  );
}
```

## Variants

```jsx live
<>
  <Textarea placeholder="Minimal" variant="minimal" m="10px" />
  <Textarea placeholder="Line textarea" variant="underline" m="10px" />
  <Textarea placeholder="Unstyled" variant="unstyled" m="10px" />
</>
```

## Sizes

```jsx live
<>
  <Textarea placeholder="XS textarea" size="xs" mr="10px" />
  <Textarea placeholder="Small textarea" size="sm" mr="10px" />
  <Textarea placeholder="Medium textarea" size="md" mr="10px" />
  <Textarea placeholder="Large textarea" size="lg" mr="10px" />
</>
```
