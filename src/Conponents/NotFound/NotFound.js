import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'

const NotFound = () => {
    return (
        <div style={{height:'100vh' , background:'#f1f1f1'}} className='d-flex justify-content-center align-items-center text-danger'>
            <div>
            <Link to='/home'><img style={{width:'200px'}} src={logo} alt="notFound"/></Link>
                <h1 style={{marginTop:'50px'}}>Page is not found</h1>
                <h1>SORRY ....! 404</h1>
            </div>
        </div>
    );
};

export default NotFound;