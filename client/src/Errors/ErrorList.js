import React from "react";
import Error from "./Error";

function ErrorList({errors}) {
    let listErrors = errors.map((error, index) => <Error key={index} error={error} />)
    
    return (
        <div className="container">
             <ul className="errors between-text">
                {listErrors}
            </ul>
        </div>
    )
}

export default ErrorList