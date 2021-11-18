import React from "react";
import "./Loading.css"

const Loading = () => {
    return(
        <div className="loading">
            <div className="spinner-border text-primary" role="status"> </div>
        </div>
    );
}

export default Loading;