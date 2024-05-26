import "styled-components";

interface ColorProps {
  primary: [];
  secondary: [];
  white: string;
  text: string;
  heading: string;
  gray: [];
  blue: string;
  red: string;
  green: string;
  yellow: string;
  chat: string;
  muted: string;

  brand: {
    secondary: {
      500: string;
      400: string;
    };
  };
}
interface SpacingProps {
  xss: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
  xxxxxl: string;
}

interface FontSizeProps {
  xs: string;
  s: string;
  sm: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
}

interface RoundnessProps {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

interface TypographyProps {
  body: string;
  heading: string;
  blinkMacSystem: string;
}

interface ShadowProps {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

interface Breakpoints {
  xs: "380px";
  sm: "540px";
  md: "768px";
  lg: "1025px";
  xl: "1280px";
}

export interface DefaultTheme {
  colors: ColorProps;
  spacing: SpacingProps;
  fontSize: FontSizeProps;
  roundness: RoundnessProps;
  font: TypographyProps;
  shadow: ShadowProps;
  breakpoints: Breakpoints;
}
