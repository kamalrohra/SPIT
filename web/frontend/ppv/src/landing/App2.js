import React from "react";
import Navigation from "./Navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App2 = () => {
  return (
    <div>
      <Navigation />
      {/* <Header  />
      <Features  />
      <About  />
      <Services  />
      <Gallery  />
      <Testimonials  /> */}
    </div>
  );
};

export default App2;
