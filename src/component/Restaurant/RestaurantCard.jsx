import { Card,Chip,IconButton } from '@mui/material'; 
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
        <Card className="w-[18rem]"> 
            <div className={`${true?"cursor-pointer":"cursor-not-allowed"} relative`}>
<img 
 className="w-full h-[10rem] ronded-t-md object-cover"
src="https://images.pexels.com/photos/1619572/pexels-photo-1619572.jpeg" alt="" />

<Chip
size="small"
className="absolute top-2 left-2"
color={true?"success":"error"}
label={true?"open":"closed"}
/>
</div>
<div className="p-4 textPart lg:flex w-full justify-between">
<div className="space-y-1">
            <p className="font-semibold text-lg">Shipley Do-nut</p>
            <p className="text-gray-500 text-sm">
                Craving it all? Dive into our global fla...
            </p>
</div>
<div>

        <IconButton>
            {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
        </IconButton>
</div>
</div>
        </Card>
    )
}

export default RestaurantCard