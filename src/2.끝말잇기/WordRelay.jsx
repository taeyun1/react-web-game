import React, { useRef, useState } from "react";

export default function WordRelay() {
	const [word, setWord] = useState('제로초');
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const onRefInput = useRef(null);

	const onSubmitForm = (e) => {
    e.preventDefault();
		// console.log(value)
		// console.log(value.length)

		// 3글자 미만일 떄
		if(value.length < 3) {
				setResult('3글자 이상 입력해주세요!');
				setValue('');
				onRefInput.current.focus();

		// 기존 단어 마지막 글자랑, 입력한 단어 첫번째 글자가 같으면? 정답 처리
		} else if (word[word.length - 1] === value[0]) {
			setResult('딩동댕!');
			setWord(value);
			setValue('');
			onRefInput.current.focus();

		// 다르면? 떙 처리
		} else if (word[word.length - 1] !== value[0]) {
			setResult('떙!');
			setValue('');
		}

		// 기존 단어 마지막 글자랑, 입력한 단어 첫번째 글자가 같으면 넘어가기
		// if(word[word.length - 1] === value[0]) {
		// 	setResult('딩동댕!');
		// 	setWord(value);
		// 	setValue('');
		// 	onRefInput.current.focus();

		// 	// 틀리면?? 떙
		// } else {
		// 	setResult('떙!');
		// 	setValue('');
		// }

			
		
	}

	const onChangeInput = (e) => {
		setValue(e.target.value)
	}

  return <div>
		<div>
			<span>{word}! 쿵쿵따~</span>
			</div>
		<form onSubmit={onSubmitForm}>
			<input ref={onRefInput} value={value} onChange={onChangeInput} type="text" />
			<button>입력</button>
		</form>
		<p>{result}</p>
	</div>;
}
