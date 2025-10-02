import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";


// const ingredients =[
//     { 
//         cetegory:"Nuts & seeds",
//         ingredients:"cashews"
//     },
//     {
//         cetegory:"Protein",
//         ingredients:"Protein"
//     },
//     { 
//         cetegory:"Protein",
//         ingredients:"Bacon strips"
//     }, 
// ] 

const demo = [
    {
        cetegory: "Nuts & seeds",
        ingredients: ["cashews"]
    }, {
        cetegory: "Protein",
        ingredients: ["Gound beef", "Becon strips"]
    }
]

const MenuCard = () => {
    const handleCheckBokChange=(value)=>{
      console.log("value")  
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex item-center justify-between">

                    <div className="lg:flex item-center lg:gap-5">
                        <img className="w-[7rem] h-[7rem] object-cover" src="https://images.pexels.com/photos/29513762/pexels-photo-29513762.jpeg" alt="" />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="fornt-semibold text-xl" >Donut</p>
                            <p>89</p>
                            <p className="text-gray-400">nice food</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className="flex gap-5 flex-wrap">
                        {
                            demo.map((item) =>(
                                <div>  
                                    <p>{item.cetegory}</p>
                                    <FormGroup>
                                    {item.ingredients.map((item)=> (
                                        <FormControlLabel control={<Checkbox  onChange=
                                            {()=>handleCheckBokChange(item)}/>} label={item} />
                                   )) }
                                </FormGroup>
                                </div>
                                ))}
                    </div>
                    <div className="pt-5">
                        <Button variant="contained" disabled={false} type="submit">{true?
                        "Add to Cart":"Out of Stock "}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>)
}
export default MenuCard