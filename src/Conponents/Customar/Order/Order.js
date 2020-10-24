import React, { useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const [loggedInUser] = useContext(UserContext);
    const {title} = useParams()
    const logoStyle = {
        width : '150px',
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.email = `${loggedInUser.email}` ;
        data.Design = {title};
        fetch('https://boiling-retreat-75271.herokuapp.com/NewOrder', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success) {
                alert('your order place successful')
            }
        })
    };

    return (
        
        <div style={{background: '#FFFFFF'}}>
            <div className='container'>
                <div style={{padding: '20px 0'}} className="Topbar d-flex">
                    <div style={{width: '20%'}} className="top">
                    <Link to='/home'><img style={logoStyle} src={logo} alt=""/></Link>  
                    </div>
                    <div style={{width: '80%'}} className="userData d-flex justify-content-between">
                        <h5 style={{marginTop: '15px'}}>Order</h5>
                        <h5 style={{marginTop: '15px'}}>
                            {loggedInUser.email ? loggedInUser.name : 'user Name'}
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
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <input name="name" style={{width:'570px', padding:'20px 10px'}} placeholder='Your name / company’s name' className='form-control form_input' ref={register({ required: true })} /> <br/> 
                            <input name="email" value={loggedInUser.email || ''} style={{width:'570px', padding:'20px 10px'}} placeholder='Your email address' className='form-control form_input' ref={register({ required: true })} disabled /> <br/>
                            <input name="Design" value={title} style={{width:'570px', padding:'20px 10px'}} placeholder='Graphic Design' className='form-control form_input' ref={register({ required: true })} disabled/> <br/>
                            <textarea name="Details" style={{width:'570px', padding:'20px 10px'}} placeholder='Project Details' className='form-control form_input' ref={register({ required: true })} /> <br/>
                            <div className='d-flex'>
                                <input name="Price" style={{width:'288px', padding:'20px 10px'}} placeholder='Price' className='form-control'  ref={register({ required: true })} /> 
                                <label style={{width:'270px', backgroundColor: "#DEFFED", color: "#009444", border: "1px solid #009444" }} class="custom-file-upload ml-3 p-2 text-center">
                                    <input style={{ display: "none" }} name='file' type="file" />
                                    {/* <FontAwesomeIcon icon={faCloudUploadAlt} />*/} upload project file 
                                </label>
                            </div>
                            
                            <input type="submit" value='SEND' style={{width:'150px' , height:'40px' , fontSize:'16px' , background:'#111430' ,color:'#FFFFFF' , borderRadius:'10px' , marginTop :'20px'}} />
                            </form>
                        </div>
                    </div>
                </div >
            </div>
    );
};

export default Order;