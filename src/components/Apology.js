import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Apology = ({ current, onClick }) => {

  const useStyles = {
    card: {
      width: "400px",
    },
    content: {
      font: "bold 18px Courier, sans-serif"
    },
    date: {
      font: "10px Courier"
    }
  }

  return (
    <Card style={useStyles.card}>
      <CardContent>
        <span style={useStyles.content}> {current.apology}</span>
        <br></br>
        <br></br>
        <span style={useStyles.date}>{current.date} </span>
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