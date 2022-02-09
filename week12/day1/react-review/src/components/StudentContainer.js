import React from 'react'
import Students from './Students';
import { useSelector } from "react-redux"


export default function StudentContainer(props) {
    const students = useSelector(state => state.students)
    console.log(props.students)
    return (
        <div>
            <h1>Student Container</h1>
            {students.map((Student) => (
                <Students students={Student}/>
            ))}
        </div>
    )
}
