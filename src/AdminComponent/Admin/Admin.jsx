import React from 'react'
import AdminSideBar from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import Orders from './../Orders/Orders';
import  Menu from '../Menu/Menu';
import DessertCategory from './../DessertCategory/DessertCategory';
import StoreDetails from './StoreDetails';
import { Events } from '../Events/Events';
import Ingredients from '../Ingredients/Ingredients'

const Admin = () => {
    const handleClose=()=>{

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
          </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin