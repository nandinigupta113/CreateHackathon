import React from "react";
import "./ListPage.css";
import Header from "../../../Components/Header/Header";
import Navbar from "../../../Components/Navbar/Navbar";
import Section2 from "../../../Components/Section2/section2";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Card1 from "../../../Assets/CardsImage/Group 1000002466.png";
import Card2 from "../../../Assets/CardsImage/Group 1000002766.png";
import Card3 from "../../../Assets/CardsImage/Group 1000002767.png";
import Card4 from "../../../Assets/CardsImage/Group 1000002771.png";
import Card5 from "../../../Assets/CardsImage/Group 1000002772.png";
import Card6 from "../../../Assets/CardsImage/Group 1000002773.png";
import "./ListPage.css";
const ListPage = () => {
  return (
    <div className="ListPage">
      <Navbar />
      <Header />
      <Section2 />
      <div className="filtersec">
        <h1>Explore Challenges</h1>
        <div className="filterinput">
          <div>
            <SearchIcon style={{ height: "2rem", width: "2rem" }} />
          </div>
          <div>
            <input placeholder="Search" />
            <select></select>
          </div>
        </div>
      </div>
      <div className="datashown">
        <div className="indatashown">

          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card1}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


          
          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card2}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


          
          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card3}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


          
          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card3}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


          
          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card4}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


          
          <div className="cardsec">
            <Card sx={{ maxWidth: 345, borderRadius: "1rem" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Card5}
                  alt="green iguana"
                />
                <CardContent>
                  <span className="timing">
                    <div>Upcoming</div>
                  </span>
                  <div className="timinghead">
                    <h2>Data Science Bootcamp-Graded Datathon</h2>
                  </div>
                  <div className="timer">

                    <span className="timertag">
                      <div>Starts in</div>
                    </span>

                    <div className="time">
                      <div className="days">
                        <div className="xx">00 </div>
                        <div className="txt">Days</div>
                      </div>
                      <span className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Hours</div>
                      </div>
                      <span  className="dots">:</span>
                      <div className="days">
                        <div className="xx">00</div>
                        <div className="txt">Mins</div>
                      </div>
                    </div>

                  </div>
                  <div className="btnn">
                    <Button
                      startIcon={<TaskAltIcon />}
                      variant="contained"
                      color="success"
                    >
                      Participate Now
                    </Button>
                    <div></div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ListPage;
