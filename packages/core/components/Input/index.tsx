import React, { useState } from "react";
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
//@ts-ignore
import variant from "@styled-system/variant";
import * as KidlatColor from "../Color";
import { useDebouncedCallback } from "use-debounce";

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

const InputWrapper: React.FC<InputProps> = ({
  defaultValue,
  getValue,
  valueDelay = 300,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [debouncedCallback] = useDebouncedCallback((val?: string) => {
    if (getValue) {
      getValue(val);
    }
    setValue(val);
  }, valueDelay);
  return (
    <input
      defaultValue={defaultValue}
      onChange={(e) => debouncedCallback(e.target.value)}
      {...props}
    />
  );
};

const InputComponent: React.FC<StylesProps | InputProps> = cxs(InputWrapper)(
  typography,
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  {
    fontFamily: "inherit",
    fontSize: "16px",
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "inherit",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    transition: "all 0.2s",
    outline: "initial",
    "&:focus": {
      boxShadow: `${KidlatColor.blue[600]} 0px 0px 0px 1px`,
      borderColor: KidlatColor.blue[600],
    },
  },
  variant({
    prop: "size",
    variants: {
      lg: {
        fontSize: "18px",
      },
      md: {
        fontSize: "16px",
      },
      sm: {
        fontSize: "14px",
      },
      xs: {
        fontSize: "12px",
      },
    },
  }),
  variant({
    prop: "variant",
    variants: {
      minimal: {
        border: "none",
        backgroundColor: "rgba(144, 144, 144, 0.1)",
        "&:focus": {
          backgroundColor: "rgba(255,255,255,0.025)",
        },
      },
      underline: {
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderRadius: "initial",
        borderWidth: "1.5px",
        "&:focus": {
          boxShadow: "initial",
        },
      },
      unstyled: {
        border: "none",
        backgroundColor: "initial",
        "&:focus": {
          boxShadow: "initial",
        },
      },
    },
  }),
  ({ hover, active, focus }: PseudoProps) => {
    return {
      "&:hover": hover,
      "&:active": active,
      "&:focus": focus,
    };
  }
);

export default InputComponent;
