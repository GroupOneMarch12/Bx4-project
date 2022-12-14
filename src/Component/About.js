import React from "react";
import "../Style/about.css";

function About() {
  return (
    <div className="container-fluid">
      <center>
        <body>
          <div>
            <div id="aboutOV" class="aboutpeg">
              <h1>
                <span style={{ color: "#D8D8D8" }}>OUR</span>
              </h1>
              <h1>
                <span style={{ color: "#D8D8D8" }}>VISION</span>
              </h1>
              <div className="paragraph" style={{ width: "547.69px" }}>
                <span className="psize">
                  ADH Engineering is&nbsp;a small company that thinks{" "}
                  <span style={{ "font-weight": "bold" }}>
                    <span style={{ "font-size": "19px;" }}>big</span>
                  </span>
                  . Our core mission is to improve the construction industry
                  through efficient, innovative, and constructible engineering.
                  We focus on the project’s overall purpose and evolve our
                  engineering to fit with the customer’s needs. Our diverse
                  technical background influences our innovation and creativity
                  to develop customized engineering solutions. With a
                  partnership mentality, we prioritize collaboration with other
                  project teams to deliver a coordinated and cohesive project
                  deliverable.&nbsp;
                </span>
              </div>
            </div>
          </div>
        </body>
      </center>
    </div>
  );
}

export default About;
