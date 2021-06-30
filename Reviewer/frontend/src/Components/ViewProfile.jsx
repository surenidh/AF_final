import React, {useEffect , useState} from 'react';
const express = require('express');
import Profile from '../../../backend/Models/profileModel';

const app = express();

function ViewProfile(){
    const [profiles, setprofile] = useState([{
        name:'',
        address:''
    }])

    useEffect(()=> {
        fetch("/viewprofile").then(res => {
            if(res.ok){
                return res.json();
                console.log("success");
            }
        }).then(jsonRes => setprofile(jsonRes));
    })
    return <div className="container">
        <h1>Notes Page</h1>
        {profiles.map(profile => {
          <h1>{profile.address}</h1> 
          console.log(profiles);
          
        }
     

            )}
    </div>
}


export default ViewProfile;