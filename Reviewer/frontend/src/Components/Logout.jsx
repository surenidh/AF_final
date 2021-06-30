import React from 'react';

function Logout(){
    return(
        <div className="container-fluid">
            <form className="frmlogout">
                <h1>LOGOUT NOW</h1>
                <div className="form-group">
                    <h6>Log out From App</h6>
                    <p>Do you wish to logout now?</p>
                    <button name="btnyes" className="btn btn-lg btn-info">YES</button>
                    <button  className="btn btn-lg btn-info">No</button>
                </div>
           </form>
        </div>
    );
}

export default Logout;