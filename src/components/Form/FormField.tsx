import React from "react";
import { FormInput } from "./Inputs"
import { FormLabel } from "./Labels"

type FormField = {
  fieldName: string;
  name: string;
  fn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
}

export const FormField = ({ fieldName, name, fn, value, type }: FormField) => {
  return (
    <FormLabel>
      {fieldName}
      <FormInput type={type} name={name} onChange={fn} value={value} />
    </FormLabel>
  )
}