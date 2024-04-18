import React from "react";
import Box from "@mui/material/Box";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import vector from "../assets/Vector.png";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import Carla from "../assets/Carla.png";

const Sidebar = () => {
  const data = [
    {
      name: "Software Engineer",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    {
      name: "Computer Hardware Engineer",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    {
      name: "Network Engineer",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    {
      name: "Technical Support",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    {
      name: "Network administrator",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    { name: "Management", logo: <StarBorderIcon sx={{ color: "yellow" }} /> },
    {
      name: "Data analysis",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    {
      name: "Computer technician",
      logo: <StarBorderIcon sx={{ color: "yellow" }} />,
    },
    { name: "Past search 1 ", logo: <AccessTimeIcon /> },
    { name: "Past search 2 ", logo: <AccessTimeIcon /> },
    { name: "Computers and information... ", logo: <AccessTimeIcon /> },
    { name: "Database Administrator ", logo: <AccessTimeIcon /> },
    { name: "Computer System Analyst", logo: <AccessTimeIcon /> },
    { name: "My Boards ", logo: <BorderAllIcon sx /> },
    { name: "Board 1", logo: <AssignmentIcon /> },
    { name: "Board 2", logo: <AssignmentIcon /> },
    { name: "Board 3", logo: <AssignmentIcon /> },
    { name: "Board Agent 1 ", logo: <LockIcon /> },
    { name: "Board Agent 2 ", logo: <LockIcon /> },
    { name: "Board Agent 3 ", logo: <LockIcon /> },
  ];

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box className="div2">
          <Box>
            <PostAddIcon />
          </Box>
          <Box>
            <Typography fontWeight={550}>My Templates</Typography>
          </Box>
        </Box>
        <Box className="search-content">
          <Box>
            <SearchIcon />
          </Box>
          <Box>
            <Typography className="search-typography" fontWeight={550}>
              Search
            </Typography>
          </Box>
        </Box>

        {data.map(({ name, logo }, index) => {
          return (
            <>
              <Box Box className="star-content">
                <Box>{logo}</Box>
                <Box key={index}>{name}</Box>
              </Box>
            </>
          );
        })}
        <hr />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", paddingLeft: "10px" }}>
            {" "}
            <img src={Carla} alt="loading..." />
            <Typography>Carla</Typography>
          </Box>
          <Box>
            <SettingsIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
