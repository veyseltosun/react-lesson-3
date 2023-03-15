import React, {useRef,useState} from 'react'

const UseRefMutable = () => {
    const [, setDummy] = useState({});

    const value = useRef(0);
    
    const onIncrease = () => {
       setDummy({});
       value.current += 1;
       
    }
    console.log(value);


  return (
    <div>

        <button onClick={onIncrease}>Increase Ref Value</button>

    </div>
  )
}

export default UseRefMutable