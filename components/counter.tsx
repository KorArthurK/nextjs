
import React from 'react';
import countState from './atom';
import { useRecoilState, 
  useRecoilValue, 
  useSetRecoilState, 
  useResetRecoilState 
} from 'recoil';

function Counter() {
  const [counter, setCounter] = useRecoilState(countState); 
  // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentCount = useRecoilValue(countState);  // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기 
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경
  
  const plusCount = () => {
    counterHandler((pre) => pre + 1);
  };
  const minusCount = () => {
    counterHandler((pre) => pre - 1);
  };


 
return (
    <div>     
      <div>{currentCount}</div>  
        
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default Counter;