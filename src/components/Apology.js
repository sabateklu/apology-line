import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const Apology = ({ current, onClick }) => {

  const useStyles = {
    card: {
      width: "600px",
      height: "300px",
      position: "relative"
    },
    content: {
      font: "bold 18px Courier, sans-serif"
    },
    date: {
      font: "10px Courier"
    },
    audio: {
      margin: "0 auto",
      display: "flex",
    }
  }


  return (
    <Card style={useStyles.card}>
      <CardContent>
        <audio src={current.apology} controls autoPlay style={useStyles.audio}/>
        <br></br>
        <br></br>
        <span style={useStyles.date}>{current.date}</span>
      </CardContent>
      <CardActions>
        <IconButton onClick={onClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Apology;