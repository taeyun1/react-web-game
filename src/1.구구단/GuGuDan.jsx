import React, { useRef, useState } from "react";

export default function GuGuDan() {
  const [randomNumber, setRandomNumber] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
  });

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  // setState들이 많이 일어나면 렌더가 그만큼 일어나나??
  // 비동기라서 setState들을 모아서 한번에 처리해서 렌더를 한번만 하게함
  const onSubmit = (e) => {
    e.preventDefault();
    // 내가 쓴 값이 first * second  랑 같이면? 정답
    if (parseInt(value) === randomNumber.first * randomNumber.second) {
      setRandomNumber({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      });
      setValue("");
      setResult(`${value} 정답!`);
      inputEl.current.focus();

      // 틀리면 떙
    } else {
      setValue("");
      setResult(`${value} 떙!`);
      inputEl.current.focus();
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <div>
        {randomNumber.first}곱하기{randomNumber.second}는?
        <form onSubmit={onSubmit}>
          <input
            type="number"
            value={value}
            onChange={onChange}
            ref={inputEl}
          />
          <button>입력</button>
        </form>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
