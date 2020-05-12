import diff from 'jest-diff';

function clean(string) {
  return string.replace(/\s+/g, ' ').trim();
}

expect.extend({
  toMatchString(received, expected) {
    return {
      message: () => diff(expected, received, { expand: true }),
      pass: clean(received) === clean(expected)
    };
  }
});
