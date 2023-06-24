import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
let Footer= ()=> {
    return(
        <> 
        <div className='a'>
        <div className='App'>
        <div className='Container'>
        <div className='row'>
        <div className='col'>
            <h3>Buy vechicle</h3>
            <ul className='list-unstyled'></ul>
            <li>Pre-owned Cars</li>
            <li>Find a new car</li>
            <li>Finance</li>
            <li>Configure your car</li>
            <li> All brochures</li>
            <li>Model overview</li>
  
        </div>
        <div className='col'>
            <h3>Purchase advice</h3>
            <ul className='list-unstyled'></ul>
            <li>Book a test drive</li>
            <li>Nearest Showroom</li>
            <li>corporate solution</li>

        </div>
        <div className='col'>
            <h3>Customer services</h3>
            <ul className='list-unstyled'></ul>
            <li>Book a service appointment</li>
            <li>Owner's Manuals</li>
        </div>    


            <div className='col'>
            <h3>Popular models</h3>
            <ul className='list-unstyled'></ul>
            <li>Electric vehicles</li>
            <li>Limousines</li>
            <li>SUVs</li>
            <li>Cabriolets&Roadsters</li>
            <li>MERCEDES-AMG</li>
        </div>  

        <div className='col'>
            <h3>About Us</h3>
            <ul className='list-unstyled'></ul>
            <li>Contact</li>
            <li>Press Release</li>
            <li>Careers</li>
            <li>Benz Collection</li>
            <li>Privacy</li>
        </div> 
    
        <FacebookIcon />
        
        <hr/>
        <div className='b'>
        <p>© 2023. Mercedes-Benz India Pvt. Ltd. All Rights Reserved (provider)
</p>
        <h2><FacebookIcon /> <TwitterIcon/> <WhatsAppIcon/> <YouTubeIcon/> <LinkedInIcon/></h2>

       </div>

</div>
</div>
</div>
<hr/>
</div>

        </>
        
    );
}
export default Footer;
