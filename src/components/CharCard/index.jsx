import { useState } from 'react'
import './style.css'

const CharCard = ({name,image,status}) =>{
    //<li className={status.toLowerCase()}>
           // <h2>{name}</h2>
           //<img src={image}/>
           // <p>{status}</p>
       // </li>
        
    return(
        <>
            {status === "Alive"?
                (<li className={'alive'}>
                    <h2>{name}</h2>
                    <img src={image}/>
                    <p>{status}</p>
                </li> )
            : 
                (<li className={'dead'}>
                    <h2>{name}</h2>
                    <img src={image}/>
                    <p>{status}</p>
                </li>)
            }
        
        </>
        
    )
}

export default CharCard