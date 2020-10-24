import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser ] = useContext(UserContext);
    //show admin button
    const [adminEmail, setAdminEmail] = useState([]);

    useEffect(()=>{
        fetch("https://boiling-retreat-75271.herokuapp.com/getEmail?email=" + loggedInUser.email)
        .then(res=>res.json())
        .then(data => {
            setAdminEmail(data)
        })
    }, [])
            console.log(adminEmail.length)
    return (
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
            
        {
            (adminEmail.length === 1) ?
                <NavLink className="orderLi admin_btn" activeClassName='text-primary' to="/admin">
                <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} className='btn'> Admin Panel </button> 
                </NavLink> : ' '
            
        }

         </div>
    );
};

export default Sidebar;