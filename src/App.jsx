import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Features,
  Footer,
  Header,
  Possibility,
  About,
  FAQ,
} from "./containers";
import { ScrollToTopButton } from "./features";
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
      <Cta />
      <Footer />
    </div>
  );
};
export default App;
