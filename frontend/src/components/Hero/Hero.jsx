import React, { useState } from "react";
import pngwing4 from "../../assets/images/rrr.jpg";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const Hero = () => {
  const [passengers, setPassengers] = useState(1); // State for passenger count
  const [tripType, setTripType] = useState("one-way"); // State for trip type
  const [classType, setClassType] = useState("business"); // State for class type

  const handlePassengerChange = (event) => {
    setPassengers(event.target.value);
  };

  const handleTripTypeChange = (event, newTripType) => {
    if (newTripType !== null) {
      setTripType(newTripType);
    }
  };

  const handleClassTypeChange = (event, newClassType) => {
    if (newClassType !== null) {
      setClassType(newClassType);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${pngwing4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 1, md: 1 }, // Adjust padding for mobile and desktop
        px: 1,
      }}
    >
      {/* Hero Text */}
      <Box sx={{ mb: 6, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem" }, // Adjust font size for responsiveness
            lineHeight: 1.3,
            mb: 2,
            mt: 10,
            mb: 1,
          }}
        >
          Explore the World Together <br />
          with Premium Travel
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" }, // Adjust font size for responsiveness
            mb: 4,
            color: "rgba(255, 255, 255, 0.8)",
            mb: -8,
          }}
        >
          Get up to 50% Discount
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C2175B",
            color: "white",
            px: 4,
            py: 1,
            fontWeight: "bold",
            borderRadius: 2,
            textTransform: "none",
            fontSize: "1rem",
            mb: -20,
          }}
        >
          Book Now
        </Button>
      </Box>

      {/* Search Form */}
      <Box
        sx={{
          position: "relative",
          // backgroundColor: "white",
          // borderRadius: 2,
          //boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          //p: { xs: 2, md: 3 }, // Adjust padding for mobile and desktop
          // maxWidth: "1000px",
          //mx: "auto",
          bottom: "-100px",
        }}
      >
        {/* Class Type Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            //mb: 3, // Adjust spacing between buttons and the search form
          }}
        >
          <Button
            variant={classType === "business" ? "contained" : "outlined"}
            onClick={() => setClassType("business")}
            sx={{
              px: 4,
              fontWeight: "bold",
              borderRadius: 0,
              backgroundColor:
                classType === "business" ? "#C2175B" : "transparent",
              color: classType === "business" ? "white" : "gray",
              borderColor: "#C2175B",
              textTransform: "none",
              "&:hover": {
                backgroundColor:
                  classType === "business" ? "#C2175B" : "transparent",
                borderColor: "#C2175B",
              },
            }}
          >
            Business Class
          </Button>
          <Button
            variant={classType === "first" ? "contained" : "outlined"}
            onClick={() => setClassType("first")}
            sx={{
              px: 4,
              fontWeight: "bold",
              borderRadius: 0,
              backgroundColor:
                classType === "first" ? "#C2175B" : "transparent",
              color: classType === "first" ? "white" : "gray",
              borderColor: "#C2175B",
              textTransform: "none",
              "&:hover": {
                backgroundColor:
                  classType === "first" ? "#C2175B" : "transparent",
                borderColor: "#C2175B",
              },
            }}
          >
            First Class
          </Button>
        </Box>
        <Box
          sx={{
            // position: "relative",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            p: { xs: 2, md: 3 }, // Adjust padding for mobile and desktop
            maxWidth: "1000px",
            mx: "auto",
            bottom: "-100px",
          }}
        >
          {/* Trip Type Buttons */}
          <Box
            sx={{
              mb: 2,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <ToggleButtonGroup
              value={tripType}
              exclusive
              onChange={handleTripTypeChange}
            >
              <ToggleButton
                value="one-way"
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 2,
                  color: tripType === "one-way" ? "#C2175B" : "gray",
                  backgroundColor: tripType === "one-way" ? "#f9f9f9" : "white",
                  "&.Mui-selected": {
                    backgroundColor: "#C2175B",
                    color: "white",
                  },
                }}
              >
                One Way
              </ToggleButton>
              <ToggleButton
                value="round-trip"
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 2,
                  color: tripType === "round-trip" ? "#C2175B" : "gray",
                  backgroundColor:
                    tripType === "round-trip" ? "#f9f9f9" : "white",
                  "&.Mui-selected": {
                    backgroundColor: "#C2175B",
                    color: "white",
                  },
                }}
              >
                Round Trip
              </ToggleButton>
              <ToggleButton
                value="multicity"
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 2,
                  color: tripType === "multicity" ? "#C2175B" : "gray",
                  backgroundColor:
                    tripType === "multicity" ? "#f9f9f9" : "white",
                  "&.Mui-selected": {
                    backgroundColor: "#C2175B",
                    color: "white",
                  },
                }}
              >
                Multicity
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Input Fields */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Departure City"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.9rem" },
                  "& .MuiInputLabel-root": { fontSize: "0.9rem" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Arrival City"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.9rem" },
                  "& .MuiInputLabel-root": { fontSize: "0.9rem" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                type="date"
                label="Departure Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.9rem" },
                  "& .MuiInputLabel-root": { fontSize: "0.9rem" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                type="date"
                label="Arrival Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.9rem" },
                  "& .MuiInputLabel-root": { fontSize: "0.9rem" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                label="Passengers"
                value={passengers}
                onChange={handlePassengerChange}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": { fontSize: "0.9rem" },
                  "& .MuiInputLabel-root": { fontSize: "0.9rem" },
                }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num} {num > 1 ? "Passengers" : "Passenger"}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          {/* Search Button */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C2175B",
                color: "white",
                py: 1,
                px: 4,
              }}
            >
              Search Flight
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;