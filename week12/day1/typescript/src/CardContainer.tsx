import React, {FC} from 'react'


interface Cardprops {
    data: {
        name: string,
    }
}



const CardContainer:FC<Cardprops> = (props) => {
    return (
        <div>
            <p>{props.data.name}</p>
        </div>
    )
}

export default CardContainer

