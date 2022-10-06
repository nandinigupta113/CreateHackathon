import React from "react";
import "./CreateChallenge.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Navbar from "../../../Components/Navbar/Navbar.js";
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
          <TextField
            label="Challenge Name"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
              width:"40vw",
            }}
          />
          <label>Start Date</label>
          <TextField
            label="Add Start Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
            }}
          />
          <label>End Date</label>
          <TextField
            label="Add End Date"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            sx={{
                width:"40vw",
            }}
          />
          <label>Description</label>
          <textarea className="vvv"></textarea>
          <label>Image</label>
          <div>
            <input
              className="upload"
              type="file"
              id="img"
              name="img"
              accept="image/*"
            />
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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
