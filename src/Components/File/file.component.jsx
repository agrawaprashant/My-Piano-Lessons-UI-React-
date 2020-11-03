import React from "react";
import classes from "./file.module.css";

function FileComponent(props) {
    let icon;
  if (props.path.includes(".pdf")) {
    icon = <div><i class="fas fa-file-pdf fa-5x"></i></div>;
  } else if(props.path.includes(".mp4")) {
      icon = <div class="card">
      <img src={props.thumbnail} className="card-img-top" alt="..."/>
      <div class="card-body">
            <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
}
else {
    icon = <div><i class="fas fa-file fa-5x"></i></div>
    }
  return icon
    
}

export default FileComponent;
