import { fontFace } from '.';

const FIXTURES = {
  basic: `
  @font-face {
    font-family: "My Font";
    src: url("/assets/fonts/my-font.woff2") format("woff2"),
      url("/assets/fonts/my-font.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  `,
  custom: `
  @font-face {
    font-family: "My Font";
    src: url("/assets/fonts/my-font.woff") format("woff"),
      url("/assets/fonts/my-font.ttf") format("truetype");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  `,
  format: `
    @font-face {
      font-family: "My Font";
      src: url("/assets/fonts/my-font.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `
};

describe('Fonts', () => {
  test('Generates @font-face rules', () => {
    expect(
      fontFace('My Font', '/assets/fonts/my-font', ['woff2', 'woff'])
    ).toMatchString(FIXTURES.basic);
  });

  test('Generates @font-face rules with extra config', () => {
    expect(
      fontFace('My Font', '/assets/fonts/my-font', ['woff', 'ttf'], {
        weight: 700,
        style: 'italic'
      })
    ).toMatchString(FIXTURES.custom);
  });

  test('Takes font format names', () => {
    expect(
      fontFace('My Font', '/assets/fonts/my-font', ['truetype'])
    ).toMatchString(FIXTURES.format);
  });
});
