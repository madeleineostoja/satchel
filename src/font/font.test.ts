import { fontFace } from '.';

const FIXTURES = {
  basic: `
  @font-face {
    font-family: "My Font";
    src: url("/assets/fonts/my-font.woff2") format("woff2");
    font-display: swap;
  }
  `,
  custom: `
  @font-face {
    font-family: "My Font";
    src: url("/assets/fonts/my-font.woff2") format("woff2"),
      url("/assets/fonts/my-font.woff") format("woff");
    font-display: swap;
  }
  `,
  format: `
    @font-face {
      font-family: "My Font";
      src: url("/assets/fonts/my-font.ttf") format("truetype");
      font-weight: 700;
      font-style: italic;
      font-display: swap;
    }
  `
};

describe('fontFace', () => {
  test('Generates @font-face rules with a single font', () => {
    expect(fontFace('My Font', ['/assets/fonts/my-font.woff2'])).toMatchString(
      FIXTURES.basic
    );
  });

  test('Generates @font-face rules with multiple fonts', () => {
    expect(
      fontFace('My Font', [
        '/assets/fonts/my-font.woff2',
        '/assets/fonts/my-font.woff'
      ])
    ).toMatchString(FIXTURES.custom);
  });

  test('Generates @font-face rules with custom config', () => {
    expect(
      fontFace('My Font', ['/assets/fonts/my-font.ttf'], {
        weight: 700,
        style: 'italic'
      })
    ).toMatchString(FIXTURES.format);
  });
});
