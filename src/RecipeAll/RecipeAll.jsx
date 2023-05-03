/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';


const RecipeAll = ({allrecipe}) => {
    const [disable,setDisable]=useState(true)
    const handletoast=()=>{

        toast("Favourite Added");
        setDisable(false)
    }
    
   
    return (
        <div className='container mb-4'>
         <Card  >
                <Card.Body >
                    <Image className='w-75' src={allrecipe.image} rounded />
                    <h4>{allrecipe.name}</h4>
                    <h5>{allrecipe.description}</h5>                  
               <div className='d-flex'>
               <ul className='w-50'>
               <h1> ingradiant</h1>
                {
                    allrecipe.ingredients.map(g=><li>{g}</li>)
                    
                    }                  
                    </ul>
                   
                    <ul className='w-50'>
                    <h1>steps</h1>
                    {allrecipe.steps.map(step=><li >{step}</li>)}</ul>  
                                  
               </div>
                                           
                </Card.Body> 
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 d-flex align-items-center '>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={allrecipe.ratings}
                            readOnly
                        /> <span className='ms-3'>{allrecipe.ratings}</span>
                    </div>
                    <div>
                        <button onClick={handletoast} disabled={!disable} className="btn btn-warning text-white fw-semibold ">Favorite </button>
                    </div>
                </Card.Footer>
            </Card>
     
     
        </div>
    );
};

export default RecipeAll;