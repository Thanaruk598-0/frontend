import {Dashboard, Logout, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import CookieIcon from '@mui/icons-material/Cookie';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMediaQuery } from '@mui/material';
import { Drawer, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SweetopiaDashboard  from '../Dashboard/Dashboard';



const menu=[
    {title:"Dashboard",icon:<Dashboard/>,path:"/"},
    {title:"Orders",icon:<ShoppingBag/>,path:"/"},
    {title:"Menu",icon:<ShopTwoIcon/>,path:"/"},
    {title:"DessertCategory",icon:<CategoryIcon/>,path:"/category"},
    {title:"Ingredients",icon:<CookieIcon/>,path:"/ingrediants"},
    {title:"Events",icon:<EventIcon/>,path:"/event"},
    {title:"Details",icon:<AdminPanelSettingsIcon/>,path:"/details"},
    {title:"Logout",icon:<LogoutIcon/>,path:"/logout"}
]

export const AdminSideBar = ({handleClose}) => {
    const isSmallScreen=useMediaQuery("(max-weight:1080px)")
    const navigate=useNavigate();
    const dispatch=useDispatch()

    const handleNavigate=()=>{
      navigate(`/admin/restaurants${item.path}`)
      if(item.title==="Logout"){
        navigate("/")
      dispatch(logout())
      handleClose()
  }
    }

  return (
    <div>
        <>
        <Drawer
        variant={isSmallScreen?"temporary":"permanent"}
        onClose={handleClose} 
        open={true} 
        anchor='left' 
        sx={{zIndex:1}}>
        </Drawer>

        <div className='w-[70vw] Ig:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem'>
            
            {menu.map((item)=><>
            <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'> 
              {item.icon}
              <span>{item.title}</span>
            </div>
          
          {i!==menu.length-1 && <Divider/>}
           </>)}

        </div>    
    </div>
  )
}