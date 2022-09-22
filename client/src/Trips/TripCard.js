import React from "react";
import { useNavigate } from "react-router-dom";
import FacilityCard from "../Facilities/FacilityCard";

function TripCard({trip}) {

    return (
        <div className="card">
             <div className="div">
                
                <button type="button" onClick={handleUpdateTrip} className="trip-update">🛠</button>
            </div>
            <h1>{trip.facility.name}</h1>
            <h2 className="between-text">{trip.comment}</h2> 
            
          
        </div>
    )
}

export default TripCard