import {
  Typography,
  Container,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromAppointment } from "../../redux/Slice/servicesSlice";
import {useHistory} from 'react-router-dom'
const Appointments = () => {
  const appointments = useSelector((state) => state.services.appointments);
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRemoveAppointment = (appointment)=>{
       const proceed =  window.confirm("do you want to delete you appointment")
        if(proceed){
            dispatch(removeFromAppointment(appointment))
        }
        
    }
  return (
    <div style={{ minHeight: "80VH" }}>
      {
          appointments.length? <Box sx={{ textAlign: "center", mt: 6, color: "#CAB4A9" }}>
          <Typography variant="h6">APPOINTMENTS</Typography>
          <Typography variant="h4">
            Mange Your All Appointment From Here
          </Typography>
        </Box>:<div>
              <h2 style={{ textAlign:'center' }}>You Don't hve any appointment</h2>
              </div>
      }
      <Container>
        {
          appointments.length ? <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Client Name</TableCell>
                  <TableCell align="right">Service Name</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow
                    key={appointment.userName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {appointment.userName}
                    </TableCell>
                    <TableCell sx={{ textAlign:"right" }} component="th" scope="row">
                      {appointment.name}
                    </TableCell>
                    <TableCell align="right">{appointment.date}</TableCell>
                    <TableCell align="right">{appointment.email}</TableCell>
                    <TableCell align="right">
                     <IconButton onClick={()=> handleRemoveAppointment(appointment)} aria-label="delete">
                      <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>: <div style={{ textAlign:"center" }}>
          <button onClick={()=> history.push('/services')} className="explore-btn"> Let's Book an Appointment </button> 
          </div>
         
        }
      </Container>
    </div>
  );
};

export default Appointments;
