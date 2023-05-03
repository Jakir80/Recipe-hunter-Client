/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleChef = ({ singlchef }) => {
    // console.log(singlchef)

    return (
        <div className='mb-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Image className='w-100' src={singlchef.image} rounded />
                    <h2>{singlchef.name}</h2>                  
                    <p>{singlchef.experience}</p>                  
                    <p>Total likes :{singlchef.likes}</p>
                    <p>Number Of Recipe :{singlchef.recipe_number}</p>
                    {/* <Link to={`/services/${singledata?.id}`}> */}
                    <Link to={`/details/${singlchef.id}`}> <Button variant="primary">View Recipe</Button></Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleChef;