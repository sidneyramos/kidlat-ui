import React from "react";
import { StylesProps } from "styled-system";
interface TextareaProps {
    placeholder?: string;
    defaultValue?: string;
    getValue?: Function;
    valueDelay?: number;
    variant?: "minimal" | "underline" | "unstyled";
    isInvalid?: boolean;
}
export interface PseudoProps {
    hover?: StylesProps;
    focus?: StylesProps;
    active?: StylesProps;
}
declare const TextareaComponent: React.FC<StylesProps | TextareaProps>;
export default TextareaComponent;
