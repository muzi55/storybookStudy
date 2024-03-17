import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../../components/navigate/NavigationBar";

// 버튼 컴포넌트의 메타 정보를 나타냄
// btn이 받는 props 를 정의함
const meta = {
  // 현재 경로를 나타냄
  title: "Navigate/NavigationBar",
  // 컴포넌트의 스토리를 작성함
  component: NavigationBar,
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
    // showBackButton: boolean;
    // showCloseButton: boolean;
    // showTitle: boolean;
    // title?: string;
    // onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    // onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    showBackButton: { control: "boolean", description: "뒤로가기 버튼을 보여줄지 여부", defaultValue: true },
    showCloseButton: { control: "boolean", description: "닫기 버튼을 보여줄지 여부", defaultValue: true },
    showTitle: { control: "boolean", description: "타이틀을 보여줄지 여부", defaultValue: true },
    title: { control: "text", description: "타이틀", defaultValue: "타이틀" },
    onBackButtonClick: { action: "onBackButtonClick", description: "뒤로가기 버튼 클릭 이벤트" },
    onCloseButtonClick: { action: "onCloseButtonClick", description: "닫기 버튼 클릭 이벤트" },
    isDark: { control: "boolean", description: "다크모드 여부", defaultValue: false },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
    isDark: false,
  },
};
