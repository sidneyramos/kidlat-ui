import React, { useState } from "react";
//@ts-ignore
import cxs from "cxs/component";
//@ts-ignore
import variant from "@styled-system/variant";
import * as KidlatColor from "../Color";
import { useDebouncedCallback } from "use-debounce";
import composeComponent from "../composeComponent";

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

const TextareaWrapper: React.FC<TextareaProps> = ({
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
    <textarea
      defaultValue={defaultValue}
      onChange={(e) => debouncedCallback(e.target.value)}
      {...props}
    />
  );
};

const TextareaComponent: React.FC<StylesProps | TextareaProps> = cxs(
  composeComponent(TextareaWrapper)
)(
  (props: TextareaProps) => ({
    fontFamily: "inherit",
    fontSize: "16px",
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "inherit",
    padding: "8px",
    border: "1px solid",
    borderRadius: "4px",
    transition: "all 0.2s",
    outline: "initial",
    borderColor: props.isInvalid ? KidlatColor.red[600] : "#ccc",
    boxShadow: props.isInvalid
      ? `${KidlatColor.red[600]} 0px 0px 0px 1px`
      : "initial",
    "&:focus": {
      boxShadow: `${KidlatColor.blue[600]} 0px 0px 0px 1px`,
      borderColor: KidlatColor.blue[600],
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    "&:invalid": {
      borderColor: KidlatColor.red[600],
      boxShadow: `${KidlatColor.red[600]} 0px 0px 0px 1px`,
    },
  }),
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

export default TextareaComponent;
