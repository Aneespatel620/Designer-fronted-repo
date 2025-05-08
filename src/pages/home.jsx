import Navbar from "../components/Navbar.jsx"; // ✅ CORRECT
import './Home.css';
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Footer from './Footer.jsx';
import image10 from '../images/10remove.png';
import image60 from '../images/60.png';
import image16 from '../images/16.jpg';
import image28 from '../images/28.jpg';
import image29 from '../images/29.jpg';
import image22 from '../images/22.jpg';
import image38remove from '../images/38remove.png';
import image44remove from '../images/44remove.png';
import image14 from '../images/14.png';
import image17 from '../images/17.png';
import image19 from '../images/19.png';
import image20 from '../images/20.jpg';
import image21 from '../images/21.png';
import image30 from '../images/30.jpg';
import image32 from '../images/32.jpg';

import man1 from '../images/man1.png';
import man2 from '../images/man2.png';
import man3 from '../images/man3.png';
import man4 from '../images/man4.png';


import image45 from '../images/45.png';


import { useAuth } from "../store/store_auth.jsx";
const Home =()=>{
    const { user } = useAuth(); // Now user comes from context

    useEffect(() => {
        console.log("User:", user);
    }, [user]);

 
   
    return <>
    
    <div class="container">
        
        <div className="main_home">
        <div class="hero_section">
            <div>
            <h2>"Unleash Creativity With Stunning Design .."</h2> 
            <p>"Explore a world of breathtaking designs crafted by top talents ..."</p>
            </div>
            <div>
                        <img src={image10} alt="Project" />
                    </div>
                   
        </div>
        <div className="triangle">
            {/* <img src={image44remove} alt="Project" /> */}
        {/* <img src={image44remove} alt="Project" /> */}
        {/* <img src={image38remove} alt="Project" /> */}
        
        </div>
        <div>
            
       
            {user ? <h2>Hello, {user}!</h2> : <h2>Please login.</h2>}
            
            <Link to="/login">
                <button>Explore »</button>
            </Link>
            <br>
            </br>

        </div>
        <div></div></div>
    <hr></hr>
    <div class="feature_section">
        <br></br>
        <h2 id="myde">" My Trending Design "</h2>
        <hr id="hr"></hr>
       
            <div id="card1"><img src={image60} alt="Project" /></div>
           
        </div> 
        <div className="cards">
            <div id="card2"><img src={image28} alt="Project" /></div>
            <div id="card2"><img src={image29} alt="Project" /></div>
            <div id="card2"><img src={image22} alt="Project" /></div>
           </div>
    </div>
        <hr></hr>
        <div className="about_section">
            <h2>Why Choose US </h2>
            <hr id="hr"></hr>
            
<div className="ul_list">
            
                <h2>High-Quality created designs.</h2>
                <h3>Seamless Exprience for designer & Client.</h3>
                <h4>Custom design for request. </h4>
                <h5>Fast and secure Services. </h5>
            </div>
           
           <div className="cards2">
            <div id="card2"><img src={image17} alt="Project" /></div>
            <div id="card2"><img src={image19} alt="Project" /></div>
            <div id="card2"><img src={image20} alt="Project" /></div>
            
           </div>
           <hr>
           </hr>

           <div className="review_section">
            <h2>Reviews</h2>
            <hr id="hr"></hr>

            <div className="slides">
                <div id="slide1">
                 <div><img src={man1} alt="Project" /></div>
                 <div>
                 <span><img src={image45} alt="Project" /></span>
                 <h5>John</h5>
                 <p>Good work !!</p>
                 </div>
                </div>
                <div id="slide2">
                <div><img src={man2} alt="Project" /></div>
                <div>
                 <span><img src={image45} alt="Project" /></span>
                 <h5>Alice</h5>
                 <p>Good job !!</p>
                 </div>
                </div>
                <div id="slide3">
                <div><img src={man3} alt="Project" /></div>
                <div>
                 <span><img src={image45} alt="Project" /></span>
                 <h5>Bob</h5>
                 <p>Great job!!!</p>
                 </div>
                </div>
                <div id="slide4">
                <div><img src={man4} alt="Project" /></div>
                <div>
                 <span><img src={image45} alt="Project" /></span>
                 <h5>Patel</h5>
                 <p>Excellent work!! </p>
                 </div>
                </div>
            </div>

            
           </div>
           <hr></hr>
           <br></br>
           {<Footer />}
          </div>
          
          
        
        
    </>
};







export default Home;