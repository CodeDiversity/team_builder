import React from 'react'
import './Card.scss'
export default function Card(props) {
    const {el} = props;
    return (
        <div className="card">
            <p>{el.name}</p>
            <p>{el.email}</p>
            <p>{el.role}</p>
            <p>{el.cohort}</p>
        </div>
    )
}
