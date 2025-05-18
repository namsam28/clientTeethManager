"use client";
import {twMerge} from "tailwind-merge";
import React from "react";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const {type = "button", children, className, ...others} = props;
  return (
    <button type={type} className={twMerge("px-14 py-5 rounded-4 text-14 border-1 border-gray-500", className)} {...others}>
      {children}
    </button>
  );
}

export default Button;
