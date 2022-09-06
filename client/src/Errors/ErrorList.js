import React from "react";

function ErrorList({errors}) {

    return (
        <div className="container">
            <ul className="errors between-text">
                {errors.map((error, index) => <li key={index} >{error}</li>)}
            </ul>
        </div>
    )
}

export default ErrorList