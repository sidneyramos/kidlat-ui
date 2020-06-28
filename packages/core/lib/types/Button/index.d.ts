/// <reference types="react" />
import { SpaceProps, ColorProps } from "styled-system";
export interface ButtonProps {
    variant?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps | SpaceProps | ColorProps>;
export default Button;
