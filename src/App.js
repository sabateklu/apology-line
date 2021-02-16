import React from 'react';
import axios from 'axios';
import SubmissionForm from './components/SubmissionForm';
import Apologies from './components/Apologies';
import Recorder from './components/Recorder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apologies: [],
      view: 'apologies'
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(apology) {
    console.log(apology);
    axios.post('/api/apologies', apology)
    .then((results) => {
      this.componentDidMount();
    })
    this.setState({
      view: 'apologies'
    })
  }

  viewChanger(id) {
    this.setState({
      view: id
    })
  }

  componentDidMount() {
    axios.get('/api/apologies')
    .then((results) => {
      this.setState({
        apologies: results.data
      })
    })
  }

  render() {
    let useStyles = {
      parent: {
        width: "100%"
      },
      header: {
        margin: "0 auto",
        width: "50%",
        textAlign: "center",
        cursor: "pointer",
        color: "#C42632",
        font: "80px Courier, sans-serif"
      },
      tagline: {
        display: "table",
        margin: "0 auto",
        font: "20px Courier, sans-serif",
        cursor: "pointer",
      },
      hover: {
        color: "red"
      }
    }
    return (
      <div style={useStyles.parent}>
        <p style={useStyles.header} onClick={()=> {this.viewChanger("apologies")}}>Apology-Line</p>
        <span id="tagline" style={useStyles.tagline} onClick={()=> {this.viewChanger("submission")}}>submit an apology</span>
        <div>
        {
          this.state.view === 'apologies' ? <Apologies apologies={this.state.apologies} /> : <Recorder onSubmit={this.onSubmit}/>
        }
        </div>
      </div>
    )
  }
}

export default App;