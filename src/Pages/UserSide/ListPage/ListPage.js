import React, { useEffect, useRef, useState } from "react";
import "./ListPage.css";
import Data from "../../../Data/Data.js";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Header from "../../../Components/Header/Header";
import Navbar from "../../../Components/Navbar/Navbar";
import Section2 from "../../../Components/Section2/section2";
// import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import "./ListPage.css";
import { useLocation } from "react-router-dom";
const names1 = ["All", "Upcoming", "Past", "Active"];
const names2 = ["Easy", "Medium", "Hard"];

const ListPage = () => {
  const location = useLocation();
  const [personName, setPersonName] = React.useState([]);
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState(Data);
  useEffect(() => {
    {
      personName.map((val) => {
        updation(val);
      });
    }
  }, [personName]);


  const [hackathon, setHackathon] = useState(location.item);
  const [timerdays, setTimerDays] = useState("0");
  const [timerhours, setTimerHours] = useState("0");
  const [timerminutes, setTimerMinutes] = useState("0");
  const [timerseconds, setTimerSeconds] = useState("0");

  useEffect(() => {
    // StartTimer(allottime);
    return () => {
      clearInterval(interval.current);
    };
  });

  let interval = useRef();

  const handlefilteration = (val) => {
    setSearchText(val);
    filterItem(val);
  };

  const filterItem = (categItem) => {
    const lowerCaseValue = categItem.toLowerCase().trim();
    if (!lowerCaseValue) {
      setItems(Data);
    } else {
      const filteredData = Data.filter((currElem) => {
        return Object.keys(currElem).some((key) => {
          return currElem[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      setItems(filteredData);
    }
  };
  const updation = (categItem) => {
    const updatedItems = Data.filter((currElem) => {
      return (
        currElem.status === categItem ||
        currElem.level === categItem ||
        currElem.all === categItem
      );
    });
    setItems(updatedItems);
  };

  const navigate = useNavigate();
  const handleparticipation = (
    e,
    id,
    time,
    heading,
    allottime,
    details,
    level,
    image
  ) => {
    e.preventDefault();
    console.log(id);
    navigate("/Details", {
      state: { id, time, heading, allottime, details, level,image },
    });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="ListPage">
      <Navbar />
      <Header />
      <Section2 />
      <div className="filtersec">
        <h1>Explore Challenges</h1>
        <div className="filterinput">
          <div>
            {/* <SearchIcon style={{ height: "2rem", width: "2rem" }} /> */}
          </div>
          <div className="fff">
            <div>
              <input
                style={{ width: "40vw" }}
                onChange={(e) => handlefilteration(e.target.value)}
                placeholder="Search"
              />
            </div>

            <div className="filterdrop">
              <div>
                <FormControl size="small" sx={{ m: 1, width: "20vw" }}>
                  <InputLabel>Filter</InputLabel>
                  <Select
                    // small
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => {
                      selected.join(", ");
                    }}
                    // MenuProps={MenuProps}
                    style={{ background: "white" }}
                  >
                    <hr style={{ margin: "1rem" }} />
                    <ListItemText
                      style={{ marginLeft: "2rem" }}
                      primary={"Status"}
                    />
                    <hr style={{ margin: "1rem" }} />
                    {names1.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                    <hr style={{ margin: "1rem" }} />
                    <ListItemText
                      style={{ marginLeft: "2rem" }}
                      primary={"Level"}
                    />
                    <hr style={{ margin: "1rem" }} />
                    {names2.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="chips">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: 3,
              marginTop: "1rem",
            }}
          >
            {personName.map((value) => (
              <Chip
                sx={{
                  fontSize: "1rem",
                  height: "2.5rem",
                  width: "fit-content",
                }}
                key={value}
                label={value}
              />
            ))}
          </Box>
        </div>
      </div>

      <div className="datashown">
        <div className="indatashown">
          {items && items.length > 0 ? (
            items.map((elem) => {
              const {
                id,
                status,
                heading,
                time,
                image,
                level,
                alottime,
                details,
              } = elem;

              var countdownDate = new Date("June 5, 2022 13:55:00").getTime();
              interval = setInterval(() => {
                var now = new Date().getTime();
                var distance = countdownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor(
                  (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (distance < 0) {
                  clearInterval(interval.current);
                } else {
                  // var elems = document.getElementById('dayy');
                  // elems.innerHTML = days;
                  setTimerDays(days);
                  setTimerHours(hours);
                  setTimerMinutes(minutes);
                  setTimerSeconds(seconds);
                }
              }, 1000);

              return (
                <div className="cardsec">
                  <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <span
                          className={
                            status === "Upcoming"
                              ? "timing"
                              : status === "Past"
                              ? "timi"
                              : status === "Active"
                              ? "tim"
                              : "ti"
                          }
                        >
                          <div>{status}</div>
                        </span>
                        <div className="timinghead">
                          <h2>{heading}</h2>
                        </div>
                        <div className="timer">
                          <span className="timertag">
                            <div>{time}</div>
                          </span>
                          {timerhours === "0" &&
                          timerdays === "0" &&
                          timerminutes === "0" ? (
                            <div className="time xx">{alottime}</div>
                          ) : (
                            <div className="time">
                              <div className="days">
                                <div className="xx" id="dayy">
                                  {timerdays}
                                </div>
                                <div className="txt">Days</div>
                              </div>
                              <span className="dots">:</span>
                              <div className="days">
                                <div className="xx">{timerhours}</div>
                                <div className="txt">Hours</div>
                              </div>
                              <span className="dots">:</span>
                              <div className="days">
                                <div className="xx">{timerminutes}</div>
                                <div className="txt">Mins</div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="btnn">
                          <Button
                            startIcon={<TaskAltIcon />}
                            variant="contained"
                            color="success"
                            onClick={(e) => {
                              handleparticipation(
                                e,
                                id,
                                time,
                                heading,
                                alottime,
                                details,
                                level,
                                image
                              );
                            }}
                          >
                            Participate Now
                          </Button>
                          <div></div>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })
          ) : (
            <div>No List Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
