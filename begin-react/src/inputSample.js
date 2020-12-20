import { useState, useRef  } from 'react'

function InputSample() {

  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const nameInput = useRef();

  const { name, nickname } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs({
      ...inputs, 
      [name]: value 
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    nameInput.current.focus()
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
      <br />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <br />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name} ({nickname})</b>
      </div>
    </div>
  );
}

export default InputSample