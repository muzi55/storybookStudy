import React from "react";

interface ITagButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isChecked?: boolean;
}

export const TagButton = ({ onClick, children, isChecked }: ITagButtonProps) => {
  const buttonStyle = isChecked ? "bg-white text-primary" : "bg-dark-opacity text-white";
  return (
    <button
      onClick={onClick}
      className={`rounded-tag-button px-[10px] border h-[33px] text-sm font-medium ${buttonStyle}`}>
      {children}
    </button>
  );
};

// export const TagButton = ({ children, ...props }) => {
//   return (
//     <button {...props} className="px-4 py-2 text-white bg-primary rounded-primary-button">
//       {children}
//     </button>
//   );
// };
