import type { Meta, StoryObj } from "@storybook/react";
import { CategoryButton } from "../../components/categorybutton/CategoryButton";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Category/CategoryButton",
  // 컴포넌트의 스토리를 작성함
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // 컴포넌트 내부에서 설명을 하는것보다 여기에 데스크랩션을 사용하여 정의
    iconPath: { control: "text", description: "버튼의 아이콘 패스", defaultValue: "" },
    iconAlt: { control: "text", description: "이미지 설명", defaultValue: "icon" },
    text: { control: "text", description: "버튼 텍스트", defaultValue: "text" },
    onClick: {
      control: "clicked",
      description: "버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "https://via.placeholder.com/24",
    text: "text",
  },
};
