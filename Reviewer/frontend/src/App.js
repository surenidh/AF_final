import React from 'react';
import './App.css';
import Sidebarmenu from './Components/Sidebarmenu';


export default class App extends React.Component{
    render() {
        return ( 
            <div className="App">
               <Sidebarmenu/>
            </div>
        );
    }
}