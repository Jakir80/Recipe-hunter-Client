import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
   <div>
      <div className='text-center'>
    <button className='btn btn-outline-info p-4 m-4'><Link to='/'>Back to homepage</Link></button>
    </div>
  <div className='text-center mt-4 pt-4'>
  
  <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
   </div>
   <h2 className='text-center mt-4 pt-4'>The page you are searching its not available right now or maybe broken the file . try Again later</h2>
  </div>
   
  );
};

export default Errorpage;
