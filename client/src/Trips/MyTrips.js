import React from "react";
import TripCard from "./TripCard"

function MyTrips({trips, handleReadMore, handleDeleteTrip, updateTrip, updateErrors}) {
    
    let arrayOfTrips = trips.map(trip => <TripCard key={trip.id} trip={trip} handleReadMore={handleReadMore}
        handleDeleteTrip={handleDeleteTrip} updateTrip={updateTrip} updateErrors={updateErrors}/>)

    return (
        <div>
            <h1>MY TRIPS</h1>
            <div className="trips-page">
                {arrayOfTrips} 
            </div>
            
        </div>
    )
}

export default MyTrips