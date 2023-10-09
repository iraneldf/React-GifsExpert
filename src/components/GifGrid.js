import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    

    const { data:images, loading } = useFetchGifs(category);
    
  return (
      <>
          <h3 className='animate__animated animate__backInRight'> {category} </h3>

          {loading && <p className='animate__animated animate__shakeX'>cargando...</p>}
          <div className='animate__animated animate__fadeInDown card-grid'>
              {
                  images.map((img) =>
                      <GifGridItem
                          key={img.id}
                          {...img} />)
              }
          </div>
          </>
    
  )
}
