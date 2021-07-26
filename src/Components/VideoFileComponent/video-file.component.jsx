import React, { useState } from "react";
import classes from "./video-file.module.css";
import { Link } from "react-router-dom";

function VideoFileComponent(props) {
  const [isFileClicked, setIsFileClicked] = useState(false);
  const fileClickHandler = () => {
    if (!props.isVisited) {
      localStorage.setItem(props.name, true);
      setIsFileClicked(true);
    }
  };
  return (
    <div className={classes.VideoFile} onClick={fileClickHandler}>
      <Link target="blank" to={`content/${props.path}`}>
        <div className={classes.Body}>
          <img src={props.thumbnail} alt=".." />
        </div>
        <div className={classes.Footer}>
          <h4
            style={
              isFileClicked || props.isVisited ? { color: "deeppink" } : {}
            }
          >
            {props.name}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default React.memo(VideoFileComponent);
