import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(() => {
    axios.get('https://octopus-app-vtamg.ondigitalocean.app/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">

      <div>{getMessage.status === 200 ?
        <h3>{getMessage.data.message}</h3>
        :
        <h3>LOADING</h3>}</div>

    </div>
  );
}

export default App;