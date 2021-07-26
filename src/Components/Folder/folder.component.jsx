import React from 'react';
import classes from './folder.module.css';

function FolderComponent(props) {
    return (
        <div className={classes.Folder} onClick={() => props.onFolderClicked({path: props.path, name:props.name,children:props.children,type:props.type})}>
            <div className={classes.Body}>
                <img src="https://www.pngkey.com/png/full/16-161514_transparent-images-pluspng-icon-folder-icon-png.png" alt=""/>
            </div>
            <div className={classes.Footer}><p>{props.name}</p></div>
        </div>
    )
}

export default FolderComponent