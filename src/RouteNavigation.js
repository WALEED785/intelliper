import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Careers from './Components/Careers';
import CaseStudy from './Components/CaseStudy';
import ChooseUS from './Components/ChooseUS';
import ContactUS from './Components/ContactUS';
import CustomeSoftware from './Components/CustomeSoftware';
import DevOpsServices from './Components/DevOpsServices';
import DiscoveryWorkshopServices from './Components/DiscoveryWorkshopServices';
import EmbeddedSoftwareDevelopment from './Components/EmbeddedSoftwareDevelopment';
import Home from './Components/Home';
import MobileAppDevelopmentServices from './Components/MobileAppDevelopmentServices';
import QATestingServices from './Components/QATestingServices';
import ServiceDetails from './Components/ServiceDetails';
import Services from './Components/Services';
import WebDevelopmentService from './Components/WebDevelopmentServices';
function RouteNavigation() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/choose-us" element={<ChooseUS />} />
      {/* Services Routes */}
      <Route path="/services" element={<Services />} />
      <Route path="/custome-software" element={<CustomeSoftware />} /> 
      <Route path="/web-development-software" element={<WebDevelopmentService />} /> 
      <Route path="/mobile-app-development-software" element={<MobileAppDevelopmentServices />} /> 
      <Route path="/quality-assurance-and-testing-services" element={<QATestingServices />} /> 
      <Route path="/embedded-software-development" element={<EmbeddedSoftwareDevelopment />} /> 
      <Route path="/devops-services" element={<DevOpsServices />} /> 
      <Route path="/discovery-workshop-services" element={<DiscoveryWorkshopServices />} /> 
      <Route path="/services-detail" element={<ServiceDetails />} />
      <Route path="/case-studies" element={<CaseStudy />} />
      <Route path="/contact" element={<ContactUS/>} />
    </Routes>
  </Router>
  )
}

export default RouteNavigation