import React from "react";
import "./Header.css";
import group1 from '../../Assets/Group1000002515.svg'
import group2 from '../../Assets/Group 1000002516.svg'
import group3 from '../../Assets/Group 1000002518.svg'
import Robotpic from "../../Assets/PicsArt_04-14-04.42 1.svg";
const Header = () => {
  return (
    <div className="Header">
      <div className="part1">
        <div className="in_part1">
          <div className="tagline">
            Accelerate Innovation with Global AI
            Challenges
          </div>
          <div className="para">
            AI Challenges at DPhi simulate real-world problems.It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <div className="btndiv">
            <button className="btn" >Create Challenge</button>
          </div>
        </div>
        <div className="rocketimg">
          <img src={Robotpic}></img>
        </div>
      </div>
      <div className="headfoot">
        <div className="inheadfoot">
          <img src={group1}></img>
          <div><h1>100K+</h1><span>AI model submissions</span></div>
        </div>
        <div className="whiteline"></div>
        <div className="inheadfoot">
        <img src={group2}></img>
          <div><h1>50K+</h1><span>Data Scientists</span></div>
        </div>
        <div className="whiteline"></div>
        <div className="inheadfoot">
        <img src={group3}></img>
          <div><h1>100+</h1><span>AI Challenges hosted</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
