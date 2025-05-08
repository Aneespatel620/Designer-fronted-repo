import { Link, useLocation } from "react-router-dom"; // Import useLocation
import image12 from '../images/12.jpeg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import home from '../images/Home.png';

import image70 from '../images/70.png';
import image74 from '../images/74.png';
import image65 from '../images/65.png';

import image62 from '../images/62.png';
import image64 from '../images/64.png';
import image71 from '../images/71.png';
import call2 from '../images/call2.png';
import './Services.css';
import Footer from './Footer.jsx';

const Services =()=>{
    return <>
    <div>
        <div className="main_service">
            <div id="sub_servi"><h2>" Empowering Designers with Professionals <br></br> Services."</h2>
            <div ><Link to="/contact"><button id="cta">Contact<span><img src={call2} alt="Project" /></span> </button></Link> </div>
            </div>
            <div id="sub_servi2"><img src={image12} alt="Project" /></div>
        </div>

    </div>
    <br></br>
    <hr></hr>
    <h2 id="myde"> My Design </h2>
    <hr id="hr"></hr>
    <br></br>
    <br></br>
    <div id="sub_ab3">
            <img src={home} alt="Project" /> 
            </div>
            <br></br>
            <div className="sub_servi2">
                <div id="sub_servi3"><img src={image3} alt="Project" /></div>
                <div id="sub_servi3"><img src={image4} alt="Project" /></div>
                <div id="sub_servi3"><img src={image5} alt="Project" /></div>
            </div>
            <br></br>
    <hr></hr>
    <h2 id="myde">List of Services </h2>
    <hr id="hr"></hr>
  
    <div className="ul_list">
                <h2>Porfolio Hosting .</h2>
                <h3>Client Matching.</h3>
                <h4> Freelancing Opportunities . </h4>
                <h5> Design Community & Learning .</h5>
            </div>
            <br></br>
             <div className="cards2">
                        <div id="card2"><img src={image70} alt="Project" /></div>
                        <div id="card2"><img src={image74} alt="Project" /></div>
                        <div id="card2"><img src={image65} alt="Project" /></div>
                        
                       </div>
                       <br></br>
    <hr></hr>
    <h2 id="myde">Subcriptions Plans </h2>
    <hr id="hr"></hr>

    <div>
        <h2 id="sub_serv4">" Flexible Pricing For Designers of All Levels "</h2>
    </div>
    <div className="cards">
        <div id="card11">
            <h2>Static Design </h2>
            <h5>Simple Design ,</h5>
            <h5>Using Figma ,</h5>
            <h5>Basic Fonts ,</h5>
            <h5>Fast Service ,</h5>
            <h5>simple color plates ,</h5>
            <h4>Only 2999 /-
                <br></br><span>Basic Subcription</span></h4>
            <button id="cta"> Buy </button>
        </div>
        <div id="card11">
        <h2>Dynamic  Design </h2>
            <h5>Pro Design ,</h5>
            <h5>Using Canva , Figma ,</h5>
            <h5>Pro Fonts , trasitions,</h5>
            <h5>Fast Service & secure ,</h5>
            <h5>Advanced color Plates,</h5>
            <h4>Only 4999 /-
                <br></br><span>Pro Subcription</span></h4>
            <button id="cta"> Buy </button>
        </div>
        <div id="card11">
        <h2>Customize Design </h2>
            <h5>Premium Design ,</h5>
            <h5>Using Kittle , Lexica , Leonard ,</h5>
            <h5>Pre Fonts, Transitions , Animations,</h5>
            <h5>Good & Fast and Secure Services ,</h5>
            <h5> Color Attractive combinations,</h5>
            <h4>Only 11,999 /-
                <br></br><span>Premium Subcription</span></h4>
            <button id="cta"> Buy </button>
        </div>
    </div>
    <br></br>
    <br></br>

    <div className="cards2">
                        <div id="card2"><img src={image62} alt="Project" /></div>
                        <div id="card2"><img src={image64} alt="Project" /></div>
                        <div id="card2"><img src={image71} alt="Project" /></div>
                        
                       </div>
                       <br></br>
                       {<Footer />}
    </>
};

export default Services;