import React from "react";
import { useNavigate } from "react-router-dom";


function TripCard({trip}) {

    function handleUpdateTrip() {

    }
    return (
        <div className="card">
             <div className="div">
                
                <button type="button" onClick={handleUpdateTrip} className="trip-update">X</button>
            </div>
            <h2>&#127775;</h2>
            <h2>{trip.facility.name}</h2>
            <h3 className="between-text">My comment: {trip.comment}</h3> 
            <button type="button" onClick={handleUpdateTrip} className="trip-update">Update</button>
          
        </div>
    )
}

export default TripCard