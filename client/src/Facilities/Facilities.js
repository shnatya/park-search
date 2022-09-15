import React from "react";
import FacilityCard from "./FacilityCard";

function Facilities({facilitiesToDisplay}) {

    return (
        <div>
            {facilitiesToDisplay.map(object => <FacilityCard facility={object.facility}/>)}
        </div>
    )
}

export default Facilities