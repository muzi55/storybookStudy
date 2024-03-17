import React from "react";
import IconBtn from "../input/IconBtn";

interface NavigationBarProps {
  isDark?: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function NavigationBar({ showBackButton, isDark, showCloseButton, showTitle, title = "", onBackButtonClick = () => {}, onCloseButtonClick = () => {} }: NavigationBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        {showBackButton && (
          <div className="mr-2">
            {" "}
            <IconBtn alt="" iconPath="https://via.placeholder.com/24" onClick={onBackButtonClick} />
          </div>
        )}
        {showTitle && <h1 className={`text-2xl ${isDark && "text-white"}`}>{title}</h1>}
      </div>
      {showCloseButton && <IconBtn alt="" iconPath="https://via.placeholder.com/50" onClick={onCloseButtonClick} />}
    </div>
  );
}
