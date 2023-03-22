import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__gb">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  );
};
export default App;
