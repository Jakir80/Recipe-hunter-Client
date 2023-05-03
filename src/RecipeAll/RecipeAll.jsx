/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Image } from 'react-bootstrap';

const RecipeAll = ({allrecipe}) => {
    return (
        <div className='container mb-4'>
         <Card >
                <Card.Body>
                    <Image className='w-75' src={allrecipe.image} rounded />
                    <h4>{allrecipe.name}</h4>
                    <h5>{allrecipe.description}</h5>                  
               <div className='d-flex '>

               <ul className='w-50'>
                ingradiant
                {
                    allrecipe.ingredients.map(g=><li>{g}</li>)
                    
                    }
                   
                    </ul>
                   
                    <ul className='w-50'>
                    steps
                    {allrecipe.steps.map(step=><li>{step}</li>)}</ul>
               </div>

                                                                    
                </Card.Body>
            </Card>

        </div>
    );
};

export default RecipeAll;