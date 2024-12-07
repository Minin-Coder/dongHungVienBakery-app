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

function ProductCard() {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "#000",
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
                component="img"
                src="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/07/DHV-Landing-Page-Thumbnail-Vegan-Protein-To-Go-Box-800-x-800-px.png"
                alt="Vegan Protein To-Go Box"
                sx={{
                  width: "100%",
                  marginTop: 9,
                }}
              />
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
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  VEGAN PROTEIN TO-GO
                </Typography>

                <Typography
                  variant="p"
                  component="p"
                  fontSize={15}
                  sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 3 }}
                >
                  Customize your meals at home with our vegan ingredients.
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
                  Your favorite vegan proteins are now available in convenient
                  To-Go boxes for purchase, allowing you to create any meal you
                  desire in the comfort of your home. Fully prepared & ready to
                  be added to your favorite recipes. Options include:
                </Typography>

                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 2, fontSize: "18px" }}
                  >
                    Vegan Grilled Pork or Chicken:
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2">8oz – $12</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">1lb – $24</Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    Vegan Lemongrass Beef:
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2">8oz – $15</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">1lb – $30</Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    Vegan Meatloaf (Roll):
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2">1lb – $12</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">2lb – $23</Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 4, fontSize: "18px" }}
                  >
                    Vegan Pâté:
                  </Typography>
                  <ul style={{ margin: 12, paddingLeft: "20px" }}>
                    <li>
                      <Typography variant="body2">8oz – $12.50</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">1lb – $25</Typography>
                    </li>
                  </ul>
                  <Typography
                    variant="p"
                    component="p"
                    fontSize={15}
                    sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 3 }}
                  >
                    Perfect for sandwiches, salads, bowls or other creative
                    dishes.
                  </Typography>
                  <Box
                    sx={{ borderBottom: "1px solid #fff", marginTop: 4 }}
                  ></Box>
                  <StyledButton>
                    View All Vegan Bánh Mì
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
