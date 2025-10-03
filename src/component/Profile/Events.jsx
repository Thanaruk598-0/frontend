import React from 'react'
import { EventCard } from './EventCard'

export const Events = () => {
    return (
        <div className='mt-5b  px-10 flex flex-wrap gap-2'>

        {[1,1,1].map((item)=><EventCard/>)}
        </div>
    )
}
    
    