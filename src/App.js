import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from "react";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>


  );
}

export default App;

