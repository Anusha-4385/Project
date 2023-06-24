import React from 'react'
import './LoginPage.css'

import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <>
    <div className='logbody'>
    
    <div className='pv'>
    
    <div className='logn'>
    <h2 className='vs'>LOGIN </h2>
    <a href=""><button className='logn2'> <i class="bi bi-google go"></i> <b> Login with Google</b></button></a>
    <a href="https://www.facebook.com/"><button className='logn2'><i class="bi bi-facebook fb"></i><b>Login with Facebook</b></button></a>
    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1710777005%3A1687169558675177&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=Af_xneF9RpVAZ37mMEaxZmbqtNFYp_3U76DhPVpoaJHLEK4qA2VXlcVOVWcxSQ2Uw5op35Ec1-3ygw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button className='logn2'><i class="bi bi-envelope-fill en "></i><b>Login with E-mail</b></button></a>
     
        <input className='logn2' placeholder='Enter Username' type="text" /> 
        <input className='logn2' placeholder='Enter Password' type="password" />
        <button className='btn'>Login</button>
        
        <p><b> you don't have login account then you <Link to="/sign" className='tag'>Signin</Link></b></p>
    </div>
    </div>



    </div>
    

      
    </>
  )
}

export default Login;
