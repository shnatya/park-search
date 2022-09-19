import React from "react";
import { useNavigate } from "react-router-dom"

function ReadMore({facility}) {
    const navigate = useNavigate()

    return (
        <div>
            <h1>{facility.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: facility.description }}></div>
            <button onClick={() => navigate("/search")} className="back-to-search">Back to Search</button>
        </div>
    )
}

export default ReadMore