import './EditDetails.css';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Calender from '../../../Assets/uil_calender.svg';
import Navbar from "../../../Components/Navbar/Navbar.js";
import Upload from '../../../Assets/bxs_cloud-upload.svg'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import uplimg from '../../../Assets/bi_image-fill.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Data from '../../../Data/Data.js';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const EditDetails = () => {
  const location = useLocation();
  let navigate = useNavigate();
  // const [value, setValue] = React.useState(dayjs('2022-04-07'));


  const [id, setid] = useState(location.state.id);
  const [time, setTime] = useState(location.state.time)
  const [heading, setHeading] = useState(location.state.heading)
  const [allottime, setAllottime] = useState(location.state.allottime)
  const [details, setDetails] = useState(location.state.details)
  const [level, setLevel] = useState(location.state.level)
  const [image, setImage] = useState(location.state.image)



  var index = Data.map((elem) => {
    return elem.id
  }).indexOf(id);

  const handlesubmit = (e) => {
    e.preventDefault();
  
    let a = Data[index];
    a.heading = heading;
    a.details = details;
    a.alottime = (allottime.$d).toString();
    a.image = image;
    a.level = level;
  
    navigate('/');

  }

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };




  return (
    <div className='EditDetails'>
         <div className="Create">
      <Navbar />
      <div className="headingdetails">
        <div className="inheading">Challenge Details</div>
      </div>
      <div className="detailings">
        <div className="indetailings">
        <label>Challenge Name</label>
          <div className="txtbox">


        

          <TextField
            label="Challenge Name"
            id="outlined-size-small"
            size="small"
            sx={{
              width:"40vw",
              minWidth:'300px'
            }}
            defaultValue=""
            value={heading}
            onChange={(e) => setHeading(e)}          
          />

          </div>
          <label>Start Date</label>
          <div className="txtbox"> 

          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField
          size="small"
          sx={{
          width:"40vw",
          minWidth:'300px'
      }}
      {...props} />}
        label="Add Start Date"
        
      value={allottime}
      onChange={(e) => setAllottime(e)}
        
      />
    </LocalizationProvider>





{/* 
          <TextField
            label="Add Start Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
                minWidth:'300px'
            }}
            value={allottime}
            onChange={(e) => setAllottime(e.target.value)}
          />
 */}


          {/* <img src={Calender}/> */}
          </div>

          <label>End Date</label>
          <div className="txtbox"> 
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField
          size="small"
          sx={{
          width:"40vw",
          minWidth:'300px'
      }}
      {...props} />}
        label="Add End Date"
        
      value={allottime}
      onChange={(e) => setAllottime(e)}
        
      />
    </LocalizationProvider>

          {/* <TextField
            label="Add End Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
                minWidth:'300px'

            }}
            value={allottime}
            onChange={(e) => setAllottime(e.target.value)}
          /> */}
          {/* <img  src={Calender}/> */}
          </div>
          <label>Description</label>
          <textarea className="vvv"  value={details}
            onChange={(e) => setDetails(e.target.value)} ></textarea>
          <label>Image</label>
          <div className='imgwrap'>
          <div className="hhhhh">
          <img src={image} alt=''/>
          </div>
          <div className="imgupload">
            <div className="outuplaod">
            <input
              className="upload"
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={onImageChange}
            />
            </div>
            <div className="upp">
              <div>
              <img src={uplimg}/>
              </div>
              <span>Change Image</span>
              <ArrowForwardIcon/>
            </div>
            </div>

          </div>

          <label>Level Type</label>

          <Box sx={{ maxWidth: 300 }}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Level"
                value={level}
                onChange={(e)=>setLevel(e.target.value)}
              >
                <MenuItem value='Easy'>Easy</MenuItem>
                <MenuItem value='Medium'>Medium</MenuItem>
                <MenuItem value='Hard'>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className="btnnn">
          <Button variant="contained" color="success" onClick={handlesubmit}>
            Save Changes
          </Button>
          </div>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default EditDetails
