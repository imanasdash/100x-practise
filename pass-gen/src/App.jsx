import {useState} from 'react';
import './App.css'

function App() {
  const [wordCount , setWordCount] = useState(0);
  const [result , setResult] = useState('');

  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'pineapple', 'pomegranate', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon']
  
  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      generatePara();
    }
  }

  const handleInputChange = (e) => {
    setWordCount(e.target.value);
  }
  const generatePara = () => {
    let generatedPara = '';
    for (let i = 0; i < wordCount; i++){
      generatedPara += words[Math.floor(Math.random()*words.length)]+' ';
    }
    setResult(generatedPara.trim()+'.');
  }
  return (
    <>
      <div className="header"><h1>Para Generator</h1></div>
      <div className="search">
        <div className="search-bar"><input onKeyDown={handleKeyDown} onChange={handleInputChange} type="number" name="" id="input" placeholder='Enter Number of Words'/></div>
        <div onClick={generatePara} className='btn'><button className='gen-btn'>Generate</button></div>
      </div>
      <div className="output">
        <p>{result}</p>
      </div>
    </>
  )
}

export default App

