 import { Typography,Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import Appointment from '../Appointment/Appointment';
 
 const Appointments = () => {
     const appointments = useSelector(state=> state.services.appointments)
      
     return (
         <div >
             <Box sx={{ textAlign:"center", minHeight:'90VH',mt:6,color:"#CAB4A9" }}>
                <Typography variant='h6'>APPOINTMENTS</Typography>
                <Typography variant='h4'>Mange Your All Appointment From Here</Typography>
            </Box>
             <Container>
                 <Grid sx={{ mt:5 }} container spacing={2}>
                     {
                        appointments?.map(appointment=><Appointment
                            key={appointment.key}
                            appointment={appointment} 
                        ></Appointment> )
                     }
                 </Grid>
             </Container>
         </div>
     );
 };
 
 export default Appointments;