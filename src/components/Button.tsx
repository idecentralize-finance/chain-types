import { MouseEvent } from 'react';
import './button_tyle.css';

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
        <button className={`button ${color}`} type={type} onClick={handleClick}>
            <span className="text">{text}</span>
            <span className="shimmer" />
        </button>
    );
};

export default Button;
