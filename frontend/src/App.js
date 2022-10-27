import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { InputSharp } from "@mui/icons-material";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function App() {
  const [getCity, setData] = useState([]);
  // .get('http://127.0.0.1:5000/apiv1')
  // axios.get('https://octopus-app-vtamg.ondigitalocean.app/apiv1').then(response => {
    useEffect(() => {
      axios.get('ttp://127.0.0.1:5000/apiv1').then(res => {
         console.log(res)
         setData(res.data)
         console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }, []);

  return (
    <div>
      {data.map((item) => (
        <p>{setData(res.data)
        }</p>
      ))}
    </div>
  );
};

export default App;
