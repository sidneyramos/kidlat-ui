import React from "react";
import { StylesProps } from "styled-system";
interface InputProps {
    placeholder?: string;
    defaultValue?: string;
    getValue?: Function;
    valueDelay?: number;
    variant?: "minimal" | "underline" | "unstyled";
}
export interface PseudoProps {
    hover?: StylesProps;
    focus?: StylesProps;
    active?: StylesProps;
}
declare const InputComponent: React.FC<StylesProps | InputProps>;
export default InputComponent;
