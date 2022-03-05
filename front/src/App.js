import react from "react";
import {BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() { 
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
