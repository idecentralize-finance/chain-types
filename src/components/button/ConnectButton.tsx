import { MouseEvent } from 'react';
import React from 'react';
import { Button, Shimmer, Text } from './classes';
import { GlobalStyles } from './global';

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
            <GlobalStyles />
            <Button onClick={onClick}>
                <Text>{text}</Text>
                <Shimmer />
            </Button>
        </>
    );
};

export default ConnectButton;
