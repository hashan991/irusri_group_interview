import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2c003e",
        color: "white",
        px: 2,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          <Box
            component="img"
            src="/path/to/logo.png" // Replace with your logo path
            alt="Logo"
            sx={{ height: 30 }}
          />
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Home", "About Us", "Agents", "Blog"].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Search Bar and Authentication */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: 1,
              px: 2,
              py: 0.5,
            }}
          >
            <InputBase placeholder="Search" sx={{ color: "white", flex: 1 }} />
            <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Typography variant="body1" sx={{ cursor: "pointer" }}>
            Sign In
          </Typography>
          <Typography variant="body1" sx={{ cursor: "pointer" }}>
            Sign Up
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
