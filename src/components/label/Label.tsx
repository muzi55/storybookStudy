interface LabelProps {
  htmlFor: string;
  children: string;
}
export default function Label({ htmlFor, children }: LabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
