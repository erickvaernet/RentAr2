import react from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import {Login} from "../pages/Login/index"
import {RentalPayments} from "../pages/RentalPayments/index"
import {AddProperty} from "../pages/AddProperty/index"

export const AppRoutes=()=>{
    
    return(
        <Routes>
            <Route path="/" element={<AddProperty/>}>        
            </Route>        
        </Routes>
    );

};
