/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Image } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
const Food = ({ fooditem }) => {
    const {picture,name,description}=fooditem;
    return (
        <div className='mb-4'>
            <Card >
                <Card.Body>
                    <Image className='w-100' src={picture} rounded />
                    <h2>{name}</h2>
                    <p>{description}</p>                 
                </Card.Body>
            </Card>
        </div>
    );
};

export default Food;