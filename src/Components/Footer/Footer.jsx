import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0px",
          background: "#292b35 !important",
        }}
      >
        <Box sx={{ maxWidth: "1240px", width: "90%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    lineHeight: "1.8rem",
                    marginTop: "10px",
                  }}
                >
                  8536 Westminster Blvd,
                  <br />
                  Westminster CA 92683
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  Phone Number
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    lineHeight: "1.8rem",
                    marginTop: "10px",
                  }}
                >
                  <a
                    href="tel:7148914404"
                    style={{ textDecoration: "none", color: "#2ea3f2" }}
                  >
                    (714) 891-4404
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  Follow
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    gap: 2, // Spacing between icons
                    flex: "1",
                    justifyContent: "left",
                    marginTop: "10px",
                  }}
                >
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "white", // White circular background
                        color: "#00aae3", // Blue icon color
                        "&:hover": {
                          backgroundColor: "#f1f1f1", // Light grey on hover
                        },
                        width: 32, // Set circular size
                        height: 32, // Set circular size
                      }}
                    >
                      <FacebookOutlinedIcon />
                    </IconButton>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "white",
                        color: "#00aae3",
                        "&:hover": {
                          backgroundColor: "#f1f1f1",
                        },
                        width: 32,
                        height: 32,
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "white",
                        color: "#00aae3",
                        "&:hover": {
                          backgroundColor: "#f1f1f1",
                        },
                        width: 32,
                        height: 32,
                      }}
                    >
                      <img
                        width={"18px"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6S5muHqrLpZea8ipflxgXUxi33lChzyu_KW07KE_vqcPChe0qENUlFSA3xDyH9vUCYBs&usqp=CAU"
                        alt="tiktok"
                      />
                    </IconButton>
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  About Us
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  }}
                >
                  Contact
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0px",
          background: "#1c1d26 !important",
        }}
      >
        <Box sx={{ maxWidth: "1240px", width: "90%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  padding: "0px 10px",
                  paddingBottom: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  © 2024 Đông Hưng Viên Bakery – All Rights Reserved. Design by
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
