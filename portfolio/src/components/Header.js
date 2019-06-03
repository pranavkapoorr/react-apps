import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" href="/">
                    <img className="rounded-circle" style={{width:"40px"}} src="https://raw.githubusercontent.com/pranavkapoorr/angular-apps/master/portfolio/src/assets/img/pranav_kapoor.jpg" alt="pk"/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Education</a>
                    </li> 
                    </ul>
                </div> 
                </nav>
            </header>
        )
    }
}
