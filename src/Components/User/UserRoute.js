import React from "react";
import UserPage from "./UserPage";
import {BrowserRouter as Router} from "react-router-dom";

const UserRoute = () =>{
    return(
        < Router>
            <UserPage/>
        </Router>
    )
}

export default UserRoute