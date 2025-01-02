import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2c003e", color: "white", py: 4, px: 2 }}>
      <Grid container spacing={4}>
        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "left" }}>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "white", display: "block", mb: 1 }}
          >
            Submit Article
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "white", display: "block", mb: 1 }}
          >
            Blog
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "white", display: "block", mb: 1 }}
          >
            Freebies
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ color: "white", display: "block", mb: 1 }}
          >
            Pricing
          </Link>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "white",
                mr: 1,
              }}
            ></Box>
            (888) 231 4522 258
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "white",
                mr: 1,
              }}
            ></Box>
            3129 Doctors Drive, Los Angeles California, USA
          </Typography>
        </Grid>

        {/* Gallery Showcase Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Gallery Showcase
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box
                key={item}
                sx={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "gray",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  src={`https://via.placeholder.com/60`}
                  alt={`Gallery ${item}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Line */}
      <Box
        sx={{ mt: 4, borderTop: "1px solid gray", pt: 2, textAlign: "center" }}
      >
        <Typography variant="body2" sx={{ color: "gray" }}>
          © 2023 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
