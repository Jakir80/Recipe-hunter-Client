/* eslint-disable no-unused-vars */
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container mt-4 pt-4'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the differences between uncontrolled and controlled components. ?</Accordion.Header>
                    <Accordion.Body>
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes ?</Accordion.Header>
                    <Accordion.Body>
                        React PropTypes validators

                        1. any : The prop can be of any data type. <br />
                        2.   bool : The prop should be a Boolean. <br />
                        3. number : The prop should be a number. <br />
                        4. string : The prop should be a string. <br />
                        5.func : The prop should be a function. <br />
                        6. array : The prop should be an array. <br />
                        7. object : The prop should be an object. <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is difference between nodejs and express js. ?</Accordion.Header>
                    <Accordion.Body>
                        js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;