import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2c003e", color: "white", py: 8, px: 4 }}>
      <Grid container spacing={4}>
        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Box>
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
            <Typography
              variant="body2"
              sx={{ color: "gray", fontSize: "0.9rem" }}
            >
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
          {["Submit Article", "Blog", "Freebies", "Pricing"].map(
            (link, index) => (
              <Link
                href="#"
                underline="hover"
                sx={{
                  color: "white",
                  display: "block",
                  mb: 1,
                  fontSize: "0.9rem",
                }}
                key={index}
              >
                {link}
              </Link>
            )
          )}
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "white",
                mr: 1,
              }}
            />
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
            />
            3129 Doctors Drive, Los Angeles California, USA
          </Typography>
        </Grid>

        {/* Gallery Showcase Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Gallery Showcase
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: "80px",
                    borderRadius: 1,
                    overflow: "hidden",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={`https://via.placeholder.com/150?text=Image+${item}`}
                    alt={`Gallery ${item}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom Line */}
      <Box
        sx={{
          mt: 4,
          borderTop: "1px solid gray",
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "gray" }}>
          © 2023 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
