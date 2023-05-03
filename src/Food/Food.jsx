/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Image } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
const Food = ({ fooditem }) => {
    return (
        <div className='mb-4'>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Image className='w-100' src={fooditem.picture} rounded />
                    <h2>{fooditem.name}</h2>
                    <p>{fooditem.description}</p>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default Food;