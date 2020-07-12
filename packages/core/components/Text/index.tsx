import React from "react";
//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import typography from "@styled-system/typography";
//@ts-ignore
import space from "@styled-system/space";
//@ts-ignore
import color from "@styled-system/color";
//@ts-ignore
import layout from "@styled-system/layout";
//@ts-ignore
import flexbox from "@styled-system/flexbox";
//@ts-ignore
import background from "@styled-system/background";
//@ts-ignore
import border from "@styled-system/border";
//@ts-ignore
import position from "@styled-system/position";
//@ts-ignore
import shadow from "@styled-system/shadow";

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

const TextComponent: React.FC<StylesProps | TextProps> = cxs(TextWrapper)(
  typography,
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  ({ hover, active, focus }: PseudoProps) => {
    return {
      "&:hover": hover,
      "&:active": active,
      "&:focus": focus,
    };
  }
);

export default TextComponent;
