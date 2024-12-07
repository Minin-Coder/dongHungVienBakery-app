import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#d6a447", // Button background color
  color: "#000",
  fontWeight: "bold",
  marginTop: "30px",
  padding: "10px 30px",
  textTransform: "none",
  borderRadius: 0,
  position: "relative",
  overflow: "hidden",
  transition: "background-color 0.3s ease",

  // Change hover background
  "&:hover": {
    backgroundColor: "#c3923b",
  },

  // Style for the icon animation
  "& .chevron-icon": {
    position: "absolute",
    right: "30px", // Icon starts off-screen to the right
    opacity: 0,
    transition: "all 0.5s ease",
  },

  // Hover effect animates icon from left-to-right
  "&:hover .chevron-icon": {
    right: "0px", // Moves smoothly into view on hover
    opacity: 1,
  },
}));

function ProductCard(props) {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          paddingBottom: "50px",
          paddingTop: "50px",
          backgroundColor: "#0f0f0f !important",
          color: "#fff",
          minHeight: "100vh",
          fontFamily: "Open Sans, Arial, sans-serif",
        }}
      >
        {/* Image Section */}
        <Box sx={{ maxWidth: "1240px", width: "82%", margin: "0 auto" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "end" },
                }}
              >
                <Box
                  component="img"
                  src={props.cardImg}
                  alt="Vegan Protein To-Go Box"
                  sx={{
                    width: "90%",
                    marginTop: 9,
                  }}
                />
              </Box>
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  padding: 2,
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: "bold", marginBottom: 2, fontSize: "35px" }}
                >
                  {props.titleHead}
                </Typography>

                <Typography
                  variant="p"
                  component="p"
                  fontSize={15}
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    marginTop: 3,
                    fontSize: "16px",
                  }}
                >
                  {props.detailHead}
                </Typography>

                <Box
                  sx={{ borderBottom: "1px solid #fff", marginTop: 4 }}
                ></Box>

                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 3,
                    lineHeight: 1.6,
                    marginTop: 4,
                  }}
                >
                  {props.detailBody}
                </Typography>

                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 2, fontSize: "18px" }}
                  >
                    {props.detailSubHead1}
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData1}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData2}
                      </Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    {props.detailSubHead2}
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData3}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData4}
                      </Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    {props.detailSubHead3}
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData5}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData6}
                      </Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    {props.detailSubHead4}
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData7}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" sx={{ fontSize: "16px" }}>
                        {props.listData8}
                      </Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="p"
                    component="p"
                    fontSize={15}
                    sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 3 }}
                  >
                    {props.detailBody2}
                  </Typography>
                  <Box
                    sx={{ borderBottom: "1px solid #fff", marginTop: 4 }}
                  ></Box>
                  <StyledButton sx={{ fontSize: "16px" }}>
                    {props.ProductCardBtn}
                    <ChevronRightIcon className="chevron-icon" />
                  </StyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ProductCard;
