import  './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import MainForm from './components/sign-in-form/MainForm'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header';

function App() {

  <div>

 <Home />
 <MainForm/>
 <LoginForm/>

  </div>
  

  return (

    <>
   <Header/>

      <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="signin" element={<MainForm />} />
      </Routes> 
     
    </>
  )
}

export default App
