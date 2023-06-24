
import React from 'react'
import './Signin.css'
const Signin = () => {
  return (
  <div className='im'> 
    <div >
     <li className='cc'><h3>Signin for Helper account</h3></li>
      <div className='sign'>
       
       
        <li className='sign1'><label htmlFor="">First name</label><input type="text" /></li>
        <li className='sign1'><label htmlFor="">Last name</label><input type="text" /></li>
        <li className='sign1'><label htmlFor="">Phonenumber</label><input type="number"/></li>
        <li className='sign1'><label htmlFor="">E-mail</label><input type="email" /></li>
        <li className='sign1'><label htmlFor="">New password</label><input type="password" /></li>
        <li className='sign1'><label htmlFor="">Re-enter password</label><input type="password" /></li>
        <li ><button className='sign2'>Signin</button></li>
    
      </div>
    </div>
  </div>
  )
}

export default Signin;



