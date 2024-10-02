import './App.css'

function App() {
  const changeColor = (color)=>{
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className="color-panel">
        <div className='button'><button onClick={() => changeColor('red')} className='option red-bg'>Red</button></div>
        <div className='button'><button onClick={() => changeColor('Yellow')} className='option yellow-bg'>Yellow</button></div>
        <div className='button'><button onClick={() => changeColor('black')} className='option black-bg'>Black</button></div>
        <div className='button'><button onClick={() => changeColor('purple')} className='option purple-bg'>Purple</button></div>
        <div className='button'><button onClick={() => changeColor('green')} className='option green-bg'>Green</button></div>
        <div className='button'><button onClick={() => changeColor('blue')} className='option blue-bg'>Blue</button></div>
        <div className='button'><button onClick={() => changeColor('white')} className='option bg'>Default</button></div>
      </div>
    </>
  )
}

export default App
