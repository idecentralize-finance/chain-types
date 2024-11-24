import { MouseEvent } from 'react';
import React from 'react';

// Define the props type
interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ConnectButton: React.FC<ButtonProps> = ({ text = 'Button', color = 'primary', type = 'button', onClick }) => {
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
        <>

            <button className="chain-type-connect" onClick={onClick}>
                <span className="connect-text">{text}</span>
                <span className="connect-shimmer"></span>
            </button>
        </>
    );
};

export default ConnectButton;
