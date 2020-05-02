function clean(string) {
  return string.replace(/\s+/g, ' ').trim();
}

expect.extend({
  toMatchString(received, expected) {
    return {
      message: () => `expected ${received} to match ${expected}`,
      pass: clean(received) === clean(expected)
    };
  }
});
