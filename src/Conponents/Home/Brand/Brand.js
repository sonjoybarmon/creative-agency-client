import React from 'react';
import icon1 from '../../../images/logos/uber.png';
import icon2 from '../../../images/logos/slack.png';
import icon3 from '../../../images/logos/netflix.png';
import icon4 from '../../../images/logos/google.png';
import icon5 from '../../../images/logos/airbnb.png';

const Brand = () => {
    const iconContent ={
        padding : '70px 0'
    }
    const imgStyle = {
        width : '140px',
        height : '36px'

    }
    return (
        <div className='container'>
            <div className='row' style={iconContent}>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={icon1} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={icon2} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={icon3} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={icon4} alt="icon"/>
                </div>
                <div className="col-md-1 col-sm-6 offset-md-1 text-center mt-4">
                    <img style={imgStyle} src={icon5} alt="icon"/>
                </div>
            </div>
        </div>
    );
};

export default Brand;