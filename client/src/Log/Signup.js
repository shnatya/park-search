import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
import ErrorList from "../Errors/ErrorList";
import { useDispatch } from "react-redux"
import { fetchTrips } from "../Trips/tripsSlice"
import { userLogin } from "./usersSlice";

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    dispatch(userLogin(user))
                    dispatch(fetchTrips())
                    navigate("/search")
                })
            }else{
                res.json().then(errors => {
                    setErrors(errors.errors)
                    setUsername("")
                    setPassword("")
                    setPasswordConfirmation("")
                    console.log("too short")
                }) 
            }
        }
            )
    }
    function handleChange(event) {
        setUsername(event.target.value)
        setErrors([])
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={username} id="username"
                autoComplete="off" className="input" placeholder="Username"></input>
                <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} id="password"
                autoComplete="current-password" className="input" placeholder="Password"></input>
                <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" value={passwordConfirmation}
                id="password_confirmation" autoComplete="current-password" className="input" placeholder="Password confirmation"></input>
                <button type="submit" className="button-login">Sign Up</button>
            </form>
            <ErrorList errors={errors} />
        </div>
    )
}

export default Signup