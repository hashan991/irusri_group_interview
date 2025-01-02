import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const steps = [
  { id: 1, title: "Search Flights" },
  { id: 2, title: "Fill Contact Form" },
  { id: 3, title: "Choose Your Airline" },
  { id: 4, title: "Booking in 10 Minutes!" },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 15, px: 9, backgroundColor: "#f9f9f9", pt: 40 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          mb: 2,
          color: "#333",
        }}
      >
        How it Works
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "gray",
          textAlign: "left",
          mb: 6,
        }}
      >
        These are the simple procedures that will make your purchasing process
        super easy <br />
        and smooth. And will help you to get your flight easily.
      </Typography>

      <Grid container spacing={4} alignItems="center">
       
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", height: "100%" }}>
            {steps.map((step, index) => (
              <Box
                key={step.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  mb: index === steps.length - 1 ? 0 : 6,
                  ml: 8,
                }}
              >
               
                <Typography
                  variant="h1"
                  sx={{
                    position: "absolute",
                    fontSize: "6rem",
                    color: "rgba(0, 0, 0, 0.1)",
                    fontWeight: "bold",
                    left: "-30px",
                    zIndex: 0,
                  }}
                >
                  {step.id}
                </Typography>

               
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    zIndex: 1,
                  }}
                ></Box>

               
                <Typography
                  variant="h6"
                  sx={{
                    ml: 3,
                    fontWeight: "bold",
                    color: "#C2175B",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ))}

           
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "20px",
                width: "2px",
                height: "calc(100%)",
                borderLeft: "2px dashed #C2175B",
                ml: -1,
              }}
            >
             
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "-8px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#C2175B",
                  borderRadius: "50%",
                  mt: -2,
                }}
              />

              
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "-8px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#C2175B",
                  borderRadius: "50%",
                  mt: -6,
                }}
              />

             
              <Box
                sx={{
                  position: "absolute",
                  top: "90%",
                  left: "-8px",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#C2175B",
                  borderRadius: "50%",
                  mt: -11,
                }}
              />

              {/* Plane Icon */}
              <AirplanemodeActiveIcon
                sx={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-10px",
                  color: "#C2175B",
                  fontSize: 24,
                }}
              />
            </Box>
          </Box>
        </Grid>

       
        {/* Video Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
           
            <video
              src={require("../../assets/images/video1.mp4")} 
              controls
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              Your browser does not support the video tag.
            </video>

            {/* Optional Play Button Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <PlayArrowIcon sx={{ color: "white", fontSize: 36 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
