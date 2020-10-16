import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logoStyle = {
        width : '150px',
    }
    const {review , setReview} = useState([]);
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        data.email = `${loggedInUser.email}` ;
        fetch('https://boiling-retreat-75271.herokuapp.com/addReview', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('your review successful')
            }
        })
        console.log(data);
    }
     
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>  
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Review</h5>
                    <h5 style={{marginTop: '15px'}}>
                        {loggedInUser.email ? loggedInUser.name : 'user Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                    <div className="orderList">
                        <NavLink className="orderLi" activeClassName='text-primary' to="/order">
                            Order
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/serviceList">
                            Service list
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/review">
                            Review
                        </NavLink>
                        {/* <NavLink className="orderLi" activeClassName='text-primary' to="/admin">
                              <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} className='btn'> Admin Panel </button>   
                        </NavLink> */}
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="orderSubmit">
                    <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name ' className='form-control' ref={register({ required: true })} /> <br/> 
                            <input name="company" style={{width:'570px', padding:'20px 10px'}} placeholder='Company’s name, Designation' className='form-control' ref={register({ required: true })} /> <br/>
                            <textarea name="description" style={{width:'570px', padding:'20px 10px'}} placeholder='Description' className='form-control' ref={register({ required: true })} /> <br/>
                            <input type="submit" value='SUBMIT' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Review;