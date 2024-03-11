import type { Meta, StoryObj } from "@storybook/react";
import CounterText from "../../components/counter/CounterText";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Counter/CounterText",
  // 컴포넌트의 스토리를 작성함
  component: CounterText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "", description: "카운터의 값", defaultValue: 0 },
  },
} satisfies Meta<typeof CounterText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
