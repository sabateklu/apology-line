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
      form: {
        display: "table",
        width: "500px",
        margin: "50px auto",
      }
    }
    return (
      <div style={useStyles.form}>
        <div>
          <TextField
            id = "field"
            label="write your apology here"
            multiline
            rows={10}
            variant="outlined"
            color="secondary"
            fullWidth={true}
          />
          <div style={useStyles.buttonDiv}>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={this.onClick}>
                now let it go
            </Button>
          </div>
        </div>

      </div>
    )
  }
}

export default SubmissionForm;