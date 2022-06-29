import React from "react";
// components
import Intro from "../../sections/Home/intro";
// style
import "./../../styles/scss/Home.scss";

const Home = () => {
  return (
    <article className="py-1 py-md-2 px-3" id="Home">
      <Intro />
    </article>
  );
};

export default Home;
