import React, { Component } from 'react'
import FolderComponent from '../../Components/Folder/folder.component';

export class FoldersContainer extends Component {
    state = {
        folderStructure: null
    }

    render() {
        let {folderList,onFolderClicked} = this.props;
        folderList = folderList.map(folder => {
            return <FolderComponent onFolderClicked={onFolderClicked} key={folder.name} {...folder} />
          
        })
        return folderList
    }
}

export default FoldersContainer
