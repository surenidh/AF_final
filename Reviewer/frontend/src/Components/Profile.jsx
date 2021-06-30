import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Profile(){

    const [input, setInput] = useState({
        name:'',
        address:'',
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newReviewer = {
            name:input.name,
            address: input.address,
        }
        //console.log(input);
       axios.post('http://localhost:3001/profile',newReviewer);
    }

    return(
        <div className="content">
            <h1>Reviewer Profile</h1>
            <form className="frmProfile">
                <div className="form-group">
                    <input onChange={handleChange}  name="name" className="form-control" autoComplete="off" placeholder="Reviewer First Name"></input>
                </div>
                <br/>
                <div className="form-group">
                    <input onChange={handleChange}  name="address" className="form-control" autoComplete="off" placeholder="Address"></input>
                </div>
                <br/>
                <div className="form-group">
                    <input onChange={handleChange}  name="email" className="form-control" autoComplete="off" placeholder="email"></input>
                </div>
                <br/>
                <button onClick={handleClick} className="btn btn-lg btn-info">ADD REVIEWER</button>
            </form>
        </div>
    );
}

export default Profile;