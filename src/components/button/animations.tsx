import { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% { --shimmer: 0deg; }
  100% { --shimmer: 360deg; }
`;

export const shine = keyframes`
  0% { opacity: 0; }
  15% { opacity: 1; }
  55% { opacity: 1; }
  100% { opacity: 0; }
`;

export const text = keyframes`
  0% { background-position: 100% center; }
  100% { background-position: -100% center; }
`;
