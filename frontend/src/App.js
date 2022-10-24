import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';


function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(() => {
    axios.get('https://octopus-app-vtamg.ondigitalocean.app/').then(response => {
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
        <Button variant="contained">Hello World</Button>

    </div>
  );
}

export default App;