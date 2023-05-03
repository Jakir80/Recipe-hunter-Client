/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import RecipeAll from '../RecipeAll/RecipeAll';
const ChefRecipe = () => {
// const {id}=useParams()
const{loading}=useContext(AuthContext)
const chefdetails=useLoaderData()
const {name,image,experience,location}=chefdetails;
// console.log(chefdetails)
    return (
        <div className='container mb-4 pb-4 pt-4 mt-4'>
        <div className=" d-flex justify-between align-items-center gap-4">
            <div>
                <img src={image} alt="" />
            </div>
            <div >
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