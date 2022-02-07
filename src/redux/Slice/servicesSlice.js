import { createSlice } from '@reduxjs/toolkit'
import allServices from '../../fakeData/fakeData.json'

const serviceSlice = createSlice({
    name:'service',
    initialState:{
        services:allServices,
        appointments:[]
    },
    reducers:{ 
        makeAnAppointment:(state, action)=>{
            
            console.log(action,state)
            state.appointments.push(action.payload)
        },
        removeFromAppointment:(state, {payload})=>{
            // console.log(state, payload)
           const restAppointments = state.appointments.filter(appointment=> appointment.name !== payload.name)
           state.appointments = restAppointments
        }
    }
   
})
export const { makeAnAppointment,removeFromAppointment  } = serviceSlice.actions
export default serviceSlice.reducer