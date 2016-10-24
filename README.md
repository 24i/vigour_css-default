# css-default

[![Build Status](https://api.travis-ci.org/vigour-io/css-default.svg)](https://travis-ci.org/vigour-io/css-default)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm (scoped)](https://img.shields.io/npm/v/@vigour-io/css-default.svg)](https://github.com/vigour-io/css-default)

Minimal CSS reset for Vigour apps

## Getting started

### Install it:
```shell
npm i @vigour-io/css-default --save
```

### Require it:
```js
require('@vigour-io/css-default')
```

### Use it:
```css
/* CSS */

.box {
  border: var(--border-width-a) solid black;
  border-radius: var(--radius-a);
  padding-bottom: var(--spacing-b);
}

@media (--tablet) {
  .box {
    border-radius: var(--radius-b);
    padding-bottom: var(--spacing-a);
  }
}
```

## Available variables:

```
:root {
  --border-width-a: 5px;
  --radius-a: 2px;
  --radius-b: 6px;
  --spacing-a: 15px;
  --spacing-b: 5px;
  --spacing-c: 60px;
}
```

## Available media queries:

```
@custom-media --tablet (width > 425px);
@custom-media --laptop (width > 768px);
@custom-media --laptop-l (width > 1024px);
@custom-media --4k (width > 1440px);

```