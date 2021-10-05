import React from 'react'
import Garage from '../garage/Garage';
import "../../App.css"
import {useSelector} from "react-redux"

export default function Home(props) {
    const justin = useSelector(state =>state.justin)
    return (
        <div className="box">
            <h1>Home</h1>
            <Garage mustang={props.mustang}/>
            <p>{props.mustang}</p>
            <p>{justin}</p>
        </div>
    )
}
