import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    topSalaries: [],
    average: 0
  })

  useEffect(() => {
    async function fetchData() {
      // using await

      const result = await fetch(
        'https://safe-basin-21320.herokuapp.com/showData', {
        method: "GET",
        headers: {
            "Content-Type": "text/plain"
        },
    })
      const json = await result.json()
      setData(json);
      console.log(json);      // ...
    }
    fetchData()
  }, []);

  const showitems = data.topSalaries.map((item,index) =>
    <li key={index} > {item} </li>
  )
  console.log(showitems);
  return (
    <div className="App">
<table id="customers">
  <tr>
    <th>Top 100 Salary</th>
  </tr>
  <tr>
    <td>{showitems}</td>

  </tr>
</table>

    </div>
  );
}

export default App;
