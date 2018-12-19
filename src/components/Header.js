import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div className="title">Junior Developer Skills Assessor</div>
            <div></div>
            <Link to="/">Start Again</Link>
            <Link to="/howitworks">How It Works</Link>
        </div>
    )
}