import IconBtn from "./IconBtn";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
interface IDefaultTextField {
  errorMessage: string;
  iconPath: string;
  alt: string;
  onClick: () => void;
  placeholder: string;
  onChange: () => void;
  value: string;
  isError: boolean;
}

function DefaultTextField({ errorMessage, iconPath, alt, onClick, placeholder, onChange, value, isError }: IDefaultTextField) {
  const [isFocused, setFocused] = useState<boolean>(false);
  const borderColor = isFocused ? "border-secondary" : !value ? "border-mono300" : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
    border-b 
    text-primary 
    ${borderColor}
    `}>
        <input className="outline-none" type="text" onChange={onChange} value={value} name="" id="" placeholder={placeholder} />
        {value && <IconBtn onClick={onClick} iconPath={iconPath} alt={alt}></IconBtn>}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

export default DefaultTextField;
