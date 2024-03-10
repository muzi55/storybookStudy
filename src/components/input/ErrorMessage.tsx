interface IErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: IErrorMessageProps) {
  return <div className="text-xs text-error">{children}</div>;
}
