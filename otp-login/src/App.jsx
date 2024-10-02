import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Mobile from './components/Mobile.jsx'
import Otp from './components/Otp.jsx'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mobile />}></Route>
          <Route path="/Otp" element={<Otp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
