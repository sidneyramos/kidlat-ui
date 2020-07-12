//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import variant from "@styled-system/variant";
//@ts-ignore
import space from "@styled-system/space";
//@ts-ignore
import color from "@styled-system/color";

import { StylesProps } from "styled-system";
import * as KidlatColor from "../Color";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
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

const Button: React.FC<ButtonProps | StylesProps> = cxs("button")(
  space,
  color,
  {
    fontFamily: "inherit",
    color: "white",
    backgroundColor: KidlatColor.blue[600],
    lineHeight: 2.5,
    padding: "0 25px",
    border: `1px solid ${KidlatColor.blue[600]}`,
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
    fontSize: "16px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: KidlatColor.blue[800],
      borderColor: KidlatColor.blue[800],
    },
  },
  variant({
    prop: "size",
    variants: {
      lg: {
        lineHeight: 3,
        fontSize: "18px",
        padding: "0 35px",
      },
      md: {
        lineHeight: 2.5,
        fontSize: "16px",
        padding: "0 25px",
      },
      sm: {
        lineHeight: 2,
        fontSize: "13px",
        padding: "0 10px",
      },
      xs: {
        lineHeight: 1.5,
        fontSize: "13px",
        padding: "0 10px",
      },
    },
  }),
  ({ variant, tint = "blue" }: ButtonProps) => {
    const getColor = (tint: KidlatColor.ColorVariant) => {
      return {
        backgroundColor:
          variant === "secondary" ? "transparent" : KidlatColor[tint][600],
        color: variant === "secondary" ? KidlatColor[tint][600] : "white",
        borderColor: KidlatColor[tint][600],
        "&:hover": {
          backgroundColor:
            variant === "secondary"
              ? KidlatColor[tint][200]
              : KidlatColor[tint][800],
          borderColor: KidlatColor[tint][800],
        },
        "&:focus": {
          outline: "initial",
          backgroundColor:
            variant === "secondary"
              ? KidlatColor[tint][200]
              : KidlatColor[tint][800],
          borderColor: KidlatColor[tint][800],
        },
      };
    };
    return getColor(tint);
  },
  ({ hover, active, focus }: PseudoProps) => {
    return {
      "&:hover": hover,
      "&:active": active,
      "&:focus": focus,
    };
  }
);

export default Button;
