type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  isDisabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-mono100 text-white";
const text = "bg-error text-white";
const disabled = "disabled:bg-mono200 disabled:text-mono600";

const color: Record<PrimaryButtonTheme, string> = { dark, light, social, text };

export const PrimaryButton = ({ theme, isDisabled, onClick, children }: IPrimaryButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`w-full rounded-primary-button h-[59px] ${disabled} ${color[theme]}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
