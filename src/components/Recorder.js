import React, { Component } from 'react';

class Recorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      audioList: []
    }
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    this.mediaRecorder = new MediaRecorder(stream);
    this.chunks= [];

    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    }
  }

  startRecording(e) {
    e.preventDefault();
    console.log(this.state.audioList);
    this.mediaRecorder.start(10);
    this.setState({recording: true});
  }

  stopRecording(e) {
    e.preventDefault();
    this.mediaRecorder.stop();
    this.setState({ recording: false});
    this.saveAudio();
  }

  saveAudio() {
    const blob = new Blob(this.chunks, { type: 'audio/wav' });
    const audioUrl = window.URL.createObjectURL(blob);
    let apology = {
      apology: audioUrl,
      date: (new Date()).toLocaleString()
    };

    this.props.onSubmit(apology);

    const audios = this.state.audioList.push(audioUrl);
    this.setState({audios});
  }

  render () {
    let useStyle = {
      recorder: {
        display: "table",
        width: "100px",
        margin: "50px auto",
      }
    }
    return (
      <div style={useStyle.recorder}>
        {/* <audio controls src={this.state.audioList[0]} autoPlay /> */}
        { !this.state.recording && <button onClick={(e)=> {this.startRecording(e)}}>Record</button>}
        { this.state.recording && <button onClick={(e) => {this.stopRecording(e)}}>Stop</button>}
      </div>
    )
  }
}



export default Recorder;