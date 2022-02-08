import React from "react";
import 'fomantic-ui-css/semantic.css';
import ShoppingComponent from "../components/ShoppingComponent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <ShoppingComponent />
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover />
    </div>
  );  
}

export default App;
