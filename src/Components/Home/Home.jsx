import React from "react";

import Navbar from "./../Navbar/Navbar";
import Card from "../HomeCards/Card";
import Footer from "../Footer/Footer";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0px",
          background: "#141414 !important",
        }}
      >
        <Box sx={{ maxWidth: "1240px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{}}
                  title="BÁNH MÌ"
                  img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/02/dhv-ig-story-banh-mi-0a0f18.png"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  title="PASTRIES/BREAD"
                  img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/02/View-recent-photos-7-1.jpeg"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  title="VIETNAMESE PASTRIES"
                  img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/03/dhv-ig-story-coconut-soft-cake-0b0f14.png"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  title="DRINKS"
                  img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/02/View-recent-photos-6-1.jpeg"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#283341 !important",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "30px",
                    margin: "15px 0px",
                    color: "#fff",
                    fontWeight: "500",
                  }}
                >
                  COME VISIT US
                </Typography>
                <Button
                  sx={{
                    background: "#e0af4a",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#000",
                    padding: { xs: "15px 90px", md: "20px 180px" },
                    marginTop: "30px",
                    textTransform: "capitalize",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
