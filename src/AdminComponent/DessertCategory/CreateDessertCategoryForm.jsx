import React, { useState } from 'react'
import { Category } from '@mui/icons-material';


const CreateDessertCategoryForm = () => {
    const [formData,setFormData] = useState({
        categoryName:"",
        dessertId:"",
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
            Create Dessert Category</h1>
        <form className='space-y-5' onSubmit={handleSubmit}>
            <TexteField 
            fullWidth
             id="categoryName"
             name="categoryName"
             label="Dessert Category"
             variant="outlined"
             onChange={handleInputChange}
             value={formData.categoryName}>
            </TexteField>

            <Button variant="contained" type="submit">
                Create Category
            </Button>
        </form>
        </div>
    </div>
  );
};

export default CreateDessertCategoryForm