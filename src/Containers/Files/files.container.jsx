import React, { Component } from "react";
import FileComponent from "../../Components/File/file.component";
import VideoFileComponent from "../../Components/VideoFileComponent/video-file.component";
import classes from "./files.module.css";

export class FilesContainer extends Component {
  render() {
    let { fileList } = this.props;
    fileList = fileList.sort((a, b) => {
      const sn1 = parseInt(a.name.split(".")[0]);
      const sn2 = parseInt(b.name.split(".")[0]);
      if (sn1 > sn2) return 1;
      else if (sn1 < sn2) return -1;
      else return 0;
    });
    let videoList = fileList
      .filter((file) => file.path.includes(".mp4"))
      .map((video, i) => {
        const isVisited = localStorage.getItem(video.name);
        if (isVisited) video.isVisited = isVisited;
        return <VideoFileComponent key={i} {...video} />;
      });
    let pdfList = fileList.filter((file) => file.path.includes(".pdf"));
    return (
      // <div className={classes.FilesContaier}>
      //   <div className={classes.VideoSection}>
      //     <h1>Videos</h1>
      <div className={classes.VideoFiles}>{videoList}</div>
      //   </div>
      //   <div className={classes.PdfSection}>
      //     <h1>PDF Files</h1>
      //     <div className={classes.PdfFiles}></div>
      //   </div>
      // </div>
    );
  }
}

export default FilesContainer;
