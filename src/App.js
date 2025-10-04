import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import  CustomerRoute  from "./Routers/CustomerRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "./component/State/Authentication/Action";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector((store)=> store);

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
  },[auth.jwt]
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <CustomerRoute/>
   
   </ThemeProvider>
    
    

     
  );
}

export default App;

