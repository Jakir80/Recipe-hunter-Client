/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeAll from '../RecipeAll/RecipeAll';

const ChefRecipe = () => {
// const {id}=useParams()
const chefdetails=useLoaderData()
const {name,image,experience,location}=chefdetails;
// console.log(chefdetails)
    return (
        <div className='container mb-4 pb-4'>
        <div className="row">
            <div className="col-lg-8">
                <img src={image} alt="" />
            </div>
            <div className="col-lg-4">
                <h1>Name: {name}</h1>
                <h3>{experience}</h3>
                <p>{location}</p>
            </div>
        </div>
<div className='row row-cols-2 pt-4 mt-4 '>
    {
        chefdetails.recipe.map(allrecipe=><RecipeAll key={allrecipe.key} allrecipe={allrecipe}></RecipeAll>)
    }
 
</div>


        </div>
    );
};

export default ChefRecipe;