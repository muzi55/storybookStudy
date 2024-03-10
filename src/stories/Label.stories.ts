import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/label/Label";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Text/Label",
  // 컴포넌트의 스토리를 작성함
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // 컴포넌트 내부에서 설명을 하는것보다 여기에 데스크랩션을 사용하여 정의
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "userName",
    children: "이메일",
  },
};
