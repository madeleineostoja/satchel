import { range } from '.';

const FIXTURES = {
  track: `
    -webkit-appearance: none;
    &::-moz-focus-outer {
      border: 0;
    }
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 2px;
      background: grey;
    }
    &::-moz-range-track  {
      -moz-appearance: none;
      height: 2px;
      background: grey;
    }
    &::-ms-track  {
      height: 2px;
      background: grey;
    }
  `,
  thumb: `
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }
  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }
  &::-ms-thumb {
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }
`
};

describe('Range', () => {
  test('Applies track properties', () => {
    expect(
      range.track`
      height: 2px;
      background: grey;
    `
    ).toMatchString(FIXTURES.track);
  });

  test('Applies thumb properties', () => {
    expect(
      range.thumb`
      height: 5px;
      width: 5px;
      border-radius: 5px;
    `
    ).toMatchString(FIXTURES.thumb);
  });
});
