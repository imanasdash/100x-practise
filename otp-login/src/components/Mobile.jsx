import './Mobile.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Mobile(){
    const [mobile , setMobile] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMobile(e.target.value);
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            sendOtp();
        }
    }

    const sendOtp = () => {
        if(mobile.length !== 10){
            alert('Please enter a valid mobile number');
            return;
        }
        navigate('/Otp');
    }
    return (
        <div className="container">
            <div><h2>Login via OTP</h2></div>
            <div className="input"><input onChange={handleChange} onKeyDown={handleKeyDown} type="number" placeholder="   Enter Your Mobile Number" /></div>
            <div className="button"><button onClick={sendOtp}>Send OTP</button></div>
        </div>
    )
}