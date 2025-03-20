import { Button as ButtonType } from "@/types";
import React, { JSX } from "react";

export function Button({ button }: { button: ButtonType }): JSX.Element {
  return <button>{button.text}</button>;
}
