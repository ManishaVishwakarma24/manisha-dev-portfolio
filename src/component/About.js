import React from "react";
import { Typography, Box, Paper, styled,Grid } from "@mui/material";
import { logo1,logo2,logo3,logo4,logo5 } from "./assets";
const itemStyle = {
  skillStyle: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    width: "120px",
    objectFit: "cover",
  },
};
const BoxStyle = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "colum",
  justifyContent: "center",
  alignItems: "center",
});
const ImgStyle = styled("img")({
  "@media (min-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  "@media (max-width: 900px)": {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const About = () => {
  return (
    <>
      <BoxStyle
        id="aboutIdBox"
        sx={{
          display: "flex",
          backgroundColor: "#dfcebc7a",
          padding: "20px 0px 20px 0px",
        }}
        className="skill"
      >
        <BoxStyle
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontFamily: "cursive",
              color: "#590924",
              fontSize: "20px",
              padding: "3px",
            }}
          >
            Key Abilities
          </Typography>

          <BoxStyle
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "20px",
              gap: "12px",
            }}
          >
            {[logo1, logo2, logo3, logo4, logo5].map((item) => {
              return (
                <ImgStyle
                  src={item}
                  alt=""
                  style={{ ...itemStyle.skillStyle }}
                  className="grid"
                />
              );
            })}
          </BoxStyle>
        </BoxStyle>

        {/* text skill about */}
        <BoxStyle
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontFamily: "cursive", color: "rgb(100 51 1)" }}
            className="caption"
          >
            Behind the Work
          </Typography>
          <Typography
            variant="p"
            style={{ marginTop: "10px", color: "#5f3f3f" }}
          >
            Hello! I'm Maneesha Vishwakarma, field, e.g., "web developer,"
            "reactjs developer" creating work "user-friendly websites,"
            "visually compelling designs,". <br /> With I am intern, I've worked
            on a variety of projects that blend creativity and technical
            expertise. I specialize in "front-end development," "web-design" ,
            using tools such as [ "React, Html, Css, JavaScript, MUI,Redux "].
          </Typography>
        </BoxStyle>
      </BoxStyle>
    </>
  );
};

export default About;
