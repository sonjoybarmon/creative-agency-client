import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import Logo from '../../../images/logos/logo.png';

const TopBar = () => {
    return (
        <Navbar expand="lg">
            <div className='container
            '>
                <Navbar.Brand style={{float:'left'}}> 
                    <img style={{width:'150px', height:'50px'}} src={Logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                    <Nav  className="ml-auto">
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/home' className='nav_li'>Home</NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/portfolio' className='nav_li'>Our Portfolio</NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/team' className='nav_li'>Our Team</NavLink>
                        </li>
                        <li className="menu_li">
                            <NavLink activeClassName='text-primary'
                                to='/contact' className='nav_li'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'> 
                            <button style={{width:'120px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF'}}  className='btn mt-2'>Login</button> </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin'> 
                            <button style={{width:'100px' , height:'40px' , fontSize:'16px' ,color:'#FFFFFF'}}  className='btn mt-2 ml-3 btn-primary'>Admin</button> </NavLink>
                        </li>
                        
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default TopBar;