 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 

// Define a service using a base URL and expected endpoints
export const serviceApi = createApi({
  
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  tagTypes: ['Appointment', 'Service'],
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => `services`,
    }),
    // product loading 
    // get appointment list from server 
    getAllAppointments:builder.query({
      query:(email)=> `appointments?email=${email}`,
      providesTags: ['Appointment'],
    }),
    // send appointment to database 
    addAppointment:builder.mutation({
      query:(appointment)=>({ 
            url:'appointments',
            method:'POST',
            headers:{'Content-Type':'application/json ; charset=UTF-8'},
            body:appointment 
      }),
      
    }),
    // end post appointments 
    // start delete appointment 

    deleteAppointment:builder.mutation({
      query:(id)=>{
        return{
          url:`appointments/${id}`,
          method:'DELETE'
        } 
      }
    })
     
   
  }),
})

 
export const { useGetAllServicesQuery, useAddAppointmentMutation,useGetAllAppointmentsQuery,useDeleteAppointmentMutation } = serviceApi