import React from 'react';
import axios from 'axios';
import SubmissionForm from './components/SubmissionForm';
import Apologies from './components/Apologies';

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
    return (
      <div>
        <p>Apology-Line</p>
        <span onClick={()=> {this.viewChanger("submission")}}>submit an apology</span>
        {
          this.state.view === 'apologies' ? <Apologies apologies={this.state.apologies} /> : <SubmissionForm onSubmit={this.onSubmit}/>
        }
        {/* <div>
          <Apologies apologies={this.state.apologies} />
        </div>
        <div>
          <SubmissionForm />
        </div> */}
      </div>
    )
  }
}

export default App;