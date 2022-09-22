import React from "react";
import TripCard from "./TripCard"

function MyTrips({trips}) {
    console.log(trips)
    let arrayOfTrips = trips.map(trip => <TripCard key={trip.id} trip={trip} />)

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