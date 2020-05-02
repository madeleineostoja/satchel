export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchString(expected: string): R;
    }
  }
}
