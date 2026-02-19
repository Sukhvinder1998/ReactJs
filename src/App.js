import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import logo from './logo.svg';
// import './App.css';
import './assets/css/templatemo-villa-agency.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./inc/components/Header";
import Footer from "./inc/components/Footer";
import Home from "./inc/pages/Home";
import Properties from "./inc/pages/Properties";
import PropertyDetails from "./inc/pages/PropertyDetails";
import Contact from "./inc/pages/Contact";
import NotFound from "./inc/pages/NotFound";
import ScrollToTop from "./inc/components/ScrollToTop";

function App() {
  return (
    <>

      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
       
          <Route exact path="/react_websites/urban-acres/" element={<Home />} />
          <Route path="/react_websites/urban-acres/properties" element={<Properties />} />
          <Route path="/react_websites/urban-acres/property-details" element={<PropertyDetails />} />
          <Route path="/react_websites/urban-acres/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>





    </>
  );
}

export default App;
