import React from "react";
import FacilityCard from "./FacilityCard";

function Facilities({facilitiesToDisplay, handleReadMore, passNewFacility}) {

    return (
        <div>
            <h1>&#127794;&#127794;&#127794;&#127794;&#127794;</h1>
            {facilitiesToDisplay.map(object => <FacilityCard facility={object.facility} handleReadMore={handleReadMore}
                                                passNewFacility={passNewFacility}/>)}
        </div>
    )
}

export default Facilities