import React from "react";
import { StylesProps } from "styled-system";
interface TextProps {
    variant?: "bold" | "italic" | "underline" | "strikethrough";
}
export interface PseudoProps {
    hover?: StylesProps;
    focus?: StylesProps;
    active?: StylesProps;
}
declare const TextComponent: React.FC<StylesProps | TextProps>;
export default TextComponent;
