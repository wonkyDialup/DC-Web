import React from 'react';
import App from '../App.css'

const Square = ({ value, onClick }) => (
    <button className='square' style={App} onClick={onClick}>
        {value}
    </button>
);

export default Square;