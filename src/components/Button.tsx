"use client";

import { cn } from "@/utils/classNames";
import React, { HTMLAttributes } from "react";

//Component props for custom button
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  size?: string;
  type?: "submit" | "button" | "reset";
  ButtonColor?: "secondary" | "primary" | "error" | "success";
}

/**
 * It is a custom Button component
 * @param {
 * variant?: string;
 * size?: string;
 * ButtonColor?: "secondary" | "primary" | "error" | "success";
 * }
 * @returns React.JSX.Element
 */
const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  ButtonColor,
  size,
  className,
  children,
  ...rest
}) => {
  //Default styles for the button
  let defaultStyles = "px-8 py-3";

  // This switch case applies css styles based on the specified variant
  switch (variant) {
    case "text":
      defaultStyles +=
        " text-indigo-400 hover:border-indigo-300 hover:bg-blue-300 hover:rounded-full hover:text-white";
      break;

    case "contained":
      defaultStyles +=
        " rounded-full text-white hover:bg-red-200 hover:text-black active:bg-red-400 focus:outline-none focus:ring focus:ring-violet-300";
      break;

    case "outlined":
      defaultStyles +=
        " rounded-full text-black border border-slate-300 hover:border-indigo-300 hover:bg-indigo-300";
      break;

    default:
      break;
  }

  // This switch case applies css styles based on the specified Button Color
  switch (ButtonColor) {
    case "secondary":
      defaultStyles += "border-0 border-white";
      break;

    case "primary":
      defaultStyles += " bg-indigo-900";
      break;

    case "error":
      defaultStyles += "bg-red-300";
      break;

    case "success":
      defaultStyles += " bg-blue-500";
      break;

    default:
      break;
  }

  // This switch case applies css styles based on the specified custom sizes

  switch (size) {
    case "small":
      defaultStyles += " px-10 py-4";
      break;

    case "medium":
      defaultStyles += " px-8 py-3";
      break;

    case "large":
      defaultStyles += " px-10 py-3";
      break;

    default:
      break;
  }

  // Render the button element with the combined styles
  return (
    <button {...rest} type={type} className={cn(className, defaultStyles)}>
      {children}
    </button>
  );
};

export default Button;
