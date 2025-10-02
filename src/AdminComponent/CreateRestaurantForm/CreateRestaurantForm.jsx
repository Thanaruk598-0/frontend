import React, { useState } from 'react'
import { useFormik } from 'formik'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconButton, CircularProgress, Grid  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import values from './../../../node_modules/lodash-es/values';
import { uploadImageToCloudinary } from '../utill/UploadToCloudaniry';

const initialVAlues={
name:"",
description:"",
dessertType:"",
streetAddress:"",
city:"",
stateProvince:"",
postalCode:"",
country:"",
email:"",
mobile:"",
twitter:"",
instagram:"",
openingHours:"Mon-Sun : 9:00 AM - 12:00 PM",
images:[]
}
const CreateRestaurantForm = () => {
  const [uploadImage,setUploadImage] =useState(false);
  const formik=useFormik({
      initialVAlues,
      onSubmit: (values) => {
          const data= {
            name:values.name,
            description:values.description,
            dessertType:values.dessertType,
            address:{
              streetAddress : values.streetAddress,
              city:values.city,
              stateProvince:values.stateProvince,
              postalCode:values.potalCode,
              country:values.country
            },
            
          contactInformation:{
            email:values.email,
            mobile:values.mobile,
            twitter:values.twitter,
            instagram:values.instagram
          },
            openingHours:values.openingHours,
            images:values.images
          };
          console.log("data ---",data)
      },
  });
  const handleImageChange = async(e) => {
    const file=e.target.files[0]
    setUploadImage(true)
    const image = await uploadImageToCloudinary(file)
    console.log("image ---",image)
    formik.setFieldValue("images",[...formik.values.images,image])
    setUploadImage(false)
  };

  const handleRemoveImage = (index) => {
    const updatedImages=[...formik.values.images]
    updatedImages.splice(index,1);
    formik.setFieldValue("images",updatedImages)
  };

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
        <div className="lg:max-w-4xl">
          <h1 className='font-bold text-2xl text-center py-2'>
          Add New Dessert Store
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
          <Grid className='flex flex-wrap gap-5' item xs={12}>
            <input 
            accept='image/*'
            id='fileInput'
            style={{display:"none"}}
            onChange={handleImageChange}
            type="file" />

            <label className='relative' htmlFor="fileInput">
              <span className='w-24 h-24 cursor-pointer flex items-center justify p-3
              border rounded-md border-grey-600'>
                <AddPhotoAlternateIcon className="text-white"/>

              </span>
              {
                uploadImage && <div className='absolute left-0 right-0 top-0 
                bottom-0 w-24 h-24 flex justify-center items-center'>
                  <CircularProgress/>
                </div>
              }

            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image,index) => (
              <div className="relative">
                <img 
                className='w-24 h-24 object-cover'
                key={index}
                src={image}
                alt=""
                 />
                <IconButton 
                size="small"
                sx={{
                  position:"absolute",
                  top:0,
                  right:0,
                  outline:"none",
                }}
                onClick={()=>handleRemoveImage(index)}>
                   <CloseIcon sx={{fontSize:"1rem"}}/>
                </IconButton>
              </div>
            ))}
            </div>
          </Grid>

            <Grid item xs={12}>
              <TexteField fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}>
              </TexteField>
            </Grid>

            <Grid item xs={12}>
              <TexteField fullWidth
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.description}>

              </TexteField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="dessertType"
              name="dessertType"
              label="Dessert Type"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.dessertType}>
              </TexteField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="openingHours"
              name="openingHours"
              label="Opening Hours"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.openingHours}>

              </TexteField>
            </Grid>

            <Grid item xs={12}>
              <TexteField fullWidth
              id="streetAddress"
              name="streetAddress"
              label="StreetAddress"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.streetAddress}>

              </TexteField>
            </Grid>

            <Grid item xs={12}>
              <TexteField fullWidth
              id="city"
              name="city"
              label="City"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.city}>
              </TexteField>
            </Grid>

            <Grid item xs={12} lg={4}>
              <TexteField fullWidth
              id="stateProvince"
              name="stateProvince"
              label="State"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.stateProvince}>
              </TexteField>
            </Grid>

             <Grid item xs={12} lg={4}>
              <TexteField fullWidth
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.postalCode}>
              </TexteField>
            </Grid>

            <Grid item xs={12} lg={4}>
              <TexteField fullWidth
              id="country"
              name="country"
              label="Country"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.country}>
              </TexteField>
            </Grid>

            
            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}>
              </TexteField>
            </Grid>

            
            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="mobile"
              name="mobile"
              label="Mobile"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.mobile}>
              </TexteField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="instagram"
              name="instagram"
              label="Instagram"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.instagram}>
              </TexteField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TexteField fullWidth
              id="twitter"
              name="twitter"
              label="Twitter"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.twitter}>
              </TexteField>
            </Grid>
        </Grid>

        <Button variant="contained" color="primary" 
        type="submit">Create Store</Button>
        </form>
        </div>
    </div>
  );
}

export default CreateRestaurantForm