import React from "react";
//@ts-ignore
import cxs from "cxs/component";
import composeComponent from "../composeComponent";

import { StylesProps } from "styled-system";

interface TextProps {
  variant?: "bold" | "italic" | "underline" | "strikethrough";
}

export interface PseudoProps {
  hover?: StylesProps;
  focus?: StylesProps;
  active?: StylesProps;
}

const TextWrapper: React.FC<TextProps> = ({ variant, children, ...props }) => {
  switch (variant) {
    case "bold":
      return <strong {...props}>{children}</strong>;
    case "italic":
      return <em {...props}>{children}</em>;
    case "underline":
      return <u {...props}>{children}</u>;
    case "strikethrough":
      return <s {...props}>{children}</s>;
    default:
      return <p {...props}>{children}</p>;
  }
};

const TextComponent: React.FC<StylesProps | TextProps> = cxs(
  composeComponent(TextWrapper)
)(({ hover, active, focus }: PseudoProps) => {
  return {
    "&:hover": hover,
    "&:active": active,
    "&:focus": focus,
  };
});

export default TextComponent;
