import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [getService , setGetService] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getService")
        .then(res => res.json())
        .then(data => {
            setGetService(data)
        })
    }, [])
    return (
        <section style={{padding : '70px 0'}}>
            <div className="container">
                <div>
                    <h2 className='text-center my-5'>Provide awesome 
                        <span style={{color:'#7AB259'}}> services </span>
                     </h2>
                     <div className='row'>
                        {
                            getService.map(service => <ServiceCard key={Math.random()} 
                            service={service}></ServiceCard>)
                        }
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Services;