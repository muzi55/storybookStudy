interface IIconBtn {
  iconPath: string;
  alt: string;
  // onClick: ;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // onClick: React.MouseEvent<HTMLButtonElement>;
}
export default function IconBtn({ iconPath, alt, onClick }: IIconBtn) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
