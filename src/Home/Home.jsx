/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';
import TraditionalFood from '../Traditional/TraditionalFood';
import SingleChef from '../singleChef/SingleChef';

const Home = () => {
    const traditionalfoods=useLoaderData()
    // console.log(traditionalfoods)
    const [chef,setChef]=useState([])
    fetch('http://localhost:5000/chefes')
    .then(res=>res.json())
    .then(data=>setChef(data))
    const [food,setFood]=useState([])
    fetch('http://localhost:5000/food')
    .then(res=>res.json())
    .then(data=>setFood(data))
    return (
        <div className='pt-4 mt-4'>
           <div className='d-flex gap-2 justify-center align-items-center'>
            <img className='w-75' src="http://www.veepixel.com/tf/html/sous/assets/images/home_03_01.jpg" alt="" />
            <div>
                <h1 className='font-bold text-primary'>Find Your <br /> Cooking Recipe</h1>
                <p>Are you need new cooking Recipe ?
                    you can visit our blog page to find Your Recipe
                </p>
               <Link to="/recipe"><button className='btn btn-lg btn-primary'>Find Recipe</button></Link>
            </div>
           </div>
            <h2 className='text-center mb-4 mt-4 p-4'>In which chef do You Like ?</h2>
       
        <Row lg={3} sm={1} className='g-4'>
        {
            chef.map(singlchef=><SingleChef key={singlchef.id} singlchef={singlchef}></SingleChef>)
           }
        </Row>
        <div>
        <h1 className='mb-4 mt-4 p-4'>Here is some example in which type food do you like ?</h1>
        <Row sm={1} lg={3} >
{
    food.map(fooditem=><Food fooditem={fooditem.key} fooditem={fooditem}></Food>)
}
    </Row>
        </div>
        <div>
            <h1 className='text-center text-primary p-4 m-2'>Some Bangladeshi Traditional Food For Each District </h1>
            {
                traditionalfoods.map(singleFood=><TraditionalFood key={singleFood.id} singleFood={singleFood}></TraditionalFood>)
            }
        </div>
         
        </div>
    );
};

export default Home;