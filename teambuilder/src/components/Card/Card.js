import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom';
export default function Card(props) {
    const {el, idx} = props;
    return (
        <Link className="card" to={`/card/edit/${idx}`}>
        <div className="card">
            <h1>Hello</h1>
            <p>{el.name}</p>
            <p>{el.email}</p>
            <p>{el.role}</p>
            <p>{el.cohort}</p>
        </div>
        </Link>
    )
}
