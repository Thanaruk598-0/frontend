import React, { useState } from 'react'
import { Button,TextField } from '@mui/material';


const CreateIngredientForm = () => {
    const [formData,setFormData] = useState({
        name:"",
        ingredientCategoryId:"",
    });
    const handleSubmit =() => {
        const data={
            name:formData.categoryName,
            dessertId:{
                id:1,
            },
        };
        console.log(data)
    };
    const handleInputChange = (e) => {
        const {name,value}=e.target
        setFormData({
            ...formData,[name]:value
        })
    }
  return (
    <div className=''>
        <div className='p-5'>
        <h1 className='text-gray-400 text-center text-xl pb-10'>
            Create Ingredient
        </h1>
        <form className='space-y-5' onSubmit={handleSubmit}>
            <TexteField
            fullWidth
             id="categoryName"
             name="categoryName"
             label="Dessert Type"
             variant="outlined"
             onChange={handleInputChange}
             value={formData.categoryName}>
            </TexteField>

             <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={formData.ingredientCategoryId}
                label="Category"
                 onChange={handleInputChange}
                  name="ingredientCategoryId"
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
                </FormControl>

            <Button variant="contained" type="submit">
                Create Category
            </Button>
        </form>
        </div>
    </div>
  );
};

export default CreateIngredientForm