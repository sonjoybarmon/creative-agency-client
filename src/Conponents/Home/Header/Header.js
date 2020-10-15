import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import bg from '../../../images/logos/Frame.png';
import './Header.css'

const Header = () => {
    return (
        <header>
            <TopBar></TopBar>

            <div className='container'>
                <div className="row d-flex align-items-center mt-5">
                    <div className="col-md-4">
                        <div>
                            <h1>Let’s Grow Your Brand To The Next Level</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button style={{width:'180px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF'}}  className='btn mt-3'> Hire us </button>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <div>
                            <img className='img-fluid' src={bg} alt="bg"/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;