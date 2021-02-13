import React, { useState, useEffect } from 'react';
import Apology from './Apology';

const Apologies = ({ apologies }) => {
  const [current, setCurrent] = useState({apology:'click arrow to see apologies'})

  const onClick = ()=> {
    let n = Math.floor(Math.random() * apologies.length);
    setCurrent(apologies[n]);
  }

  // useEffect(()=> {
  //   setCurrent(apologies[0])
  // }, [])

  return (
    <div>
      {
        current &&
        <Apology onClick={onClick} current={current}/>
      }
    </div>
  )
}

export default Apologies;