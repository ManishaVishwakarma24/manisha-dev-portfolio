import React from 'react'
import {Box,Typography,Button, styled} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const style={
  Style:{
    display:"flex", 
    justifyContent:"start" ,
    alignItems:"center",  
     padding:"20px",
  }
}
const primaryColor = 'rgb(100 51 1)';
const iconColor = '#757575';
const Contact = () => {

  
 
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'My Resume.pdf'; 
    link.download = 'My Resume.pdf'; 
    link.click();
  };
  const TypographyStyle = styled(Typography)({

    "@media (max-width: 600px)":{
 fontSize:"18px",
 display:"flex",
 justifyContent:"center",
 alignItems:"center"
    },
    "@media (max-width: 900px)": {
      fontSize: "20px"
    }
  });
  const BoxStyle = styled(Box)({
    "@media (max-width: 600px)":{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      
    }
  })

  return (
    <>
      <Box sx={{marginTop:"15px", backgroundColor:"rgb(223 206 188 / 72%)"}} id="contactIdBox">
      <Typography variant='h4'  style={{fontFamily:"revert",display:"flex",justifyContent:"center",alignItems:"center",color:'#916b43',padding:"15px"}}>Get in Touch</Typography>
      <TypographyStyle variant='h3' style={{fontFamily:"cursive",color:'rgb(100 51 1)',display:"flex",justifyContent:"center",alignItems:"center"}}> Any Questions? Feel Free to Contact</TypographyStyle>

      <BoxStyle sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
    

      <Box display="flex" flexDirection="column" margin="10px" >
<Box sx={style.Style} >
  <LocationOnIcon style = {{color:primaryColor,marginRight:"3px"}}/>
  <Typography variant='h6'style={{color:iconColor}}>Nehru Nagar,Dewas</Typography>
</Box>
<Box sx={style.Style}>
  <PhoneIcon style = {{color:primaryColor ,marginRight:"3px"}}/>
  <Typography variant='h6'style={{color:iconColor}}>
    +91 8834672396
  </Typography>
</Box>
<Box sx={style.Style}>
  <EmailIcon style = {{color:primaryColor ,marginRight:"3px"}}/>
  <Typography variant='h6'style={{color:iconColor}}>manisha879@gmail.com</Typography>
</Box>
<Button
      variant="contained"
      
      startIcon={<DownloadIcon />}
      style={{borderRadius:"20px",backgroundColor:primaryColor}}
      onClick={handleDownload}
    >
      Download CV
    </Button>

      </Box>
      </BoxStyle>
      </Box>
    </>
  )
}

export default Contact
