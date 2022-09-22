import React from "react";
import FacilityCard from "./FacilityCard";

function Facilities({facilitiesToDisplay, handleReadMore, passNewFacility}) {

    return (
        <div>
            <h1>&#127794;&#127794;&#127794;&#127794;&#127794;</h1>
            {facilitiesToDisplay.map(object => <FacilityCard key={object.id} facility={object.facility} handleReadMore={handleReadMore}
                                                passNewFacility={passNewFacility}/>)}
        </div>
    )
}

export default Facilities