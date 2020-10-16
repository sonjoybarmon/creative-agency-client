import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const User = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderList , setOrderList] = useState([])
    useEffect(()=>{
        fetch("https://boiling-retreat-75271.herokuapp.com/getCustomerOrder")
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
    }, [])


        const logoStyle = {
            width : '150px',
        }
        const tableStyle = {
            width : '950px',
            // height : '300px',
            background : '#ffffff',
            borderRadius : '15px' ,
            padding :'20px'
        }
    return (
        <div style={{background: '#FFFFFF'}}>
        <div className='container'>
            <div style={{padding: '20px 0'}} className="Topbar d-flex">
                <div style={{width: '20%'}} className="top">
                   <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>   
                </div>
                <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                    <h5 style={{marginTop: '15px'}}>Admin</h5>
                    <h5 style={{marginTop: '15px'}}>
                        {loggedInUser.email ? loggedInUser.name : 'user Name'}
                    </h5>
                </div>
            
            </div> 
        </div>
        
        <div className="row">
                <div className="col-md-3">
                <div className="orderList">
                        <NavLink className="orderLi" activeClassName='text-primary' to="/adminService">
                        Service list
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/addService">
                        Add Service
                        </NavLink>
                        <NavLink className="orderLi" activeClassName='text-primary' to="/makeAdmin">
                        Make Admin
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="orderSubmit">
                    <Table style={tableStyle}>
                            <thead style={{background:'#F5F6FA', margin:'10px 15px', borderRadius:'30px'}}>
                            <tr>
                                <th style={{width:'160px'}}>Name</th>
                                <th style={{width:'160px'}}>Email ID</th>
                                <th style={{width:'160px'}}>Service</th>
                                <th style={{width:'160px'}}>Project Details</th>
                                <th style={{width:'160px'}}>Price</th>
                            </tr>

                            </thead>
                            <tbody>
                                {
                                 orderList.map(data => 
                                 <tr>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.Design.title}</td>
                                    <td>{data.Details} </td>
                                    <td>{data.Price}</td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default User;