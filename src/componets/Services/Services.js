import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => { 
  const services = useSelector((state)=> state.services.services) 

  return (
    <div>
      <Box sx={{  mt:8,mb:5,   }}>
        <Typography sx={{ mb:2, color:'grey'   }} textAlign="center" variant="subtitle1">
          OUR SERVICES
        </Typography>
        <Typography  textAlign="center" variant="h4">
          Explore Our World Class Services  
        </Typography>
      </Box>
      <Container>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        {services.slice(0,6).map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
       
      </Grid>
      <Box sx={{ display:'flex', justifyContent:'center', my:5 }}>
       <Link to='/services'>
       <Button  variant="text">
          Explore More
        </Button>
       </Link>
      </Box>
      </Container>
    </div>
  );
};

export default Services;
