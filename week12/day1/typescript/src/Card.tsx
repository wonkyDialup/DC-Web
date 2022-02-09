import React from 'react'
import CardContainer from './CardContainer'

export const data = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
 ]



function Card()  {
    return (
        <div>
            {data.map((data) => (
                <CardContainer data={data} />
            ))}
        </div>
    )
}

export default Card
