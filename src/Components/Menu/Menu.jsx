import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Grid, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import MenuCard from "./../MenuCards/MenuCards";

function Menu() {
  return (
    <>
      <Navbar />
      <Box sx={{ background: "#000 !important" }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                lineHeight: 2,
                textAlign: "center",
                px: 2,
                pt: 4,
                color: "#fff",
                fontWeight: 700,
                fontSize: "35px",
                fontFamily: "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Menu
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: "333px !important",
                    width: "100%",
                    background: "#fff",
                    borderRadius: "0px",
                    margin: "5px 0px !important",
                  }}
                >
                  <CardActionArea>
                    <CardContent sx={{ padding: "0px", textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "15px 0px",
                          py: 6,
                        }}
                      >
                        BÁNH MÌ SANDWICHES
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: "333px !important",
                    width: "100%",
                    background: "#e0af4a",
                    borderRadius: "0px",
                    margin: "5px 0px !important",
                  }}
                >
                  <CardActionArea>
                    <CardContent sx={{ padding: "0px", textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "15px 0px",
                          py: 6,
                        }}
                      >
                        PASTRIES/BREAD
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: "333px !important",
                    width: "100%",
                    background: "#f87223",
                    borderRadius: "0px",
                    margin: "5px 0px !important",
                  }}
                >
                  <CardActionArea>
                    <CardContent sx={{ padding: "0px", textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "15px 0px",
                          py: 6,
                        }}
                      >
                        Vietnamese Pastries
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    maxWidth: "333px !important",
                    width: "100%",
                    background: "#283341",
                    borderRadius: "0px",
                    margin: "5px 0px !important",
                  }}
                >
                  <CardActionArea>
                    <CardContent sx={{ padding: "0px", textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                          margin: "15px 0px",
                          py: 6,
                          color: "#fff",
                        }}
                      >
                        DRINKS
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    lineHeight: "1.2em",
                    px: 2,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily:
                      "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                    textTransform: "uppercase",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "left",
                    },
                  }}
                >
                  BÁNH MÌ <br /> SANDWICHES
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Box>
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-1_-1.jpg"
                      title="Cold Cut Ham"
                      subTitle="Thịt Nguội"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-2-1.jpg"
                      title="Shredded Chicken"
                      subTitle="Gà Jambon"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-3-1.jpg"
                      title="Pate Pork Meat Loaf"
                      subTitle="Pâté Chả Luạ"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-4.jpg"
                      title="Grilled Pork"
                      subTitle="Thịt Nướng"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-5.jpg"
                      title="Grilled Chicken"
                      subTitle="Gà Nướng"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-8.jpg"
                      title="Special Combination"
                      subTitle="Đặc Biệt"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-11-2.jpg"
                      title="Shredded Pork Skin"
                      subTitle="Bì"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-9.jpg"
                      title="Fried Egg"
                      subTitle="Trứng Ốp La"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-7.jpg"
                      title="Grilled Beef"
                      subTitle="Bò Nướng "
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-17.jpg"
                      title="Vegan Pork Meatballs"
                      subTitle="Xiú Mại Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/15.jpg"
                      title="Vegan Pork Meat Loaf"
                      subTitle="Pâté Chả Luạ Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-14-a-e1677959233609.jpg"
                      title="Vegan Grilled Chicken"
                      subTitle="Gà Nướng Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Tofu_Number-19.jpg"
                      title="Vegan Grilled Pork"
                      subTitle="THỊT Nướng Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Attachment_1639492834.jpg"
                      title="Vegan Special Combo"
                      subTitle="Đặc Biệt Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/12/Number-18.jpg"
                      title="Vegan Shredded Pork"
                      subTitle="BÌ CHAY"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/12/dhv-vegan-lemongrass-steak-e1702076854520.png"
                      title="Vegan LEMONGRASS STEAK"
                      subTitle="TBÍT TẾT Chay"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/11/DHV-Landing-Page-Content-Image-Vegan-Fried-Chicken-1080x718-1.webp"
                      title="VEGAN FRIED CHICKEN"
                      subTitle="GÀ CHIÊN CHAY"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box sx={{ borderTop: "1px solid #fff" }}></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    lineHeight: "1.2em",
                    px: 2,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily:
                      "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                    textTransform: "uppercase",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "left",
                    },
                  }}
                >
                  PASTRIES/
                  <br /> BREAD
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Box>
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2022/12/DongHungVien-8-scaled.webp"
                      title="Croissant"
                      subTitle="Plain, Almond, Vegan, Ham & Cheese"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/08/dhv-website-vegan-coconut-croissant.png"
                      title="Coconut Croissant"
                      subTitle="*Limited vegan coconut croissants made daily."
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/11/vegan-ham-and-cheese-croissant.jpeg"
                      title="Vegan Ham & Cheese Croissant"
                      subTitle="*Limited released daily."
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/02/View-recent-photos-7-e1708460308715.jpeg"
                      title="Vegan Almond Croissant"
                      subTitle="*Limited Released Daily."
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/05/p3-420x400-2.jpg"
                      title="Milk bread with coconut and raisins"
                      subTitle="Bánh Mì Sữa Dừa và Nho"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2021/05/Sponge-Cake-scaled-345x230-1.jpg"
                      title="Sponge cake"
                      subTitle="Bánh Bông Lan"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/11/DHV-Landing-Page-Content-Image-Vegan-Beef-Pate-Chaud-800x800-2.png"
                      title="VEGAN BEEF PÂTÉ CHAUD"
                      subTitle="(PUFF PASTRY)"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box sx={{ borderTop: "1px solid #fff" }}></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    lineHeight: "1.2em",
                    px: 2,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily:
                      "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                    textTransform: "uppercase",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "left",
                    },
                  }}
                >
                  Vietnamese <br /> Pastries
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Box>
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/01/IMG_5453-jpg.webp"
                      title="Vietnamese Baguette"
                      subTitle="Bánh Mì Baguette"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/04/DongHungVien-17-scaled-e1680563254360.jpg"
                      title="Vietnamese Steamed Bun"
                      subTitle="Pork, Vegan"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2022/11/Patechaud_1.2-jpg.webp"
                      title="Vietnamese Puff Pastry"
                      subTitle="Pork, Chicken, Vegan"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/04/IMG_9EDA19045FE8-1-e1713920150646.jpeg"
                      title="Vegan Ham & Cheese puff pastry"
                      subTitle="pâté chaud ham & cheese"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/08/dhv-website-coconut-cassava.png"
                      title="Coconut Cassava"
                      subTitle="Bánh Khoai Mì"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/08/dhv-website-xoi-.png"
                      title="Vietnamese sticky rice "
                      subTitle="xôi"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/07/DongHungVien-BanhBo-2-jpg-e1696622944254.jpg"
                      title="Pandan Honeycomb Cake"
                      subTitle="Bánh Bò Nướng"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/10/DHV_Q1_3-26_201-scaled-e1696623359521.jpg"
                      title="Steamed Layered Cake"
                      subTitle="Pandan, Taro"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/08/dhv-website-vegan-empanada.png"
                      title="Vietnamese Empanada "
                      subTitle="Bánh Quai Vạc"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/04/DongHungVien-122-scaled-e1680563829732.jpg"
                      title="Soft Mini Buns"
                      subTitle="Coconut, Taro, Mung Bean, Durian"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/08/dhv-website-xoi-vi.png"
                      title="Pandan Sticky Rice with Mung Bean"
                      subTitle="Xôi Vị"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <MenuCard
                      img="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/04/TR51893-scaled-e1680563525207.jpg"
                      title="Vietnamese Steamed Rice Cakes"
                      subTitle="Bánh Bò Hấp"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box sx={{ borderTop: "1px solid #fff" }}></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#000",
          py: 10,
        }}
      >
        <Box sx={{ maxWidth: "1080px", width: "90%" }}>
          <Grid container spacing={0}>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    lineHeight: "1.2em",
                    px: 2,
                    pt: 1,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily:
                      "Montserrat, Helvetica, Arial, Lucida, sans-serif",
                    textTransform: "uppercase",
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "left",
                    },
                  }}
                >
                  Drinks
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Box>
                <Grid container spacing={4}>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    sx={{
                      display: "flex;",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          margin: "10px 0px",
                          color: "#fff",
                          textTransform: "uppercase",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Vietnamese Iced Coffee
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#e0af4a",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Cà Phê Sữa Đá
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          margin: "10px 0px",
                          color: "#fff",
                          textTransform: "uppercase",
                          lineHeight: "1.7em",
                          pt: 2,
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Chè (Herbal Desserts)
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#e0af4a",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Dưỡng Nhan, Sâm Bổ Lượng
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          margin: "10px 0px",
                          color: "#fff",
                          textTransform: "uppercase",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        VEGAN Vietnamese Coffee
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#e0af4a",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Cà Phê Sữa Đá (VEGAN)
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    sx={{ display: "flex;", justifyContent: "center" }}
                  >
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          margin: "10px 0px",
                          color: "#fff",
                          textTransform: "uppercase",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Pandan & Mung Bean
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "#e0af4a",
                          lineHeight: "1.7em",
                          textAlign: { xs: "center", sm: "center", md: "left" },
                        }}
                      >
                        Đậu Xanh Lá Dứa
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default Menu;
