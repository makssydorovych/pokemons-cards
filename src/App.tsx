import React from 'react';
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";

const App = () => {
    return (
        <div className="main-container">
          <div className="app">
              <Navbar/>
              <Wrapper/>
              <Footer/>
          </div>
        </div>
    );
};

export default App;