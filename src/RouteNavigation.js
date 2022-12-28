import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Careers from './Components/Careers';
import CaseStudy from './Components/CaseStudy';
import ChooseUS from './Components/ChooseUS';
import ContactUS from './Components/ContactUS';
import Home from './Components/Home';
import ServiceDetails from './Components/ServiceDetails';
import Services from './Components/Services';
function RouteNavigation() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/choose-us" element={<ChooseUS />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services-detail" element={<ServiceDetails />} />
      <Route path="/case-studies" element={<CaseStudy />} />
      <Route path="/contact" element={<ContactUS/>} />
    </Routes>
  </Router>
  )
}

export default RouteNavigation