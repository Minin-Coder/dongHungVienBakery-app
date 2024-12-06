import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton"; // Fixed Import
import ListItemText from "@mui/material/ListItemText"; // Fixed Import
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
const pages = [
  "Home",
  "Menu",
  "Vegan Menu",
  "Vegan Protein To-Go",
  "Vietnamese Tea Ceremony",
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home"); // Initialize with default active page

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handlePageClick = (page) => {
    setActivePage(page); // Update active page on button click
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(41, 43, 53, .9) !important;",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="a"
          href="#"
          sx={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
            justifyContent: { xs: "left", md: "center" },
          }}
        >
          <img
            src="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2023/01/DHV-Blue-Logo.png"
            alt="Logo"
            style={{ width: "80px" }}
          />
        </Typography>

        {/* Menu for large screens */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              sx={{
                my: 2,
                color: activePage === page ? "#00aae3" : "white",
                display: "block",
                "&:hover": { color: "#bebfc2" },
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Lato, Helvetica, Arial, Lucida, sans-serif;",
                textTransform: "capitalize",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Social Media Icons for large screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2, // Spacing between icons
            flex: "1",
            justifyContent: "center",
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

        {/* Menu Toggle Button for small screens */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for small screens */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "250px",
              backgroundColor: "#121212",
              color: "white",
            },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {pages.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handlePageClick(text)}>
                    <ListItemText
                      primary={text}
                      sx={{
                        textAlign: "center",
                        color: activePage === text ? "#00aae3" : "white",
                        "&:hover": { color: "#bebfc2" },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ backgroundColor: "#444" }} />
            {/* Social Icons in Drawer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 2,
              }}
            >
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
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
