import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    
    <div>
    
    
<div className='homeBg'>
    <h1>Text-to-speech (TTS)</h1>
      <div className='home'>
      
    <img height={200}  src="https://disabilityinsider.com/wp-content/uploads/2019/10/TTS.jpg"/>
      
    <h4><b>Text-to-speech (TTS):</b> <br/>TTS is a type of assistive technology that reads digital text aloud.<br/> It’s sometimes called “read aloud” technology.With a click of a button <br/>or the touch of a finger, TTS can take words on a computer or other <br/>other digital device and convert them into audio. TTS is very helpful for<br/> kids who struggle with reading. But it can also help kids with writing and <br/>editing, and even focusing.</h4>
      </div>
    <h1>Speech To Text(STT)</h1>
     <div className='home1'>
    
   
    <h4 > <b>Speech To Text(STT):</b><br/>Speech-to-text, also known as speech recognition, allows for the <br/>real-time transcription of audio streams into text. This is also known<br/> as computer speech recognition. When users speak clearly, script <br/>accuracy rates exceed 95%.STT is a direct tax levied on every purchase<br/>and sale of securities that are listed on the recognized stock exchanges<br/> in India. STT is governed</h4>
    <img height={200} src="https://editor.analyticsvidhya.com/uploads/75412speech-recognition-python.png"/>
     </div>
     
</div>

</div>

{/* <Link to='/LoginPage'>login</Link> */}

    </>
  )
}

export default Home
