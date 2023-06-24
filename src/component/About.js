import React from 'react'
import './About.css'
// import Navbar from './Navbar';
import { Height } from '@mui/icons-material'
import { width } from '@mui/system'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    
    <div className='container1'>
    <div className='container2'>
    <div className='about'>
    

      <img src='https://www.anhussunally.com/wp-content/uploads/2021/04/about-us.jpg'/> 
       <div className='about1'>
      {/* <h1 style={{fontWeight:'bold'}}>ABOUT US</h1> */}
        <h3 style={{fontWeight:'bold'}}><b>TEST TO SPEECH & SPEECH TO TEXT</b> </h3>
<ArrowDownwardIcon/>
        {/* </div> */}
    </div>
    </div>
    </div>
    <div className='about7'>
<div className='about2'>
<button><a href='https://murf.ai/resources/tags/text-to-speech/'> Text To Speech</a></button>
  
  <h1  data-aos="flip-down" data-aos-duration="1500"   data-aos-offset="300">Text to Speech vs. Speech to Text</h1>
  <img src="https://murf.ai/resources/media/posts/60/ezgif.com-gif-maker-1.jpg"/>
</div>

<div className='about4' data-aos="slide-up">
  <p>Have you ever used a voice search assistant for a query on your browser or a phone? If yes, then there's no better instance of speech to text in action in your daily life. Along the same lines, if you've used the "pronunciation" tool on Google to learn how a word is spoken, you now understand what text to speech is.<br/><br/>Text to speech (TTS) and Speech to text (STT) are two entirely different technologies, although they do work on the same concept—the use of graphemes, phonemes, and Mel-spectrograms—for converting one form of language into another. TTS has been received quite well all over the world over and is set to reach a market capital value of $6.52 billion by 2027.<br/><br/>Similarly, speech to text is also prominently noticeable today in the form of dictation tools on software like MS Word. In fact, the market for speech to text is growing at a CAGR of over 15% (2022 to 2030).<br/><br/>There's so much more to these tools than their market performance. There is a detailed process that happens behind the scenes—within seconds—that produces the output. Here is a deeper insight into text to speech vs speech to text.</p>
</div>
<div className='about3' data-aos="slide-up">
 <div class="card text-white bg-warning mb-3" style={{height:320, width:300}} data-aos="fade-right"  data-aos-offset="350" >
  <div class="card-header"><h4>What is Text to Speech?</h4></div>
  <div class="card-body">
    <h5 class="card-title">TTS</h5>
    <p class="card-text">Text to speech is a noble technology that reads text aloud. You may also know this tool as "Read Aloud" on products like eBooks and reader.Text to speech also enables businesses to drastically expand their audience outreach to previously inaccessible demographics.</p>
  </div>
</div>
<div class="card text-white bg-info mb-3" style={{height:320, width:300}} data-aos="fade-left"  data-aos-offset="350" >
  <div class="card-header" ><h4>What is Speech to Text?</h4></div>
  <div class="card-body">
    <h5 class="card-title">STT</h5>
    <p class="card-text">Speech to text is a computational linguistics technology that uses speech recognition or an audio file to convert spoken language into text. Its best example is the Dictate tool in Microsoft Word, which allows users to dictate or spell instead of typing it in their documents.</p>
  </div>
</div>
</div>
<div className='about5' data-aos="fade-up-right">
  <h1><br/>How do Text to Speech and Speech to Text Work?</h1>
  <h5>The working of text to speech and STT is fairly simple to understand.</h5>
  <h3><br/><b>TTS Technology: How it Works</b></h3>
  <p>The conversion of text to speech is a four-step process. It begins with pre-processing:</p>
  <ul>
    <li>The text you input is input into the pre-processor, which breaks it up into phonemes. Each phoneme has its own  specific duration in the audio.</li><br/>
<li>The phonemes, which are the latent features of the input, are then sent to the encoder, which embeds them with the “Speaker” before sending them to the decoder.</li><br/>
  
  <li>The decoder then processes these latent features and determines the energy, duration, and pitch to convert them into Mel-spectrograms.</li>
  </ul>
</div>
<div className='about6' data-aos="fade-up-left">
  
  <h3><br/><b>STT Technology: How it Works</b></h3>
  <p>The conversion of speech to text online relies on ASR technology. Here's how it works:</p>
  <ul>
    <li>When you “speak,” the sound waves you produce are analog signals of sound. In order to be computed by software for conversion, these analog signals are first digitized. This digitization happens by breaking down the acoustics into segments.</li><br/>
<li>Once all the phonemes are matched, the software then locates the respective grapheme for each phoneme. Graphemes are words, phrases, or symbols that correspond to linguistic phonetics.</li><br/>
  
  <li>The decoder then processes these latent features and determines the energy, duration, and pitch to convert them into Mel-spectrograms.</li>
  </ul>
</div>
  </div>
  <div className='about8'>
    <h1></h1>
    
  <img src='https://addons.mozilla.org/user-media/previews/thumbs/261/261161.jpg?modified=1631513313'/>
  {/* <img src='https://i0.wp.com/c1ctech.com/wp-content/uploads/2021/01/Screenshot_1611838103.png?fit=1080%2C1920&ssl=1'/>
  <img src="https://www.hearinglikeme.com/wp-content/uploads/2020/05/STT-apps.jpg"/> */}
  <img src="images\WhatsApp Image 2023-06-19 at 9.16.15 PM.jpeg"/>
  </div>

 
  <div> 
  <div className='a'>
  <div className='App'>
  <div className='Container'>
  <div className='row'>
  <div className='col'>
      <h3>Company</h3>
      <ul className='list-unstyled'></ul>
      <li>About us</li>
      <li>Get in touch</li>
      <li>International School</li>
      <li>Meet our experts</li>
      <li>Visit our UK site</li>
      <li>Coronavirus</li>

  </div>
  <div className='col'>
      <h3>Customer Help</h3>
      <ul className='list-unstyled'></ul>
      <li>Customer Services</li>
      <li>Privacy & Cookies</li>
      <li>Anti-slavery Statement</li>
      <li>Terms & Conditions</li>

  </div>
  <div className='col'>
      <h3>Done BY</h3>
      <ul className='list-unstyled'></ul>
      <li>Anusha</li>
      <li>Bhargavi</li>
      <li>Jaya Ram</li>
      <li>Tejasriram</li>
  </div>    


      <div className='col'>
      <h3>Get In Touch</h3>
      <ul className='list-unstyled'></ul>
      <li>Test to speech</li>
      <li>speech to text</li>
      <li>What Three Words</li>
      <li>Heyworth Road, Off A611</li>
      <li>Building 1</li>
  </div>  

  <div className='col'>
      <h3>About Us</h3>
      <ul className='list-unstyled'></ul>
      <li>Contact</li>
      <li>Join | Log In</li>
      <li>Tts</li>
      <li>Stt</li>
      <li>Privacy</li>
  </div> 

  <FacebookIcon />
  
  <hr/>
  <div className='b'>
  <p>Copyright © 1998 - 2023 WebMD LLC. All rights reserved. Your use of this site is governed by our Terms of Use and Privacy Policy.
</p>

  <h2><a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB'><FacebookIcon /></a><a href='https://twitter.com/i/flow/login'><TwitterIcon/></a> <a href='https://www.instagram.com/accounts/login/'>< InstagramIcon/></a><a href='https://www.youtube.com/'><YouTubeIcon/></a> <a href='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F%3Fsrc%3Dgo-pa%26trk%3Dsem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%2520login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133%26mcid%3D6844056167778418689%26cid%3D%26gclid%3DCj0KCQjw4s-kBhDqARIsAN-ipH29SE-2qN1ozVABlV1OXkMr1PhNp-JOLuqPUSUSBbhq4GX9urJiq_UaAletEALw_wcB%26gclsrc%3Daw.ds'><LinkedInIcon/></a> </h2>

 </div>

</div>
</div>
</div>
<hr/>
</div>
</div>
</div>
  )
}

export default About
