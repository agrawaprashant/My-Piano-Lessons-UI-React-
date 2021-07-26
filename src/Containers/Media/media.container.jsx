import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class MediaContainer extends Component {
  state = {
    mediaPath: this.props.match.params.path,
    numPages: null,
    currentPage: 1,
  };

  onDucumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    this.setState({ numPages });
  };

  onDocumentLoadError = (err) => {
    console.log(err);
  };

  onNextPageClickHandler = () => {
    let { currentPage } = this.state;
    currentPage += 1;
    this.setState({ currentPage });
  };

  speedControlHandler = (e) => {
    const vidPlayer = document.getElementById("videoPlayer");
    vidPlayer.playbackRate = e.target.value;
  };
  render() {
    console.log("MEDIA PLAYER");
    console.log(this.state);
    let mediaPlayer;
    const { mediaPath } = this.state;
    if (mediaPath.includes(".mp4")) {
      mediaPlayer = (
        <>
          <video id="videoPlayer" controls autoPlay>
            <source
              src={`http://192.168.1.5:5000/api/content/${mediaPath}`}
              type="video/mp4"
            />
          </video>

          <select
            onChange={this.speedControlHandler}
            name="speed-control"
            id="speed-control"
          >
            <option value="0.5">0.5X</option>
            <option value="1" defaultChecked>
              1X
            </option>
            <option value="1.5">1.5X</option>
            <option value="2">2X</option>
            <option value="2.5">2.5X</option>
            <option value="3">3X</option>
          </select>
        </>
      );
    } else if (mediaPath.includes("pdf")) {
      mediaPlayer = (
        <div>
          <Document
            onLoadError={this.onDocumentLoadError}
            file={`http://192.168.1.5:5000/api/content/${mediaPath}`}
            onLoadSuccess={this.onDucumentLoadSuccess}
          >
            <Page pageNumber={this.state.currentPage} />
          </Document>
          <p>
            Page {this.state.currentPage} of {this.state.numPages}
          </p>
          <button onClick={this.onNextPageClickHandler}>Next Page</button>
        </div>
      );
    }
    return <div>{mediaPlayer}</div>;
  }
}

export default MediaContainer;
