import React from 'react';
import classes from './folder.module.css';

function FolderComponent(props) {
    return (
        <div className={classes.Folder} onClick={() => props.onFolderClicked({path: props.path, name:props.name,children:props.children,type:props.type})}>
            <div className={classes.Body}>
                <img src="https://lh3.googleusercontent.com/proxy/sccPnVeD4iRVEj3SGAD0jcRlVw6MQBrZZGQvcGEvA7lxetqUGeXDEfkpUmbqv5JkD0LpPx780rrBd0XjS7BS3dT6MvKbU2RZwju7CuXO8DM9ZJh9yEW0OpqSF4tgRvEBrUFwSxp0DwUlqy_RPRE" alt=""/>
            </div>
            <div className={classes.Footer}><p>{props.name}</p></div>
        </div>
    )
}

export default FolderComponent