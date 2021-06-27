import React from 'react';
import '../App.css';


function Sidebarmenu(){
    return <div className="Sidebarmenu">
        <ul>
        <li><a  href='/#'>HOME</a></li>
        <li><a href='/research'> RESEARCH PAPERS</a></li>
        <li><a href='/workshop'>WORKSHOP</a></li>
        <li><a href='/logout'>LOGOUT</a></li>
        </ul>
    </div>
}

export default Sidebarmenu;