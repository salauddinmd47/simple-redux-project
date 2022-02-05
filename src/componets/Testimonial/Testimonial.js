import React, { useEffect, useState } from 'react'; 
 
import carosule1 from '../../images/carosel4.png'
import carosule2 from '../../images/carosel5.png'
import carosule3 from '../../images/carosel1-modified.png'
import carosule4 from '../../images/carosel3-modified.png'
import carosule5 from '../../images/carosel6.png'
import carosule6 from '../../images/carsel2-modified.png'

import {Container, Grid, Typography} from '@mui/material'
import { Box } from '@mui/system';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=>{
        fetch('./testimonials.json')
        .then(res=> res.json())
        .then(data => setTestimonials(data.slice(0,3)))
    },[])
     
    return (
        <Container>
        <Box sx={{ textAlign:'center', my:5 }}>
            <Typography sx={{ mb:1 }} variant='subtitle1'>TESTIMONIAL </Typography>
            <Typography variant='h4'>What Our Clients Says</Typography>
        </Box>
         
        <Grid container spacing={3}>
        
          {
            testimonials.map(testimonial=> <SingleTestimonial 
                testimonial ={testimonial}
                key={testimonial.id}
            ></SingleTestimonial>)
          } 
        </Grid>
       
        
      </Container>
    );
};

export default Testimonial;