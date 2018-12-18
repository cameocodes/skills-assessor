import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div>Junior Developer Skills Assessor</div>
            <div></div>
            <Link to="/howitworks">How It Works</Link>
            <Link to="/">Start Again</Link>
        </div>
    )
}