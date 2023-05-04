/* eslint-disable no-unused-vars */
import React from 'react';
import Pdf from "react-to-pdf";
const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='container mt-4 pt-4' >
            <div className='border p-4 rounded' ref={ref}>
                <h2 className='font-bold p-2'> Question:What is the differences between uncontrolled and controlled components. ? </h2>
                <p className='p-2'> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                <h2 className='p-2'>How to validate React props using PropTypes ?</h2>
                <p className='p-2'> React PropTypes validators
                    1. any : The prop can be of any data type. <br />
                    2. bool : The prop should be a Boolean. <br />
                    3. number : The prop should be a number. <br />
                    4. string : The prop should be a string. <br />
                    5.func : The prop should be a function. <br />
                    6. array : The prop should be an array. <br />
                    7. object : The prop should be an object. <br /></p>
                <h2 className='p-2'>Question: What is difference between nodejs and express js. ?</h2>
                <p className='p-2'> js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                <h2 className='p-2'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='p-2'> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</p>
            </div>
           <div className='text-center p-4'>
           <Pdf targetRef={ref} filename="blog-answer.pdf">
                {({ toPdf }) => <button className='btn btn-lg btn-outline-info' onClick={toPdf}>Download Blog Answer</button>}
            </Pdf>
           </div>
        </div>
    );
};

export default Blog;