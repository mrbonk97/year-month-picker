# Year Month Picker Library

A customizable React component for selecting year and month.
Built with TailwindCSS and works seamlessly with popovers and headless UI libraries.

## Installation

```shell
npm install year-month-picker
```

## Basic Usage

```tsx
import { YmPicker } from "year-month-picker";

export default function Demo() {
  return <YmPicker mode="year-month" onSelect={(ym) => console.log(ym)} />;
}
```

## Documentation

Visit - to view the documentation.

## API Reference

| Prop      | Type                                                      | Default     |
| --------- | --------------------------------------------------------- | ----------- |
| mode      | `"year-month"` \| `"year"` \| `"month"`                   | `"year"`    |
| ym        | {year\: number \| null, month\: number \| null}           | —           |
| onSelect  | ({year\: number \| null, month\: number \| null}) => void | —           |
| message   | string                                                    | Select date |
| container | React.HTMLAttributes<HTMLDivElement>                      | —           |
| header    | React.HTMLAttributes<HTMLDivElement>                      | -           |
| yearGrid  | React.HTMLAttributes<HTMLDivElement>                      | -           |
| monthGrid | React.HTMLAttributes<HTMLDivElement>                      | -           |
| button    | React.HTMLAttributes<HTMLDivElement>                      | -           |
