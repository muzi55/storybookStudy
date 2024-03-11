interface ICounterBtn {
  onClick: () => void;
  children: string;
}

export default function CounterBtn({ onClick, children }: ICounterBtn) {
  return (
    <button className="px-2.5 py-1 border-2 rounded-full bg-secondary btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
