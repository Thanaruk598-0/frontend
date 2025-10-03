import { Card } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material';


export const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
                <div className='flex items-center space-x-5'>
                     <img 
                     className='h-16 w-16'
                      src="https://images.pexels.com/photos/4627937/pexels-photo-4627937.jpeg" alt="" />
                      <div>
                        <p>Biryani</p>
                        <p>$89</p>
                      </div>
                </div>
                <div>
                    <Button  className='cursor-not-allowed'> completed </Button>
                </div>
        </Card>
    )
}
    
    