import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Apology = ({ current, onClick }) => {

  const useStyles = {
    card: {
      width: "400px",
    }
  }

  return (
    <Card style={useStyles.card}>
      <CardContent>
        <span> {current.apology}</span>
        <br></br>
        <span>{current.date} </span>
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