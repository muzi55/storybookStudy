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
  id: string;
}

function DefaultTextField({ errorMessage, iconPath, alt, onClick, placeholder, onChange, value, isError, id }: IDefaultTextField) {
  const [isFocused, setFocused] = useState<boolean>(false);
  const borderColor = isFocused ? "border-secondary" : !value ? "border-mono300" : "border-primary";

  return (
    <div className="relative bg-primary">
      <div
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
    border-b 
    text-primary 
    ${borderColor}
    `}>
        <input className="outline-none" type="text" onChange={onChange} value={value} name="" id={id} placeholder={placeholder} />
        {value && <IconBtn onClick={onClick} iconPath={iconPath} alt={alt}></IconBtn>}
      </div>
      {isError && (
        <div className="absolute bg-mono200">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      )}
    </div>
  );
}

export default DefaultTextField;
