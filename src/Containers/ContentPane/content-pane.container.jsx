import React, { Component } from "react";
import FilesContainer from "../Files/files.container";
import FoldersContainer from "../Folders/folders.container";
import classes from './content-pane.module.css'

export class ContentPaneContainer extends Component {
  render() {
    const { folderStructure, onFolderClicked, onFileClicked } = this.props;
    let folderList = folderStructure.children.filter(
      (child) => child.type === "folder"
    );
    let fileList = folderStructure.children.filter(
      (child) => child.type === "file"
    );
    let contentPane = (
      <div className={classes.ContentPane}>
        <FoldersContainer
          folderList={folderList}
          onFolderClicked={onFolderClicked}
        />
        <FilesContainer fileList={fileList} onFileClicked={onFileClicked} />
      </div>
    );

    return contentPane;
  }
}

export default ContentPaneContainer;
