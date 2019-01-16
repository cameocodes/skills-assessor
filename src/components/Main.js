import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
    render() {
        return(
            <div className="main content">
                <p>Bit of information about how it works. Read more on how it works here.</p>
                <Link to="/stepOne"><button>Let's begin!</button></Link>
            </div>
        )
    }
}

export default Main;