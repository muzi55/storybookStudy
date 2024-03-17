import type { Meta, StoryObj } from "@storybook/react";
import { TagList } from "../../components/taglist/TagList";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "TagList/TagList",
  // 컴포넌트의 스토리를 작성함
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    tagList: {
      control: "object",
      description: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
    onTagClick: {
      action: "onTagClick",
      description: "태그 클릭 이벤트",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
  },
};
