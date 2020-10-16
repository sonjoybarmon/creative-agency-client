import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../../App';
import user from '../../../images/user.png';
import './FeedbackCard.css'

const FeedbackCard = ({feed}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div className='col-md-4'>
            <div className=''>
                <Card className='feedcard' style={{padding:'10px'}}>
                    <div className='d-flex'>
                        <div style={{width:'90px'}}>
                        <Card.Img style={{width:'74px', height : '74px', margin: 'auto' }}
                         variant="top" src={user} />
                        </div>
                        <div>
                            <Card.Title> <h3>{feed.name}</h3> </Card.Title>
                            <Card.Title> <small>{feed.email}</small> </Card.Title>
                        </div>
                    </div>
                    <Card.Body>
                    <Card.Title>
                         <small>{feed.company}</small> 
                    </Card.Title>
                        <Card.Text>
                        {feed.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FeedbackCard;