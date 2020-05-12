import { reset } from '.';

const FIXTURES = {
  input: `
    font: inherit;
    color: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    overflow: auto;
    -webkit-appearance: none;
  `
};

describe('Reset', () => {
  test('Applies appropriate reset', () => {
    expect(reset('input')).toMatchString(FIXTURES.input);
  });
});
