import React, {useState, useCallback} from 'react'
// import 'bootstrap/dist/css/bootstrap.css'; 
import logo from '../../../images/logo192.png';
import {connect} from 'react-redux'

const Notification = (effect) => {
    const [stateEffect, setStateEffect] = useState(true);
    const handleChange = useCallback(() => setStateEffect(!stateEffect), [stateEffect]);
    return (
        <>
            {stateEffect === true || effect.hide ? (              
                <div id='show-demo' className= {`animate__animated animate__${effect.hide} animate__${effect.effect}`}>
                        <div style={{padding: 0}}>
                            <div xs='2' style={{display:'flex'}}>
                                <div md='4' xs='4' style={{width:'100px'}}>
                                    <img className='img_demo' alt='nothing' src={logo} />  
                                </div>                          
                                <div md='8' xs='8' style={{padding: '0 15px'}} >
                                    <a onClick={handleChange} className='hide_demo'>
                                        <i className="fa fa-times"></i>
                                    </a>
                                    <h5>Omega in Ha Noi, Viet Nam purchased</h5>
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>4 hours ago</p>
                                </div>                           
                            </div>
                        </div>
                </div>
            ) : ''}
        </>
    )
}

export default connect()(Notification)
