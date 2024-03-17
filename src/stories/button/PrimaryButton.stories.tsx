import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "../../components/button/PrimaryButton";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Buttons/PrimaryButton",
  // 컴포넌트의 스토리를 작성함
  component: PrimaryButton,
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
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: { control: "text", description: "버튼 text", defaultValue: "" },
    isDisabled: { control: "boolean", description: "버튼 비활성화 여부", defaultValue: false },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: false,
  },
};

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    // isDisabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    // isDisabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    // isDisabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    // isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: true,
  },
};
