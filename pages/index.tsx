import { useRef } from 'react'
import type { NextPage } from "next";
import Header from "../components/home/header"
import AboutSection from "../components/home/aboutSection"
import ServicesSection from "../components/home/servicesSection";
import ProjectsSection from "../components/home/projectsSection";
import ContactSection from "../components/home/contactSection";
import CookieDisclaimer from '../components/cookieDisclaimer';
import CustomersSection from '../components/home/customersSection';


export default function HomePage (props) {
  return (
    <>
      <Header />
      <AboutSection anchorRefs={props.anchorRefs}/>
      <ServicesSection anchorRefs={props.anchorRefs}/>
      <ProjectsSection anchorRefs={props.anchorRefs}/>
      <CustomersSection />
      <ContactSection anchorRefs={props.anchorRefs}/>
    </>
  );
};

