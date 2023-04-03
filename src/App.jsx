import React from "react";
import { Brand, Cta, Navbar } from "./components";
import { Features, Footer, Header, Possibility, About } from "./containers";
import "./App.css";
import { Link } from "react-scroll";
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
      <Possibility />
      <Cta />
      <Footer />
    </div>
  );
};
export default App;
