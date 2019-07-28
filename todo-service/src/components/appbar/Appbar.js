import React from 'react'
import './Appbar.css'
 const Appbar = () =>(
<header>
    <nav>
        <div className="logo">
            Todo Service
        </div>
        <ul>
            <li><a href='/'>Home</a></li>
            |
            <li><a href='/'>help</a></li>
        </ul>
    </nav>
</header>
    )

    export default Appbar;
