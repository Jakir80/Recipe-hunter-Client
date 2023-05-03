/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeAll = ({allrecipe}) => {
    const handletoast=()=>{
        toast("Favourite Added");
    }
    const ref = React.createRef();
    return (
        <div className='container mb-4'>
         <Card  >
                <Card.Body  ref={ref}>
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
               <button className='btn btn-outline-info ' onClick={handletoast}><ToastContainer />favorite</button>                                   
                </Card.Body> 
                <Pdf targetRef={ref} filename="Recipe.pdf">
        {({ toPdf }) => <button className='btn btn-lg btn-outline-info' onClick={toPdf}>Download Recipe</button>}
      </Pdf>   
            </Card>
     
     
        </div>
    );
};

export default RecipeAll;