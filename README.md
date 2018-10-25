# @krustyc/react-timezone

> Timezone Picker for React

## Demo

[Available here.](http://krustyc.github.io/react-timezone/demo/)

## Installation

```bash
$ npm install @krustyc/react-timezone
or
$ yarn add @krustyc/react-timezone
```

## Usage

This a controlled element. `value` and `onChange` needs to be set. Values are timezone codenames.

You can style the container element with `className` and `style` props.

Passing an object as `inputProps` prop will pass it to the underlying input. It can be used for setting `name`, `placeholder` on input or listening to input events.

Minimal styles are included with the build.

Timezones are included in the bundle and can be accessed by importing `timezones` from the package.

A zone object's structure is like this:

```javascript
{
  name: string,
  label: string,
  offset: number,
}
```

## Timezones

Timezones are ~~stolen~~borrowed from Google Calendar.

## Example

```javascript
import TimezonePicker from 'react-timezone';

export default () => (
  <TimezonePicker
    value="Asia/Yerevan"
    onChange={timezone => console.log('New Timezone Selected:', timezone)}
    inputProps={{
      placeholder: 'Select Timezone...',
      name: 'timezone',
    }}
  />
);
```
