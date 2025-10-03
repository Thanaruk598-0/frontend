import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
   {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <RestaurantDetails/> */}
    {/* <Cart/> */}
    {/* <Profile/>    */}
    <CustomerRoute/>
   
   </ThemeProvider>
    
    

     
  );
}

export default App;

