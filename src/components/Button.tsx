import { MouseEvent } from 'react';
import './button_tyle.css';
import styled, { keyframes } from 'styled-components';

// Define the props type
interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text = 'Button', color = 'primary', type = 'button', onClick }) => {
    // Delayed onClick handler
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (type !== 'submit') {
            e.preventDefault();
        }
        setTimeout(() => {
            if (typeof onClick === 'function') {
                onClick(e);
            }
        }, 250);
    };

    return (
        <ButtonStyled onClick={onClick}>
            <span className="text">{text}</span>
            <span className="shimmer" />
        </ButtonStyled>
    );
};

export default Button;

const shimmer = keyframes`
  0% { --shimmer: 0deg; }
  100% { --shimmer: 360deg; }
`;

const textAnimation = keyframes`
  0% { background-position: 100% center; }
  100% { background-position: -100% center; }
`;

const ButtonStyled = styled.button`
  color: var(--bg);
  font-weight: 600;
  background-image: linear-gradient(315deg, #5e6267 -10%, #efdbfd 50%, #6e6e6a 110%);
  padding: 0.8em 1.4em;
  margin: 2em;
  position: relative;
  box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%);
  border-radius: 0.66em;
  transition: all var(--spring-duration) var(--spring-easing);

  &:hover {
    scale: 1.2;
    box-shadow: 0 4px 8px -2px hsl(var(--glow-hue) 50% 20% / 50%);
  }

  .text {
    animation: ${textAnimation} 0.66s ease-in 1 both;
  }

  .shimmer {
    position: absolute;
    inset: -40px;
    border-radius: inherit;
    mask-image: conic-gradient(from var(--shimmer, 0deg), transparent 0%, black 50%, transparent 100%);
    animation: ${shimmer} 1s linear infinite both;
  }
`;
