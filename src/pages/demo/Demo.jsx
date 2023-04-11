import React from "react";
import { Navbar, Explainer } from "../../components";
import { Footer } from "../../containers";

const Demo = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <div className="Demo__page-layout">
          <Explainer />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Demo;
