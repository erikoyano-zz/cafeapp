import React from "react";
import Main from "../Main/Main";
import News from "../News/News";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Menu from "../Menu";
import Access from "../Access/Access";

function Home() {
  return (
    <div>
      <Main />
      <News />
      <About />
      <Gallery />
      <Access />
      <Menu />
    </div>
  );
}

export default Home;
