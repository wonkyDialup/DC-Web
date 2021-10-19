import React from 'react'
import Students from './Students';

export default function StudentContainer(props) {
    console.log(props.students)
    return (
        <div>
            <h1>Student Container</h1>
            {/* {props.students.map((Student) => (
                <Students students={Student}/>
            ))} */}
        </div>
    )
}
