import React from "react";
import Box from "@mui/material/Box";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      className="Header-main"
    >
      <Box className="bag-circle">
        <Box className="icon-bag">
          <ShoppingBagIcon className="bag" />
        </Box>
      </Box>
      <Box>
        <Box className="Pemiun-Account-main">
          <Typography sx={{ color: "white" }} className="Premium-content">
            Premium Account
          </Typography>
        </Box>
        <Box className="premiun-desc" sx={{ width: "76%" }}>
          <Typography sx={{ fontSize: "12px" }}>
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilegde, you
            can indulge in the freedom of downloading of an unlimited number of
            of resumes and cover letters in both PDF and Word formats.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
