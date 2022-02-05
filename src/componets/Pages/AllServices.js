import { Container, Grid,Box,Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Service from '../Service/Service';

const AllServices = () => {
    const allServices = useSelector(state=> state.services.services);

    return (
        <div>
            <Box sx={{ textAlign:"center",color:"#CAB4A9", my:5 }}>
                <Typography variant='h6'>SERVICES</Typography>
                <Typography variant='h4'>Explore Our All Service</Typography>
            </Box>
         <Container>
         <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        {allServices.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
       
      </Grid>
         </Container>
        </div>
    );
};

export default AllServices;