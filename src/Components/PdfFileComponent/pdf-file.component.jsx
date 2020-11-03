import React from 'react'
import classes from './pdf-file.module.css'

function PdfFileComponent(props) {

    return (
        <div className={classes.PdfFile}>
            <div className={classes.Body}>
                <img src="https://www.biochek.com/wp-content/uploads/2018/07/adobe-pdf-icon-logo-png-transparent.png" alt="icon"/>
            </div>
            <div className={classes.Footer}>
                {props.name}
            </div>
        </div>
    )
}

export default PdfFileComponent
