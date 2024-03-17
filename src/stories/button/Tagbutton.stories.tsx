import type { Meta, StoryObj } from "@storybook/react";
import { TagButton } from "../../components/button/TagButton";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Buttons/TagButton",
  // 컴포넌트의 스토리를 작성함
  component: TagButton,
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
    children: { control: "text", description: "버튼 text", defaultValue: "button" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isChecked: { control: "boolean", description: "버튼 활성화 여부", defaultValue: false },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    isChecked: false,
  },
};
