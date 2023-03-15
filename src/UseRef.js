import React ,{useRef, useEffect}from 'react'
import UseRefMutable from './UseRefMutable';

const UseRef = () => {
    const inputRef = useRef();
    const divRef = useRef();


    const onFocusButton = () => {
        inputRef.current.focus();

    }

    const onDivBorder = () => {
        divRef.current.style.border = "1px solid black";

    }

    // useEffect(() => {
    //     console.log(inputRef.current)
    // })

    

  return (
    <div ref={divRef}>
        <h1>React Dersleri</h1>
        <h2>Türkçe React Kaynak</h2>
        <input ref={inputRef} placeholder="Yazı girininiz..." />
        <button onClick={onFocusButton}>Input a Focus Ol</button>
        <button onClick={onDivBorder} >Div e border Ekle</button>
        <UseRefMutable/>
    </div>
  )
}

export default UseRef