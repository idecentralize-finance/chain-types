import styled from 'styled-components';
import { shimmer, shine, text } from './animations';

export const Button = styled.button`
  color: var(--bg);
  font-weight: 600;
  background-image: linear-gradient(315deg, #5e6267 -10%, #efdbfd 50%, #6e6e6a 110%);
  padding: 0.8em 1.4em;
  margin: 2em;
  position: relative;
  isolation: isolate;
  box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%),
              inset 0 -10px 20px -10px hsla(var(--shadow-hue), 10%, 90%, 95%);
  border-radius: 0.66em;
  scale: 1;
  transition: all var(--spring-duration) var(--spring-easing);

  &:hover:not(:active), &.active {
    transition-duration: calc(var(--spring-duration) * 0.5);
    scale: 1.2;
    box-shadow: 0 4px 8px -2px hsl(var(--glow-hue) 50% 20% / 50%);
  }

  &:active {
    scale: 1.1;
    transition-duration: calc(var(--spring-duration) * 0.5);
  }
`;

export const Shimmer = styled.div`
  position: absolute;
  inset: -40px;
  border-radius: inherit;
  mask-image: conic-gradient(
    from var(--shimmer, 0deg),
    transparent 0%, transparent 10%,
    black 36%, black 45%, transparent 50%,
    transparent 60%, black 85%, black 95%, transparent 100%
  );
  mask-size: cover;
  mix-blend-mode: plus-lighter;
  animation: ${shimmer} 1s linear infinite both;

  &::before, &::after {
    transition: all 0.5s ease;
    opacity: 0;
    content: "";
    border-radius: inherit;
    position: absolute;
    mix-blend-mode: color;
    inset: 40px;
    pointer-events: none;
  }

  &::before {
    box-shadow: 0 0 3px 2px hsl(var(--glow-hue) 20% 95%),
                0 0 7px 4px hsl(var(--glow-hue) 20% 80%),
                0 0 13px 4px hsl(var(--glow-hue) 50% 70%),
                0 0 25px 5px hsl(var(--glow-hue) 100% 70%);
    z-index: -1;
  }

  &::after {
    box-shadow: inset 0 0 0 1px hsl(var(--glow-hue) 70% 95%),
                inset 0 0 2px 1px hsl(var(--glow-hue) 100% 80%),
                inset 0 0 5px 2px hsl(var(--glow-hue) 100% 70%);
    z-index: 2;
  }
`;

export const Text = styled.span`
  color: #000;
  background-clip: text;
  background-color: var(--bg);
  background-image: linear-gradient(120deg, transparent, hsla(var(--glow-hue), 100%, 80%, 0.66) 40%, hsla(var(--glow-hue), 100%, 90%, 0.9) 50%, transparent 52%);
  background-repeat: no-repeat;
  background-size: 300% 300%;
  background-position: center 200%;

  &:hover, &.active {
    animation: ${text} 0.66s ease-in 1 both;
  }
`;
