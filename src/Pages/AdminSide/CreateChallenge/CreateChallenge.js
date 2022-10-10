import React from "react";
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
import { Icon } from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import Upload from '../../../Assets/bxs_cloud-upload.svg'
const CreateChallenge = () => {
  
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
            defaultValue=""
            size="small"
            sx={{
              width:"40vw",
              minWidth:'300px'
            }
          }
          />
          </div>
          <label>Start Date</label>
          <div className="txtbox"> 
          <TextField
            label="Add Start Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
                minWidth:'300px'
            }}
          />
          <img src={Calender}/>
          </div>

          <label>End Date</label>
          <div className="txtbox"> 
          <TextField
            label="Add End Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
                minWidth:'300px'

            }}

          />
            <img src={Calender}/>
          </div>
          <label>Description</label>
          <textarea className="vvv"></textarea>
          <label>Image</label>
          <div className="imgupload">
            <div className="upp">
              <span>Upload</span>
              <img src={Upload}/>
            </div>
            <div className="outuplaod">
            <input
              className="upload"
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
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
              >
                <MenuItem value='Easy'>Easy</MenuItem>
                <MenuItem value='Medium'>Medium</MenuItem>
                <MenuItem value='Hard'>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className="btnnn">
          <Button variant="contained" color="success">
            Create Challenge
          </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
