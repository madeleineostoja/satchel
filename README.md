# Satchel

[![NPM](https://img.shields.io/npm/v/satchel-css)](https://www.npmjs.com/package/satchel-css) [![Jest](https://github.com/radioactivepesto/satchel/workflows/tests/badge.svg?branch=master&event=push)](https://github.com/radioactivepesto/satchel/actions?query=workflow%3Atests) [![Codecov](https://img.shields.io/codecov/c/github/radioactivepesto/satchel)](https://codecov.io/gh/radioactivepesto/satchel) [![License](https://img.shields.io/npm/l/satchel-css)](https://github.com/radioactivepesto/satchel/blob/master/LICENSE.md)

Satchel is a tiny collection of JavaScript utilities designed to be used in CSS-in-JS. \*\*\*\*It automates common patterns, saves time, encourages consistency, and makes developers' lives easier.

### Features

- Configurable normalization
- Element-specific resets
- Automagical fluid units
- Low-level grid helpers
- Aspect-ratio tools
- Color transforms
- Font importer
- Positioning shorthands
- Range element abstractions
- Clearfix

All of Satchel’s utilities return plain strings, so they work almost everywhere. The only prerequisite is that your environment supports [nested CSS selectors](https://tabatkins.github.io/specs/css-nesting/#nest-selector). Popular CSS-in-JS frameworks like [styled-components](https://styled-components.com/), [Emotion](https://emotion.sh/), [Linaria](https://linaria.now.sh/), and any other tool built on top of the [Stylis](https://github.com/thysultan/stylis.js) preprocessor work out of the box.

### Installation & Usage

Install Satchel from NPM

```bash
npm i satchel-css
```

Import Satchel’s utilities and embed them in CSS template strings by wrapping them in `${ }` braces.

While Satchel’s utilities will work in plain strings, to support nested selectors out of the box you’ll probably want to use them alongside a CSS-in-JS library like [Emotion](https://emotion.sh) or [styled-components](https://styled-components.com).

```javascript
import { css } from '@emotion/core';
import { reset, fluid } from 'satchel-css';

const buttonStyles = css`
  ${reset('button')}
  background: blue;
  color: white;
`;

const headingStyles = css`
  ${fluid('font-size', '2rem', '3.5rem')};
`;
```

### API

Read the full documentation at **[satchel.style](https://satchel.style)**
