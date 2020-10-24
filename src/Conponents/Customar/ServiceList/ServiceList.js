import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser ] = useContext(UserContext);
    const logoStyle = {
        width : '150px',
    }
    const [orderService , setOrderService] = useState([])
//check order by email
    useEffect(()=>{
        fetch("https://boiling-retreat-75271.herokuapp.com/review?email=" + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrderService(data)
        })
    }, [])
    return (
        <div style={{background: '#FFFFFF'}}>
            <div className='container'>
                <div style={{padding: '20px 0'}} className="Topbar d-flex">
                    <div style={{width: '20%'}} className="top">
                    <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>  
                    </div>
                    <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                        <h5 style={{marginTop: '15px'}}>Service list</h5>
                        <h5 style={{marginTop: '15px'}}>
                            {loggedInUser.email ? loggedInUser.name :' user Name'}
                        </h5>
                    </div>
                
                </div> 
            </div>
            
            <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    
                    <div className="col-md-9">
                        <div className="orderSubmit">
                            <div className="row">
                            {
                            orderService.map(service => <ServiceCard key={service.id}  service={service}></ServiceCard>)
                            }
                            </div>
                        </div>
                    </div>
                </div >
            </div>
    );
};

export default ServiceList;