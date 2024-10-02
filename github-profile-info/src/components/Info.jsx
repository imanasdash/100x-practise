import { useState , useEffect } from 'react';
import './Info.css'

export default function Info(){
    const [info , setInfo] = useState({});
    const usr = window.location.search.split('?username=')[1];

    useEffect(() =>{
        if(usr){
            fetch(`https://api.github.com/users/${usr}`)
            .then(res => res.json())
            .then(res => setInfo(res))
        }
    })

    return(
      <div className="container">
        <div className="header">
          <h3>Github Profile Info :</h3>
        </div>
        <div className="info">
          <div className="name">Name : {info.name}</div>
          <div className="followers">Followers :{info.followers}</div>
          <div className="following">Following :{info.following}</div>
          <div className="public-repo">Number of Public Repos :{info.public_repos}</div>
        </div>
      </div>
    )
}