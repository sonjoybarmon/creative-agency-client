import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
import Logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const TopBar = () => {
    const [loggedInUser ] = useContext(UserContext);
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
                            <button style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF'}}  className='btn mt-2'>
                                 {
                                    loggedInUser.email ? loggedInUser.name : 'Login'
                                }
                            </button> 
                            </NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default TopBar;