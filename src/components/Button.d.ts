import { MouseEvent } from 'react';
import './button_tyle.css';
interface ButtonProps {
    text?: string;
    color?: 'primary' | 'secondary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map