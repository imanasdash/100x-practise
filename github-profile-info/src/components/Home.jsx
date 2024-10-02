import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const [username , setUsername] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            getInfo();
        }
    }

    const getInfo = () => {
        if(username){
            navigate(`/info?username=${username}`)
        }    
    }
    return(
        <>
            <div className="container">
                <div className="input">
                    <input onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="Enter Github Username" />
                    <button onClick={getInfo}>Search</button>
                </div>
            </div>
        </>
    )
}