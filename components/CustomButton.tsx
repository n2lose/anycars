'use client';

import { CustomButtonProps } from "@/types" 
import Image from "next/image";

const CustomButton = ({type, disabled, mainClass, additionalClass, handleOnClicked, label, textStyles, rightIconPath, leftIconPath}: CustomButtonProps) => {
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
      {leftIconPath && (
        <div className="relative w-6 h-6">
          <Image src={leftIconPath} alt="left icon" fill
          className="object-contain" />            
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{label}</span>      
      {rightIconPath && (
        <div className="relative w-6 h-6">
          <Image src={rightIconPath} alt="right icon" fill
          className="object-contain" />
        </div>
      )}
    </button>
  )
}

export default CustomButton