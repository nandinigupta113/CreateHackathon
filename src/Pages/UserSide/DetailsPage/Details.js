import React from "react";
import "./Details.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Navbar from "../../../Components/Navbar/Navbar";
import Levelimg from "../../../Assets/carbon_skill-level-basic.svg";
import Button from "@mui/material/Button";
const Details = () => {
  return (
    <div className="Details">
      <Navbar />
      <div className="indetails">
        <div className="insidedetails">
          <div className="mentiontym">
            <AccessTimeIcon />
            <span>Starts on 17th Jun'22 09:00 PM (India Standard Time)</span>
          </div>
          <h1>Data Sprint 72 - Butterfly Identification</h1>
          <p>Identify the class to which each butterfly belongs to</p>
          <div className="level">
            <img src={Levelimg} />
            <span>Easy</span>
          </div>
        </div>
      </div>
      <div className="overview">
        <div className="inoverview">
          <div className="overtxt">Overview</div>
          <div className="ediit">
            <Button variant="contained" color="success">
              Edit
            </Button>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="overvieww">
        <div className="inover">
          <p>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
            <br />
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
            <br />
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
