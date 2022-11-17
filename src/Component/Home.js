import React from "react";
import "../Style/home.css";
import Bg from "../images/bg.webp";

function Home() {
  return (
    <div className="container-fluid">
      <div className="bgcolor">
        <img className="img1" src={Bg} alt="" />
      </div>

      <div className="text">
        {" "}
        ENGINEERING <br /> & <br /> TECHNOLOGY
      </div>
    </div>
  );
}

export default Home;
