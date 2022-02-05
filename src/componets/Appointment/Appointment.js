import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromAppointment } from "../../redux/Slice/servicesSlice";
const Appointment = ({ appointment }) => {
  const { name, thumbNail } = appointment;
  const dispatch = useDispatch()
  return (
    <Grid md={12} item>
      <Grid container>
        <Grid
          md={4}
          sx={{ display: "flex", justifyContent: "end", pr: 3 }}
          item
        >
          <img style={{ width: "20%" }} src={thumbNail} alt="" />
        </Grid>
        <Grid md={4} item>
          <Typography variant="h6">{name}</Typography>
        </Grid>
        <Grid md={4} item>
          <Button onClick={()=> dispatch(removeFromAppointment(appointment))} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>
      <hr style={{ width:'55%' }} />
    </Grid>
  );
};

export default Appointment;
