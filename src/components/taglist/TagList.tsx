import { useState } from "react";
import { TagButton } from "../button/TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}
// /
export const TagList = <T extends string>({ tagList, onTagClick }: ITagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
  return (
    <div
      className="flex gap-x-4"
      onClick={(e) => {
        const eventTarget = e.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;

        onTagClick(tag);
      }}>
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => {
            setSelectedTag(tag);
          }}>
          {tag}
        </TagButton>
      ))}
    </div>
  );
};
