import React, { useState, useEffect } from 'react';
import Apology from './Apology';

const Apologies = ({ apologies }) => {
  const [current, setCurrent] = useState({})

  const onClick = ()=> {
    let n = Math.floor(Math.random() * apologies.length);
    setCurrent(apologies[n]);
  }

  const useStyles = {
    card: {
      display: "table",
      width: "100px",
      margin: "50px auto",
    }
  }

  return (
    <div style={useStyles.card}>
      {
        current &&
        <Apology onClick={onClick} current={current}/>
      }
    </div>
  )
}

export default Apologies;