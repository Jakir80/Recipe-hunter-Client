/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleChef = ({ singlchef }) => {
    return (
        <div className='mb-4'>
          <Col>
          <Card className='h-100' >
                    <Card.Img variant='top h-75' src={singlchef.image} />
                <Card.Body className='h-100'>
                    <h2>{singlchef.name}</h2>                  
                    <p>{singlchef.experience}</p>                  
                    <p>Total likes :{singlchef.likes}</p>
                    <p>Number Of Recipe :{singlchef.recipe_number}</p>                 
                    <Link to={`/details/${singlchef.id}`}> <Button className='btn btn-lg btn-info text-white fw-bold'>View Recipe</Button></Link>
                </Card.Body>
            </Card>
          </Col>


        </div>
    );
};

export default SingleChef;