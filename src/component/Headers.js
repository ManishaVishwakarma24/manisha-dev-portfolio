import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  headingStyle: {
    fontFamily: "cursive",
    color: "white",
    padding: "20px",
  },
};
const TypographyStyle = styled(Typography)({
  "@media (max-width: 900px)": {
    fontSize: "20px",
  },
});
const BoxStyle = styled(Box)({
  "@media (min-width: 600px)": {
    width: "100%",
  },
  "@media (max-width: 600px)": {
    width: "98%",
  },
  "@media (max-width: 900px)": {
    width: "100%",
  },
  "@media (min-width: 900px)": {
    width: "100%",
  },
});

const page = {
  backStyle: {
    backgroundImage: `linear-gradient(45deg, rgba(139, 69, 19, 0.5), rgba(210, 180, 140, 0.46)),url("https://plus.unsplash.com/premium_photo-1673548917296-e067951dd7de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxhcHRvcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")`,
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },
};
const Headers = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false); 
  };

  return (
    <>
      <AppBar sx={{ width: "100%", position: "static" }}>
        <Toolbar
          sx={{
            backgroundColor: "#b99168",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TypographyStyle className="port" variant="h6" fontFamily="cursive">
            Portfolio
          </TypographyStyle>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", md: "flex", sm: "none", lg: "flex" } }}
          >
            <Button color="inherit" onClick={() => handleScroll("headers")}>
              Headers
            </Button>
            <Button color="inherit" onClick={() => handleScroll("aboutIdBox")}>
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("portfolioIdBox")}
            >
              Portfolio
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("contactIdBox")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List>
          <ListItem button onClick={() => handleScroll("headers")}>
            <ListItemText primary="headers" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("about")}>
            <ListItemText primary="about" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("portfolio")}>
            <ListItemText primary="portfolio" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("contact")}>
            <ListItemText primary="contact" />
          </ListItem>
        </List>
      </Drawer>
      <BoxStyle style={{ ...page.backStyle }}>
        <TypographyStyle variant="h3" style={{ ...style.headingStyle }}>
          Hello! I am <span style={{ color: "#590924" }}>Maneesha</span>
          <TypographyStyle variant="h6" fontSize="20px">
            I'm A React Developer of creating website with fully responsive....
          </TypographyStyle>
          <Button
            endIcon={<ArrowForwardIcon />}
            onClick={() => handleScroll("aboutIdBox")}
            sx={{ fontSize: "19px", color: "#590924", fontFamily: "inherit" }}
          >
            About me
          </Button>
        </TypographyStyle>
      </BoxStyle>
    </>
  );
};

export default Headers;
