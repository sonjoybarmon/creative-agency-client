import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const [review , setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
    return (
        <section style={{padding:'100px'}}>
            <div className='container'>
                <h1 className='my-5 text-center'>Clients <span style={{color: '#7AB259'}}> Feedback</span></h1>
            
                <div className="row">
                    {
                      review.map(feed => <FeedbackCard key={review._id} feed={feed} ></FeedbackCard>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;