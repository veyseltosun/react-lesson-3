import React, {useState} from "react";



function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchDog = () => {
    setLoading(true);
    setError("");
    setData("");

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
      setLoading(false);
      // console.log('first', res)
      setData(res.message);


    })

  }

  return (
    <div className="App">
     <img src={data} alt="dog" />
     <button onClick={fetchDog}>Random Dog</button>
    </div>
  );
}

export default App;
