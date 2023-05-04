import React from 'react';
import { Card } from 'react-bootstrap';

const TraditionalFood = ({ singleFood }) => {
    return (
        <div>
            <Card className='mb-4' >
                <Card.Body className=''>
                    <h2 className='text-center'>District Name :  {singleFood.name}</h2>
                    <h4> Traditional Food  : {singleFood.traditionalFood.name}</h4>
                    <p>{singleFood.traditionalFood.description}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TraditionalFood;