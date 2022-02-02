import react from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import {Login} from "../pages/Login/index"

export const AppRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}>           
            </Route>        
        </Routes>
    );

};
