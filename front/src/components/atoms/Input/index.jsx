import React from "react";
import { TextField } from "@mui/material";

export function Input({
  name,
  register,
  rules=null,
  error,
  label = name,
  variant = "outlined",
  margin="normal",
  sx=null,
  fullWidth=true,
  required=false,
  ...props
}) {  
    return (
      <TextField
        label={label}
        variant={variant}
        {...register(name,rules)}
        error={error}
        helperText={error ? error.message : null}
        sx={sx}
        margin={margin}
        fullWidth={fullWidth}
        required={required}
      />
    );  
}
