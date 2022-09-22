import React from "react";
import TripCard from "./MyTrips"

function MyTrips({trips}) {
    console.log(trips)
    let arrayOfTrips = trips.map((trip, index) => <TripCard key={index} trip={trip}/>)
    
    return (
        <div>
            <h3>My trips</h3>
            {arrayOfTrips}
        </div>
    )
}

export default MyTrips