import React from "react";
import "./section2.css";
import icon1 from '../../Assets/carbon_notebook-reference.svg'
import icon2 from '../../Assets/Vector.svg'
import icon3 from '../../Assets/Robot.svg'
import icon4 from '../../Assets/IdentificationCard.svg'
const section2 = () => {
  return (
    <div className="section2">
      <div className="title">
        Why Participate in{" "}
        <span style={{ color: "green" }}>AI Challenges?</span>
      </div>
      <div className="insection2">
        <div className="divisions">
          <img src={icon1}/>
          <h2>Prove your skills</h2>
          <p>
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </p>
        </div>
        <div className="divisions">
          <img src={icon2}/>
          <h2>Learn from community</h2>
          <p>
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </p>
        </div>
        <div className="divisions">
          <img src={icon3}/>
          <h2>Challenge yourself</h2>
          <p>
            Challenge yourself There is nothing for you to lose by participating
            in a challenge. You can fail safe, learn out of the entire
            experience and bounce back harder.
          </p>
        </div>
        <div className="divisions">
          <img src={icon4}/>
          <h2>Earn recognition</h2>
          <p>
            Earn recognition You will stand out from the crowd if you do well in
            AI challenges, it not only helps you shine in the community but also
            earns rewards.
          </p>
        </div>
      </div>
    </div>
  );
};
export default section2;
