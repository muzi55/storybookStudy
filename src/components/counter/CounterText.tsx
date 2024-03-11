interface ICounterText {
  value: number;
}
export default function CounterText({ value }: ICounterText) {
  return <div>{value}</div>;
}
