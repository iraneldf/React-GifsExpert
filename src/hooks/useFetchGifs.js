import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {
  
    const [state, setstate] = useState({
        data: [],
        loading: true
    })


    useEffect(() => { //Solo se ejecuta cuando el componente se renderiza por primera vez
      
    GetGifs(category).then(imgs=>{

        setstate({
            data: imgs,
            loading: false
        })
      
    })
        
    }, [category])
    
    return state;

}
