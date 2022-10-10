import React from "react";
import TripCard from "./TripCard"
import { useSelector} from "react-redux"

function MyTrips({handleReadMore, updateErrors, updateTrip}) {
    const trips = useSelector((state) => state.trips.trips)
    let arrayOfTrips = trips.map(trip => <TripCard key={trip.id} trip={trip} handleReadMore={handleReadMore}
                                        updateErrors={updateErrors} updateTrip={updateTrip}/>)

    return (
        <div>
            <h1>MY TRIPS</h1>
            {trips.length === 0 ? <h3 style={{color: "green"}}>You haven't added trips yet. If you'd like to add, go back to Search.</h3> : null}
            <div className="trips-page">
                {arrayOfTrips} 
            </div>
            
        </div>
    )
}

export default MyTrips