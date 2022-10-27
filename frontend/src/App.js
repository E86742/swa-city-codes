import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));


function App() {
  const [getMessage, setGetMessage] = useState({
  })

  useEffect(() => {
    // axios.get('http://127.0.0.1:5000/apiv1').then(response => {
      axios.get('https://octopus-app-vtamg.ondigitalocean.app/apiv1').then(response => {

      console.log(response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      
      <Button variant="contained">Hello World</Button>
      <div>{getMessage.status === 200 ? 
          <h3>{getMessage}</h3>
          :
          <h3>LOADING</h3>}</div>
          <LightTooltip title="Albuquerque, NM">
        <Button>ABQ</Button>
      </LightTooltip>
    </div>
  );
}

export default App;