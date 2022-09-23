import React from "react";
import { useNavigate } from "react-router-dom"

function ReadMore({facility, passNewFacility, switchButtons}) {
    const navigate = useNavigate()

    return (
        <div>
            <h1>{facility.name}</h1>
            {switchButtons === "search" ? <button onClick={() => passNewFacility(facility)} className="btn">Add trip</button> : null}
            <div dangerouslySetInnerHTML={{ __html: facility.description }}></div>
            {switchButtons === "search" ? <button onClick={() => navigate("/search")} className="btn">Back</button> :
            <button onClick={() => navigate("/trips")} className="btn">Back</button>}
            <button onClick={() => passNewFacility(facility)} className="btn">Add trip</button>
        </div>
    )
}

export default ReadMore