
import styles from '../sign-in-form/mainForm.module.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";





const LoginForm = () => {
//Register con fetch
  const [answer,setanswer]=useState('')
 
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
const Register=(e)=>{
 
  e.preventDefault();
    
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

    const signIn = async () => {
      try {
        const response = await fetch('http://Localhost:3006/login',requestOptions);
        // eslint-disable-next-line no-unused-vars
       const data= await response.json()
       
       setanswer('Ha sido registrado con exito')
       console.log(data.token)
      } catch (error) {
        console.error(error);
      }
    };

    LoginForm();


  
    setemail('')
    setpassword('')
   
    function runFunctionWithDuration(duration) {
    setanswer('Bienvenido')
      setTimeout(function() {
        setanswer('') 
      }, duration);
    }
    
    // Example usage:
    runFunctionWithDuration(5000);
}


  return (
    <>
    <form name='miForm' >
      <div className={styles.inputData}>
      <h1>Log In</h1>
        <div className={styles.dainput}>
            <label htmlFor="email" style={{fontWeight:'bolder'}}>EMAIL</label>
            <input  value={email} className="form-control" name='email'
            id='email' type='text' placeholder='input your email'
              onChange={(e)=>{setemail(e.target.value)}}
            />
        </div>
        
       <div className={styles.dainput}>
            <label htmlFor="password" style={{fontWeight:'bolder'}}>PASSWORD</label>
            <input value={password} className="form-control" name='password'
            id='password' type='text'  placeholder='input your password'
              onChange={(e)=>{setpassword(e.target.value)}}
            />
       </div>
        
     </div>

     <div className= {styles.buttons}>
          
          <p className='signin' >
          <Link to="/signIN">
            Not a member yet?. Please register
          </Link>
          </p>

          <button type= 'submit' id='login' className="btn btn-warning"  onClick={(e)=>{Login(e)}}>Log In</button>

     </div>

          <p id='answer' className='form-group' style={{textAlign:'center'}}>{answer}</p>

      
    </form>
  </>
)}

export default LoginForm