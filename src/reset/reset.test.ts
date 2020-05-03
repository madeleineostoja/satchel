import { reset } from './reset';

const FIXTURES = {
  input: `
    margin: 0;
    border: 0;
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
