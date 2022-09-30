import React, { useState} from "react";

function UpdateTripForm({updateThisTrip, newInfoForTrip, updateErrors}) {
    console.log(updateThisTrip.facility)
    const [updatedTrip, setUpdatedTrip] = useState({
        comment: updateThisTrip.comment,
        visited_at: updateThisTrip.visited_at,
        review: updateThisTrip.review,
        facility_id: updateThisTrip.facility.id,
        id: updateThisTrip.id
    })
    const rateArray = [1, 2, 3, 4, 5]
    console.log(updatedTrip)

    function handleInput(event) {
        updateErrors([])
        setUpdatedTrip({
            ...updatedTrip,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        newInfoForTrip(updatedTrip)
    }

    return (
        <>
            <h1>Update Trip</h1>
            <div className="new-trip-form">
                <form onSubmit={handleSubmit}>
                    <h5>{updateThisTrip.facility.name}</h5>
                    <div className="div-input-order">
                        <label htmlFor="review" className="label">Review: </label> 
                        <select onChange={(event) => handleInput(event)} name="review" value={updatedTrip.review} > 
                            {rateArray.map((rate, index) => <option  key={index} value={rate}>{rate}</option>)}
                        </select>
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="comment" className="label">My comment: </label>
                        <input type="text" id="comment" name="comment" value={updatedTrip.comment} onChange={handleInput} className="input-trip" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="visited_at" className="label">Visited at: </label>
                        <input type="text" id="visited_at" name="visited_at" value={updatedTrip.visited_at} onChange={handleInput} className="input-trip"
                             />
                    </div>
                    
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )

}

export default UpdateTripForm