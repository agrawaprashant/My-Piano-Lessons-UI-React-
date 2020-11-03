import React, { Component } from "react";
import FileComponent from "../../Components/File/file.component";
import VideoFileComponent from "../../Components/VideoFileComponent/video-file.component";
import classes from "./files.module.css";

export class FilesContainer extends Component {
  render() {
    let { fileList } = this.props;
    let videoList = fileList
      .filter((file) => file.path.includes(".mp4"))
      .map((video, i) => <VideoFileComponent key={i} {...video} />);
    let pdfList = fileList.filter((file) => file.path.includes(".pdf"));
    return (
      <div className={classes.FilesContaier}>
        <div className={classes.VideoSection}>
          <h1>Videos</h1>
          <div className={classes.VideoFiles}>{videoList}</div>
        </div>
        <div className={classes.PdfSection}>
          <h1>PDF Files</h1>
          <div className={classes.PdfFiles}></div>
        </div>
      </div>
    );
  }
}

export default FilesContainer;
