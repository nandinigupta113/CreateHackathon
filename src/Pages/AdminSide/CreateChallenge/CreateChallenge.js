import React, { useEffect, useState } from "react";
import "./CreateChallenge.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Calender from '../../../Assets/uil_calender.svg';
import TextFieldIcon from 'material-ui-textfield-icon';
import Navbar from "../../../Components/Navbar/Navbar.js";
import { minWidth } from "@mui/system";
import { Icon, unstable_useId } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import Upload from '../../../Assets/bxs_cloud-upload.svg'
import { useNavigate } from "react-router-dom";
import Data from '../../../Data/Data.js';
import uuid from 'react-uuid';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


// const getDatafromLS = () => {
//   const data = localStorage.getItem('challenge');
//   if(data){
//     return JSON.parse(data);
//   }
//   else{
//     return [];
//   }
// }

const CreateChallenge = () => {
  let navigate = useNavigate();
  const [hackathon, setHackathon] = useState(['']);
  const [name, setName] = useState('');
  const [startdate, setStartdate] = useState(dayjs('2022-04-07'));
  const [enddate, setEnddate] = useState(dayjs('2022-04-07'));
  const [desc, setDesc] = useState('');
  const [level, setLevel] = useState('');


  const handlesubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0,8);
    let hack ={
      id:uniqueId,
      status:'Upcoming',
      heading: name,
      time:'Starts in',
      image:img,
      level:level,
      all:'all',
      alottime:(startdate.$d).toString(),
      details:desc
    }
    setHackathon([...hackathon,hack]);
    setName('');
    setStartdate(dayjs());
    setEnddate(dayjs());
    setDesc('');
    setLevel('');
    console.log((startdate.$d).toString())
    localStorage.setItem('challenge', hackathon);
    Data.push(hack);
    navigate('/');
  }

  // useEffect(() => {
  //   localStorage.setItem('challenge', JSON.stringify(hackathon));
  // },[hackathon]);
  
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
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
            value={name}
            onChange={(e) => setName(e.target.value)}          
          />
          </div>


          <label>Start Date</label>
          <div className="txtbox"> 

          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField 
          sx={{
            width:"40vw",
            minWidth:'300px'
        }}
        size="small"
          {...props} />}
        label="Add Start date"
      value={startdate.$d}
      onChange={(e) => setStartdate(e)}

      />
    </LocalizationProvider>

          {/* <TextField
            label="Add Start Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
                minWidth:'300px'
            }}
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
          />
          <img src={Calender}/> */}


          </div>

          <label>End Date</label>
          <div className="txtbox"> 
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField 
          sx={{
            width:"40vw",
            minWidth:'300px'
        }}
        size="small"
          {...props} />}
        label="Add End date"
        value={enddate.$d}
        onChange={(e) => setEnddate(e)}

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
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
          />
          <img  src={Calender}/> */}
          </div>
          <label>Description</label>
          <textarea className="vvv"  value={desc}
            onChange={(e) => setDesc(e.target.value)} ></textarea>
          <label>Image</label>
          <div className="hhhh">
          <img src={img} alt=''/>
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
            <div className="uppp">
              <span>Upload</span>
              <img src={Upload}/>
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
            Create Challenge
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
