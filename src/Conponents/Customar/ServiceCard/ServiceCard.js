import React from 'react';
import imgUP from '../../../images/icons/service1.png';

const ServiceCard = ({service}) => {
    const cardStyle = {
        border: 'none',
        padding: '15px', 
        background : '#ffffff',
        borderRadius: '15px'
    }    
    return (
        <div className='col-md-6 mt-4'>
            <div style={cardStyle} >
                <div className="cardImg d-flex justify-content-between">
                    <div style={{width:'200px', heigth:'200px'}}>
                        <img style={{width:'80px'}} src={imgUP} alt="icon"/>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4">{service.name}</button>
                    </div>
                </div>
                <div className='mt-3 pb-3'>
                    <h5>{service.Design.title}</h5>
                    <small>{service.Details}</small>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;