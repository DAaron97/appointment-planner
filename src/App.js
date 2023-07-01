import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from 'react'

function App() {

  const [contacts, setContact] = useState([]);
  const [appointments, setAppointments] = useState([]);


  const addAppointment = (name, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time,
      }
    ])
  };

  const addContact = (name, phone, email) => {
    setContact([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      }
    ])
  }




  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
