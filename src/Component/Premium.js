import React, { useState } from "react";
import Box from "@mui/material/Box";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Ellipse from "../assets/Ellipse.png";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Premium = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    City: "",
    PostalCode: "",
    Address: "",
    Email: "",
    Password: "",
    Phone: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const local = JSON.stringify(formData);
    localStorage.setItem("formData", local);
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "80%" }}>
        {/* <Sidebar /> */}

        <Box
          sx={{
            // width: "800px",
            margin: "0 5rem",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Header />

          <Box className="form-content">
            <Typography className="personal-content">
              Personal Information
            </Typography>
          </Box>
          <Box className="form-and-image">
            <Box className="form-container">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "640px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <Box className="first-and-last">
                  <TextField
                    name="FirstName"
                    label="First Name"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData?.FirstName}
                    onChange={handleForm}
                  />
                  <TextField
                    name="LastName"
                    label="Last Name"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData.LastName}
                    onChange={handleForm}
                  />
                </Box>
                <Box className="first-and-last">
                  <TextField
                    label="city"
                    name="City"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData.City}
                    onChange={handleForm}
                  />
                  <TextField
                    label="Postal Code"
                    name="PostalCode"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData.PostalCode}
                    onChange={handleForm}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Address"
                    id="outlined-start-adornment"
                    className="firstname"
                    name="Address"
                    value={formData.Address}
                    onChange={handleForm}
                  />
                </Box>

                <Box className="first-and-last">
                  <TextField
                    label="Email"
                    id="outlined-start-adornment"
                    className="firstname"
                    name="Email"
                    value={formData.Email}
                    onChange={handleForm}
                  />
                  <TextField
                    label="Phone"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData.Phone}
                    name="Phone"
                    onChange={handleForm}
                  />
                </Box>
                <Box>
                  <TextField
                    label="Password"
                    id="outlined-start-adornment"
                    className="firstname"
                    value={formData.Password}
                    name="Password"
                    onChange={handleForm}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="ellipse-image">
              <img src={Ellipse} alt="2" />
            </Box>
          </Box>
          <Box className="use-this-email">
            <Typography>
              Use this mail to login to your{" "}
              <span className="resumesdone">hirethebest.io</span> account and
              receice notifications.
            </Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            className="save-btn"
            onClick={handleSubmit}
          >
            Save
          </Button>

          <Box className="checkbox-delete-content">
            <Box className="checkbox-and-desc">
              <Checkbox
                className="checkbox"
                inputProps={{ "aria-label": "controlled" }}
              />

              <Typography>
                Show my profile to serious employees on {""}
                <span className="resumesdone">hirethebest.io</span> for free
              </Typography>
            </Box>

            <Box className="delete-content">
              <Box>
                <Typography className="delete-account" fontWeight={700}>
                  Delete account
                </Typography>

                <Typography className="delete-desc1">
                  If you delete your account you 'll be permanently removing it
                  from our system- you can't do it .
                </Typography>
              </Box>
              <Box className="delete-desc2">
                <Button variant="contained" disableElevation>
                  Yes, Delete my account
                </Button>
                {/* <Typography className="delete-desc2">
                  Yes, Delete my account
                </Typography> */}
              </Box>
            </Box>
          </Box>
          <Box className="get-in-touch-content">
            <Box className="flex">
              <Typography className="get-in-touch">
                Get in touch with our support team {"  "}
              </Typography>
              <Typography className="text-color">
                if you have any question or want or want to leave some feedback.
              </Typography>
            </Box>

            <Typography className="text-color">
              We 'll be happy to hear from you
            </Typography>

            <hr className="hr" />
            <Box className="footer">
              <Typography>Terms&Conditions</Typography>
              <Typography>Privacy Policy</Typography>
              <Typography>FAQ</Typography>
              <Typography>Contact Us</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Premium;
