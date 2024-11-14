import React from 'react'
import {Typography,Chip,Grid}from '@mui/material'
import { img1,img2,img3,img4,img5,img6 } from './assets';



const Portfolio = () => {

  const projects = [
    { projectImage: img1, skills: ["Html","CSS","React js", "JavaScript"], des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.' },
    { projectImage: img2, skills: ["Html","CSS","React js", "JavaScript"], des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.' },
    { projectImage: img3, skills: ["Html","CSS","React js", "JavaScript"], des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.' },
    { projectImage: img4, skills: ["Html","CSS","React js", "JavaScript"], des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.' },
    { projectImage: img5, skills: ["Html","CSS","React js", "JavaScript"], des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.' },
    { projectImage: img6, skills: ["Html","CSS","React js", "JavaScript"], des: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.'},
  ];


  return (
    <>
    <Typography  id="portfolioIdBox" variant='h4' style={{fontFamily:"cursive", display:"flex",justifyContent:"center",alignItems:"center" ,color:"#5f3f3f",padding:"20px"}}>Creative Projects</Typography>
       {projects.map((item, index) => (
    <Grid container style={{marginBottom:"20px"}} key={index}>
          <Grid item xs={12}>

            <Typography variant="h6" style={{ marginBottom: "10px" ,color:"rgb(100 51 1)",fontFamily:"cursive"}}>
              Projects:
            </Typography>

          </Grid>
<Grid item md={6} sm={12} xs={12} lg={6} style={{backgroundColor:"#a0875438", padding:"20px",color:"rgb(95 63 63)"}}>
{item.des}
<br />
{
  item?.skills.map((skills,skillIndex)=>{
   return <Chip label={skills} color="primary" variant="outlined" key={skillIndex}  style={{backgroundColor:"rgb(100 51 1)",color:"white",
      margin:"20px"
   }} />
  })}
</Grid>

<Grid item md={6} sm={12} xs={12} lg={6} >
<img src={item.projectImage} style={{width:"100%",height:"300px"}} alt={`Project ${index + 1}`} /> 
  </Grid>
</Grid>
  ))}   
    </>
  );
}

export default Portfolio
