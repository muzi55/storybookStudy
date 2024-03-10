import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/Button";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Text/Button",
  // 컴포넌트의 스토리를 작성함
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // 컴포넌트 내부에서 설명을 하는것보다 여기에 데스크랩션을 사용하여 정의
    primary: {
      control: "boolean",
      description: "버튼 타입",
    },
    backgroundColor: {
      control: "color",
      description: "버튼의 배경 컬러",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
