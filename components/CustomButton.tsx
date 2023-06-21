'use client';

import { CustomButtonProps } from "@/types" 

const CustomButton = ({type, disabled, mainClass, additionalClass, handleOnClicked, label}: CustomButtonProps) => {
  const classes: string[] = [];
  if (mainClass) {
    classes.push(mainClass);
  }
  if (additionalClass) {
    classes.push(additionalClass);
  }
  const className = classes.join(" ");
  return (
    <button 
      type={type}
      className={className}
      onClick={handleOnClicked}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default CustomButton