import { useEffect, useState } from 'react';
import Data from './components/data';
import "./components/Data.css";

function App() {
  const [info, setInfo] = useState([]); // Initialize as an empty array
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())

      .then(data => setInfo(data))

  }, []);

  return (

    <div className='component'>
      <h3>Practicing data fetching</h3>

      <div className='center'>
      <h1>Counter</h1>
     
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>


      <h2>Total Data: {info.length}</h2>
      <h1>Rendering Data from Api</h1>
      {
        info.map(tData => <Data key={tData.id} tData={tData} />) // Add a unique key for each item
      }
    </div>
  );
}

export default App;
