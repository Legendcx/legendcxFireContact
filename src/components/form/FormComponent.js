import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FormComponent = ({info,setInfo,handleSubmit,isAdd}) => {
  const handleChange=(e)=>{
    e.preventDefault();
    // const name=e.target.name;
    // const value=e.target.value; 
    const {name,value}=e.target;
   setInfo({...info,[name]:value})
   console.log(info)
  }
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://www.linkedin.com/in/burhan-yigiter/"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <code>{<LinkedInIcon sx={{fontSize:"2rem", }}/>}</code> */}
            <code>{"Mr.Legendcx "}</code>
          </a>
        </div>
        {/* <span className="design header">design</span> */}
      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "yellow", padding: "20px" }}>
        <form onSubmit={handleSubmit}  style={{ backgroundColor: "#fffec5"}} >
          <Stack spacing={3} direction="column">
            <TextField
           
            required
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
            required
            // className={{backgroundColor: "#fffec5"}}
              variant="outlined"
              name="phoneNumber"
              value={info.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, bgcolor:"#fffec5" }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
              required
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
            {isAdd}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;