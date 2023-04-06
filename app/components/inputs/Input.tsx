'use client';

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
  } from "react-hook-form";
  import { BiDollar } from "react-icons/bi";
  
  interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
  }

  const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text", 
    disabled, 
    formatPrice,
    register,
    required,
    errors,
  }) => {
    return (
        <div>

        </div>
    );
}

export default Input;