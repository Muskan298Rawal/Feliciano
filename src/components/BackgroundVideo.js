import React, { Component } from "react";

// const BackgroundVideo = () => {
class BackgroundVideo extends Component {
  constructor() {
    super();
    this.state = {};
    this.video = this.createVideoComponent();
  }
  createVideoProps() {
    return {
      src: "./assets/images/test.mp4",
      loop: true,
      muted: true,
      "data-yes": true,
      "data-no": false,
      autoPlay: true,
      height: 400,
    };
  }
  createVideoComponent() {
    const videoProps = this.createVideoProps();
    return <video {...videoProps} data-test />;
  }
  render() {
    return (
      <div style={{ backgroundColor: "black", marginTop: "50px" }}>
        <h1
          style={{
            color: "white",
            position: "absolute",
            width: "45%",
            textAlign: "left",
            margin: "110px 0px 0px 70px",
            display: "inline-block",
            fontSize: "45px",
            fontFamily: "New Times Roman",
            fontStyle: "italic",
          }}
        >
          We Care About You. <br />
          All of our gradients are checked to deliver our high quality meals.
        </h1>
        <div
          style={{
            textAlign: "right",
            backgroundColor: "black",
            display: "inline-block",
            marginLeft: "53%",
            height: "100%",
          }}
        >
          {this.video}
        </div>
      </div>
    );
  }
}

export default BackgroundVideo;