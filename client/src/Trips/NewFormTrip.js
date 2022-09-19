import React from "react";
import { useState } from "react";



function NewFormTrip({facility}) {
    const [newTrip, setNewTrip] = useState({
        comment: "",
        visited_at: "",
        review: 1,
        facility_id: facility.id
    })
    const rateArray = Array(1, 2, 3, 4, 5)
console.log(newTrip)

    function handleInput(event) {
        setNewTrip({
            ...newTrip,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit() {

    }

    return (
        <>
            <h1>Add New Trip</h1>
            <div className="new-trip-form">
                <form onSubmit={handleSubmit}>
                    <div className="div-input-order">
                        <h4>{facility.name}</h4>
                    </div>
                    <select onChange={(event) => handleInput(event)} name="review" value={newTrip.review} >  
                        {rateArray.map((rate, index) => <option  key={index} value={rate}>{rate}</option>)}
                    </select>
                    <div className="div-input-order">
                        <label htmlFor="type" className="label">Your comment: </label>
                        <input type="text" id="comment" name="comment" value={newTrip.comment} onChange={handleInput} className="input-trip"
                            placeholder="It was great!" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="type" className="label">Visited at: </label>
                        <input type="text" id="visited_at" name="visited_at" value={newTrip.visited_at} onChange={handleInput} className="input-trip"
                            placeholder="July 2022" />
                    </div>
                    
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )

}

export default NewFormTrip