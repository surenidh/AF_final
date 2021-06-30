import React from 'react';
import './App.css';
import Sidebarmenu from './Components/Sidebarmenu';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ViewProfile from './Components/ViewProfile';
import Research from './Components/Research';
import ViewResearch from './Components/ViewResearch';
import Workshop from './Components/Workshop';
import Logout from './Components/Logout';

export default class App extends React.Component{
    render() {
        return ( 
            <Router>
                <Route>
                    <Sidebarmenu/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/profile" exact>
                    <Profile/>
                </Route>
                <Route path="/viewprofile" exact>
                    <ViewProfile/>
                </Route>
                <Route path="/research" exact>
                    <Research/>
                </Route>
                <Route path="/viewresearch" exact>
                    <ViewResearch/>
                </Route>
                <Route path="/workshop" exact>
                    <Workshop/>
                </Route>
                <Route path="/logout" exact>
                    <Logout/>
                </Route>
            </Router>
               
        );
    }
}