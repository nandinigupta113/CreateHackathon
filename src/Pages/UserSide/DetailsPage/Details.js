import React, { useState } from "react";
import "./Details.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Navbar from "../../../Components/Navbar/Navbar";
import Levelimg from "../../../Assets/carbon_skill-level-basic.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from '../../../Data/Data.js';
const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setid] = useState(location.state.id);
  const [time, setTime] = useState(location.state.time)
  const [heading, setHeading] = useState(location.state.heading)
  const [allottime, setAllottime] = useState(location.state.allottime)
  const [details, setDetails] = useState(location.state.details)
  const [level, setLevel] = useState(location.state.level)

  const handledelete = (e) => {
    e.preventDefault();
    var index = Data.map((elem) => {
      return elem.id
    }).indexOf(id);
    Data.splice(index,1);
    navigate('/');
  }


  const handleediting= (e) => {
    e.preventDefault();
    navigate("/CreateChallenge");
    console.log(location);
  }

  return (
    <div className="Details">
      <Navbar />
      <div className="indetails">
        <div className="insidedetails">
          <div className="mentiontym">
            <AccessTimeIcon />
            <span>{time}&nbsp; {allottime} (India Standard Time)</span>
          </div>
          <h1>{heading}</h1>
          <p>{details}</p>
          <div className="level">
            <img src={Levelimg} />
            <span>{level}</span>
          </div>
        </div>
      </div>
      <div className="overview">
        <div className="inoverview">
          <div className="overtxt">Overview</div>
          <div className="ediit">
            <Button variant="contained"onClick={handleediting} color="success">
              Edit
            </Button>
            <Button variant="outlined" color="error" onClick={handledelete}>
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
