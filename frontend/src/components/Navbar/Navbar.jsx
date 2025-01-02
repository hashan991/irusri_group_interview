import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background
        color: "white",
        px: 2,
        boxShadow: "none", // Remove default AppBar shadow
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-between",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <>
            {/* Mobile: Menu Button on the Left */}
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: "white", mr: "auto" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Centered Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                mx: "auto",
              }}
            >
              <Box
                component="img"
                src="/path/to/logo.png" // Replace with your logo path
                alt="Logo"
                sx={{ height: 30 }}
              />
            </Typography>
          </>
        ) : (
          // Desktop: Logo + Navigation
          <>
            {/* Left Section: Logo + Buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                <Box
                  component="img"
                  src="/path/to/logo.png" // Replace with your logo path
                  alt="Logo"
                  sx={{ height: 30 }}
                />
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {["Home", "About Us", "Agents", "Blog"].map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "white",
                      textTransform: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Right Section: Search + Authentication */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Search Bar */}
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
                <InputBase
                  placeholder="Search"
                  sx={{ color: "white", flex: 1 }}
                />
                <IconButton sx={{ color: "white" }}>
                  <SearchIcon />
                </IconButton>
              </Box>

              {/* Authentication Links */}
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography variant="body1" sx={{ cursor: "pointer" }}>
                  Sign In
                </Typography>
                <Typography variant="body1" sx={{ cursor: "pointer" }}>
                  Sign Up
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            backgroundColor: "#2c003e",
            color: "white",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {["Home", "About Us", "Agents", "Blog", "Sign In", "Sign Up"].map(
              (item) => (
                <ListItem button key={item}>
                  <ListItemText
                    primary={item}
                    sx={{
                      color: "white",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
