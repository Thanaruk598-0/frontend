import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Card, Button } from '@mui/material';

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card className="flex gap-5 w-64 p-5 items-start flex-col bg-gray-800">
            <div className="flex items-center gap-2 mb-2">
                <HomeIcon className="text-gray-500" />
                <h1 className="font-semibold text-lg text-white">Home</h1>
            </div>
            <p className="text-gray-400">
                Sweet Circle Donuts,123 Sugar Lane, Suite 5,Downtown, Springfield, IL 62704,USA
            </p>
            {showButton && (
                <Button 
                    variant="outlined" 
                    fullWidth 
                    onClick={() => handleSelectAddress(item)}
                    sx={{ backgroundColor: '#EC4899', '&:hover': { backgroundColor: '#DB2777' } }}
                    className="mt-3"
                >
                    Select
                </Button>
            )}
        </Card>
    );
};
