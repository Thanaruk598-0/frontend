import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import MenuCard from "./MenuCard";

const categories = [
  "pizza",
  "biryani",
  "burger",
  "chicken",
  "rice"
];

const foodtypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];


const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");

 

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
    setFoodType(e.target.value);
  };

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food/3</h3>
        <div>
          {/* รูปบน */}
          <img
            className="w-full h-[40vh] object-cover rounded-md"
            src="https://images.pexels.com/photos/31188278/pexels-photo-31188278.jpeg"
            alt=""
          />

          {/* รูปล่าง 2 รูป รวมกันสูงเท่ารูปบน */}
          <div className="flex gap-2 mt-2">
            <img
              className="w-1/2 h-[40vh] object-cover rounded-md"
              src="https://images.pexels.com/photos/30683758/pexels-photo-30683758.jpeg"
              alt=""
            />
            <img
              className="w-1/2 h-[40vh] object-cover rounded-md"
              src="https://images.pexels.com/photos/6332922/pexels-photo-6332922.jpeg"
              alt=""
            />
          </div>

          <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
            <p className="text-gray-500 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio inventore aliquid numquam id quod deserunt? 
              Ut nulla laboriosam iste repellat nam nihil aspernatur dolorem. Aut quidem temporibus molestiae perferendis 
              minima, vero quod consectetur! Nisi autem delectus expedita praesentium id quos porro excepturi eaque. 
              Nesciunt eligendi reiciendis quidem, voluptatem mollitia totam.
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-gray-500 flex items-center gap-3">
                <LocationOnIcon />
                <span>Mumbai, Maharashtra</span>
              </p>
              <p className="text-gray-500 flex items-center gap-3">
                <CalendarTodayIcon />
                <span>Mon-Sun: 9:00AM - 9:00 PM (Today)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="box space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28"></div>
          <div>
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Type
            </Typography>
            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                {foodtypes.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
            <Divider/>
               <div>
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Category
            </Typography>
            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                {categories.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
        {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
      
    </div>
  );
};

export default RestaurantDetails;
