import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/input/DefaultTextField";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "TextFields/DefaultTextField",
  // 컴포넌트의 스토리를 작성함
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // errorMessage: string;
    // iconPath: string;
    // alt: string;
    // onClick: () => void;
    // placeholder: string;
    // onChange: () => void;
    // value: string;
    // 컴포넌트 내부에서 설명을 하는것보다 여기에 데스크랩션을 사용하여 정의

    errorMessage: { control: "text", description: "에러 메세지 내용", defaultValue: "에러 발생" },
    iconPath: { control: "text", description: "아이콘의 이미지의 경로", defaultValue: "https://via.placeholder.com/24" },
    alt: { control: "text", description: "아이콘의 이미지의 alt", defaultValue: "이미지 alt" },
    placeholder: { control: "text", description: "인풋의 placeholder", defaultValue: "" },
    value: { control: "text", description: "인풋의 값", defaultValue: "" },
    id: { control: "text", description: "인풋의 아이디값", defaultValue: "" },
    isError: { control: "boolean", description: "인풋의 에러 불린값", defaultValue: false },

    onClick: { action: "clicked", description: "버튼의 클릭 이벤트" },
    onChange: { action: "text", description: "인풋의 체인지 이벤트" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // errorMessage: string;
    // iconPath: string;
    // alt: string;
    // onClick: () => void;
    // placeholder: string;
    // onChange: () => void;
    // value: string;
    errorMessage: "에러 발생",
    iconPath: "https://via.placeholder.com/24",
    alt: "인풋의 이미지",
    onClick: () => {},
    placeholder: "test@example.com",
    onChange: () => {},
    value: "",
    isError: false,
    id: "email",
  },
};
