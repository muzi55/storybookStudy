import { useState } from "react";
import "./App.css";
import Label from "./components/label/Label";
import DefaultTextField from "./components/input/DefaultTextField";
import CounterBtn from "./components/counter/CounterBtn";
import CounterText from "./components/counter/CounterText";

function App() {
  const [isError, setIsError] = useState(false);

  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>
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
        <button
          onClick={() => {
            setIsError(!isError);
          }}>
          에러 핸들 버튼
        </button>
      </div>
      <hr />
      <div className="flex items-center justify-center gap-2 mt-20">
        <CounterBtn onClick={() => setCounter((prev) => prev + 1)}>increase</CounterBtn>
        <CounterText value={counter} />
        <CounterBtn onClick={() => setCounter((prev) => prev - 1)}>decrease</CounterBtn>
      </div>
    </>
  );
}

export default App;
