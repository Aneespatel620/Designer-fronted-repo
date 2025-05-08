import { Link } from "react-router-dom"; // Import Link
import './Footer.css';
import address from '../images/address.png';
import email from '../images/email.png';
import call from '../images/call.png';

import youtube from '../images/youtube3.png';
import insta from '../images/insta.png';
import x from '../images/x.png';
import linkedin from '../images/linkedin.png';
import git from '../images/git.png';

const Footer =()=>{
    return <>
    <div className="main_footer">
    <h1><span>Hi ,</span> I'm a <b> Designer !!!</b></h1>
       <div className="section">
        <div id="div1">
        
            <p id="para1"> I am <b>Anees Patel </b> I developed the website designs, <br></br>
            I am excited about the opportunity to contibute my <br></br> skills to a dynamic team an₫grow further as a developer .
            </p>
            {/* <p>Iam <b>Anees Ahmed </b> I developed the website,<br>
    I'm excited about the opportunity to<br> contribute my skills to a dynamic team<br>
     and grow further as a developer. </p> */}
        </div>
        <div id="div2">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>
        
        </div>
        <div className="add_section">
            <h4><span><img src={address} alt="location" /></span> Saida Colony , Jatwada Road , Aurangabad , Maharashtra 431001 </h4>
            <p> <span><img src={email} alt="Project" /></span> patelanees2005@gmail.com</p>
            <p><span><img src={call} alt="Project" /></span> +91 9421806384 </p>
             
        </div>
        
       </div>
       <div className="social">
        <span><img src={youtube} alt="Project" />
        </span><span><img src={x} alt="Project" /></span>
        <span><img src={linkedin} alt="Project" /></span>
        <span><img src={insta} alt="Project" /></span>
        <span><img src={git} alt="Project" /></span>
       </div>
       <hr></hr>
       <p>@2025 copyright: Tie.com, All Rights Reserved & privacy and policy.</p>
       <hr></hr>
        </div>
   
    </>
};

export default Footer;