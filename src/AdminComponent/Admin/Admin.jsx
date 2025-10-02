import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import DessertCategory from "../DessertCategory/DessertCategory";
import StoreDetails from "./StoreDetails";
import { Events } from "../Events/Events";
import Ingredients from "../Ingredients/Ingredients";
import SweetopiaDashboard from "../Dashboard/Dashboard";
import CreateMenuForm from "../Menu/CreateMenuForm"; 

const Admin = () => {
    const handleClose=()=>{
       console.log("Sidebar / modal close request");
    }
  return (
    <div>
        <div className='Ig:flex justify-between'>

            <div>
               <AdminSideBar handleClose={handleClose}/> 
            </div>

            <div className='Ig:w-[80%]'>
          <Routes>
            <Route path='/' element={<SweetopiaDashboard/>}/> 
            <Route path='/orders' element={<Orders/>}/> 
            <Route path='/menu' element={<Menu/>}/> 
            <Route path='/category' element={<DessertCategory/>}/> 
            <Route path='/ingredients' element={<Ingredients/>}/> 
            <Route path='/events' element={<Events/>}/> 
            <Route path='/details' element={<StoreDetails/>}/> 
            <Route path='/add-menu' element={<CreateMenuForm/>}/> 
          </Routes>
            </div>
        </div>
    </div>
  );
};

export default Admin;