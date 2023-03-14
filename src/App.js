import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

const initialState = {
  loading: false,
  data:"",
  error:"",
}



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState("");
  // const [error, setError] = useState("");

  const fetchDog = () => {
    // setLoading(true);
    // setError("");
    // setData("");
    dispatch ({type:"FETCH_START"});


    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
      // setLoading(false);
      // // console.log('first', res)
      // setData(res.message);
      dispatch({type:"FETCH_SUCCESS", payload: res.message});



    })
    .catch(() => {
      // setLoading(false) ;
      // setError("Error fetching data!");
      dispatch({type:"FETCH_ERROR", payload:"Error fetching data"});
    })

  }

  return (
    <div className="App">
      <button onClick={fetchDog} disabled={loading}>Random Dog</button>
    {data && <img src={data} alt="dog" /> } 
    {error && <p>{error}</p>}
    </div>
  );
}

export default App;
