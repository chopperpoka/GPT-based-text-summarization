import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Brand, Cta, Navbar } from "./components";
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
    <Router>
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
        <Routes>
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Cta />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
