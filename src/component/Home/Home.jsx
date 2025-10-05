import React,{useEffect } from 'react';
import "./Home.css";
import MultiItemCarousel from './MultiltemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard.jsx';
import { Auth } from '../Auth/Auth.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantsAction } from '../State/Restaurant/Action.js';

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  const restaurants=[1,1,1,1,1,1,1,1]
  const Home = () => {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt")
    const {restaurant}=useSelector(store=>store)

    console.log("restaurant",restaurant)

    useEffect(()=>{
      dispatch(getAllRestaurantsAction(jwt))
    },[])

  return (
    <div className="pb-10">
      <section className="banner relative flex flex-col justify-center items-center items-center pt-5">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            Sweetopia
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
Indulge in Joy: Desserts, Quick and Delivered.          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className='p-10 lg:py-10 lg:px-20'>
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">Top Meels</p>
        <MultiItemCarousel/>
      </section>
      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-gray-400 py-5">Order From Our Handpicked Favorites </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
            {
                restaurants.map((item)=><RestaurantCard/>)
            }
        </div>
      </section>
       
    </div>
  );
};

export default Home;

