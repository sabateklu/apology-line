import React from 'react';
import { TextField, Button } from '@material-ui/core/';


class SubmissionForm extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let body = document.getElementById("field");
    let apology = {
      apology: body.value,
      date: (new Date()).toLocaleString()
    }
    this.props.onSubmit(apology);
    body.value = ''
  }

  render() {
    const useStyles = {
      // TextField: {
      //   position: "relative",
      //   margin: "0 auto",
      //   width: "50%",
      //   marginTop: "100px"
      // },
      // buttonDiv: {
      //   position: "absolute",
      //   left: "0"
      // }
    }
    return (
      <div>
        <div style={useStyles.TextField}>
          <TextField
            id = "field"
            label="Write your apology here"
            multiline
            rows={10}
            variant="filled"
            fullWidth="true"
          />
          <div style={useStyles.buttonDiv}>
            <Button variant="outlined" onClick={this.onClick}>now let it go</Button>
          </div>
        </div>

      </div>
    )
  }
}

export default SubmissionForm;