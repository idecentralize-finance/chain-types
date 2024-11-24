import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --glow-hue: 222deg;
    --shadow-hue: 180deg;
    --spring-easing: linear(
      0, 0.002, 0.01 0.9%, 0.038 1.8%, 0.156, 0.312 5.8%, 0.789 11.1%, 1.015 14.2%,
      1.096, 1.157, 1.199, 1.224 20.3%, 1.231, 1.231, 1.226, 1.214 24.6%,
      1.176 26.9%, 1.057 32.6%, 1.007 35.5%, 0.984, 0.968, 0.956, 0.949 42%,
      0.946 44.1%, 0.95 46.5%, 0.998 57.2%, 1.007, 1.011 63.3%, 1.012 68.3%,
      0.998 84%, 1
    );
    --spring-duration: 1.33s;
  }
`;
