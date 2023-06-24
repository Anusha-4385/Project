import React from 'react';
import './Contact.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact(){
 
    
    return(
        
        <>
        <div className='contact'>
        <div className='contact1'>  
       <h1  >Help & Contact.</h1>
       </div>
       
       <div className='contact2'>
       <h3 className='contact3'>Get Help & Report Problems</h3>
       <p>Whenever you feel stuck or encounter a problem on our platform do not hesitate to ask for help.<br/> There's many ways of getting help, some of which we're describing below.

       Inside Cognigy.AI, test to speech<br/> You can find contextual in-product help by clicking the Help icon in the App Bar on the upper right of the screen.


</p>
    

<br/>

<h3 className='contact4'>In-Product Contextual Help</h3>

       <div className='sodhipullama'>
        <ul></ul>
        <li>Every article in the Help Widget comes from the Cognigy Help Center</li>
        <li>which can be reached by clicking the "View original article" link.</li>
        <li>Can I cancel my order?</li>
        <li>By sending an email to support [AT] cognigy (dot) com</li>
        <li>Directly from the Help Widget inside Cognigy.AI by clicking "Contact Us" on the bottom</li>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19228.6290468396!2d81.52623213811093!3d16.562956606688488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1687173205975!5m2!1sen!2sin" width="420" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className='box'>
        <nav className='box1'>
        <h2>Contact us</h2>
        
            <p><br/>If you would like to know more about our platform or <br/>just have additional questions about our products or<br/> services, please submit the contact form.</p>
            
            </nav>
            <form className='form'>
            <nav>
            <div className='form1'>
            <nav>
            <label ><b>FirstName</b><sup><b>*</b></sup></label>
            <input placeholder='First name' required type='text'/>
            </nav>
            <nav>
            <label><b>LastName</b><sup><b>*</b></sup></label>
            <input placeholder='Last name' required type='text'/>
            </nav>
            </div>
            <div className='form2' >
                <nav>
            <label><b>E- Mail   ID</b><sup><b> *</b></sup></label>
            <input placeholder='E-Mail Address' required type='email'/>
            </nav>
            <nav>
            <label><b>Phone No</b><sup><b>*</b></sup></label>
            <input placeholder='Phone Number' required type='number'/>
            </nav>
            </div >
            {/* <label for="">gender</label>
            <input name='Male' type='checkbox'></input> */}
            <div className='form3'>
                <nav>
            <label><b>Gender</b><sup><b> *</b></sup></label>
            <select >
            <option value="" >Select...</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
        
            </select>
            </nav>
            <nav>
            <label><b>Country</b>
            </label>
            <select >
            <option value="">Select...</option>
                <option value="">India</option>
                <option value="">Landon</option>
                <option value="">USA</option>
                <option value="">Aprica</option>
                <option value="">PAK</option>
                <option value="">China</option>
                <option value="">Canada</option>
                
                <option value="">Others</option>
                </select>
                </nav>
                </div>
                <div className='form4'>
                    <nav>
                <label><b>Message:</b></label>
                <input placeholder='Enter your Query' type='text'/>
                </nav>
                </div>
                <div className='form5'>
                <input type='submit'></input>
                </div>
                </nav>
            
        </form>

    </div>
       </div>
       </div>
       <div className='img1'>
          <div className='img'>
             <img  height={300} src="https://img.freepik.com/premium-photo/contact-us-customer-support-hotline-people-connect-call-customer-support-email-address-live-chat-internet-wifi_36325-3415.jpg"/>
        
           </div>
  
       <div>
       <img height={300} src="https://elearningindustry.com/wp-content/uploads/2020/12/speech-analytics-for-customer-support-call-centers.png"/>  
        
       </div>
       
       </div>
       
       
       
        <div className="container">
        <div className="i">

        <h5 ><FmdGoodIcon/> Address</h5>
       <p>TCS House,Raveline street,<br/>FONT,10-3567<br/>Hyderabad ,Andhra Pradesh</p> 
       </div>
       <div className="j" >

        <h5> <LocalPhoneIcon/>Phone Number</h5>
       <p>9391299118<br/>(or)<br/>993-567-223(Landlineno)</p> 
       </div>
       <div className="k">
        <h5><EmailIcon/> Email</h5>
       <p>nbrastsr55346066@gmail.com<br/>&<br/>Ramanutejabharg1@gmail.com</p> 
       </div>
       </div>
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
    
    </>
        
    );
}
export default Contact;
