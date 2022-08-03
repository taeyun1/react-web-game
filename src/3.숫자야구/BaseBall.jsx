import React, { useCallback, useState, useRef } from "react";
import Try from "./Try";
// const [value, setValue] = useState("");

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default function BaseBall() {
  const [answer, setAnswer] = useState(getNumbers); // lazy init
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      // 답 제출 시, 맞추면? 홈런,
      if (value === answer.join("")) {
        setTries((prev) => [
          ...prev,
          {
            try: value,
            result: "홈런!",
          },
        ]);
        setResult("홈런!");

        // 초기화
        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();

        // 답 제출시 틀렸으면??
      } else {
        const answerArray = value.split("").map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        // 10번 이상 틀리면??
        if (tries.length >= 9) {
          setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`); // state set은 비동기

          // 초기화
          alert("게임을 다시 시작합니다!");
          setValue("");
          setAnswer(getNumbers());
          setTries([]);
          // inputEl.current.focus();

          // 10번 틀리기 전까지는 기회주기
        } else {
          console.log("답은", answer.join(""));

          // 몇 볼 몇 스트라이크 인지 판단하는 알고리즘
          for (let i = 0; i < 4; i++) {
            if (answerArray[i] === answer[i]) {
              console.log("strike", answerArray[i], answer[i]);
              strike += 1;
            } else if (answer.includes(answerArray[i])) {
              console.log(
                "ball",
                answerArray[i],
                answer.indexOf(answerArray[i])
              );
              ball += 1;
            }
          }
          setTries((prev) => [
            ...prev,
            {
              try: value,
              result: `${strike} 스트라이크, ${ball} 볼입니다..`,
            },
          ]);
          setValue("");
          inputEl.current.focus();
        }
      }
    },
    [value, answer]
  );

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);

  return (
    <div className="App">
      <h1>숫자야구</h1>
      <h2>{result}</h2>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <h3>시도: {tries.length}</h3>

      <ul>
        {tries.map((v, idx) => (
          <Try key={`${idx + 1}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </div>
  );
}
