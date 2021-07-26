import React, { Component } from "react";
import FolderComponent from "../../Components/Folder/folder.component";

export class FoldersContainer extends Component {
  state = {
    folderStructure: null,
  };

  render() {
    let { folderList, onFolderClicked } = this.props;
    folderList = folderList.sort((a, b) => {
      const sn1 = parseInt(a.name.split(".")[0]);
      const sn2 = parseInt(b.name.split(".")[0]);
      if (sn1 > sn2) return 1;
      else if (sn1 < sn2) return -1;
      else return 0;
    });
    folderList = folderList.map((folder) => {
      return (
        <FolderComponent
          onFolderClicked={onFolderClicked}
          key={folder.name}
          {...folder}
        />
      );
    });
    return folderList;
  }
}

export default FoldersContainer;
