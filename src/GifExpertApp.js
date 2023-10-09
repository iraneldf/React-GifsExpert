import React, { useState } from 'react'

import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X','Dragon Ball']

    const [categories, setCategories] = useState(['One Punch']);
/* 
    const handleAdd = () => {

       // setCategories([...categories, 'HunterXHunter'])
      setCategories(cat => [...cat, 'HunterXHunter'])
    } */

  return (
    <>  
          <h1>GifExpertApp</h1>

      <AddCategory setCategories={setCategories}  />
          <hr/>
          
          {
        categories.map(category => <GifGrid
          key={category} 
          category={ category } />)
          }
    </>
    
   
  )
}


