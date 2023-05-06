import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Features,
  Footer,
  Header,
  Possibility,
  About,
  FAQ,
  Contact,
} from "./containers";
import { ScrollToTopButton } from "./features";
import { Demo } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Features />
      <ScrollToTopButton />
      <Possibility />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
