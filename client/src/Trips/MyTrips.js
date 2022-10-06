import React from "react";
import TripCard from "./TripCard"
import { useSelector} from "react-redux"

function MyTrips({handleReadMore, updateErrors}) {
    const trips = useSelector((state) => state.trips.trips)
    let arrayOfTrips = trips.map(trip => <TripCard key={trip.id} trip={trip} handleReadMore={handleReadMore} updateErrors={updateErrors}/>)

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