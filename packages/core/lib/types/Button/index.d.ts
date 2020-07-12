/// <reference types="react" />
import { StylesProps } from "styled-system";
import * as KidlatColor from "../Color";
export declare type ButtonVariant = "primary" | "secondary";
export declare type ButtonSize = "xs" | "sm" | "md" | "lg";
export interface CombinedVariant {
    [index: string]: Object;
}
export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    tint?: KidlatColor.ColorVariant;
}
export interface PseudoProps {
    hover?: StylesProps;
    focus?: StylesProps;
    active?: StylesProps;
}
declare const Button: React.FC<ButtonProps | StylesProps>;
export default Button;
