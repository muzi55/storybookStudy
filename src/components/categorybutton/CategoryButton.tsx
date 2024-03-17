interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CategoryButton = ({ iconPath, iconAlt, text, onClick }: ICategoryButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
};
