import react from "react";
import {BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuAppBar } from "./layouts/AppBar/MenuAppBar";


function App() { 
  return (
    <>
    <MenuAppBar/>
    <ToastContainer/>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
