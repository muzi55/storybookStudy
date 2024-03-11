import { useState } from "react";
import "./App.css";
import Label from "./components/label/Label";
import DefaultTextField from "./components/input/DefaultTextField";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={isError}
        iconPath="https://via.placeholder.com/24"
        alt="delete"
        onChange={() => {}}
        onClick={() => {}}></DefaultTextField>
      ss
      <button
        onClick={() => {
          setIsError(!isError);
        }}>
        에러 핸들 버튼
      </button>
    </>
  );
}

export default App;
