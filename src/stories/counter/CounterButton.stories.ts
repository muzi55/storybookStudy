import type { Meta, StoryObj } from "@storybook/react";
import CounterBtn from "../../components/counter/CounterBtn";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Counter/CounterButton",
  // 컴포넌트의 스토리를 작성함
  component: CounterBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "카운터 버튼 텍스트", defaultValue: "" },
    onClick: { control: "clicked", description: "카운터 버튼", defaultValue: () => {} },
  },
} satisfies Meta<typeof CounterBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
    onClick: () => {},
  },
};
