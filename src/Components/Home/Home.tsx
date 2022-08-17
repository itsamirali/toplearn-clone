import React from "react";
import Hero from "../Hero/Hero";
import SubMenu from "../SubMenu/SubMenu";

const Home = () => {
  return (
    <>
      <Hero />
      <SubMenu />
      <div style={{height: "150vh"}} className="d-flex w-100"></div>
    </>
  );
};

export default Home;
