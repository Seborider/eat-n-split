import React from "react";
import { ButtonProps } from "../types/types";

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
