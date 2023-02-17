import React from 'react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};
