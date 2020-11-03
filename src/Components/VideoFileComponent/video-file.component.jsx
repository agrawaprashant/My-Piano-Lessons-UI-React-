import React from 'react';
import classes from './video-file.module.css';
import {Link} from 'react-router-dom'

function VideoFileComponent(props) {
    return (
        <div className={classes.VideoFile}>
            <Link to={`content/${props.path}`}>
            <div className={classes.Body}>
                <img src={props.thumbnail} alt=".."/>
            </div>
            <div className={classes.Footer}>
                <h4>{props.name}</h4>
            </div>
            </Link>
        </div>
    )
}

export default VideoFileComponent
