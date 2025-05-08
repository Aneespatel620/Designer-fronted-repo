import man4 from '../images/man4.png';
import image44remove from '../images/44remove.png';
import image67 from '../images/67.png';
import image68 from '../images/68.png';
import image56 from '../images/56.png';
import image69 from '../images/69.png';
import './About.css';
import Footer from './Footer.jsx';

const About =()=>{
    return <>
    <div className="main_sec">
        <h2 id="ab_h2">" Welcome to <b id="ab_b">Tie.com</b> the Ultimate Platform for designers looking to showcase their Talent and Connect With Clients.."</h2>
        <br></br>
        <br></br>
        <div className="sub_about">
            <div id="absec1">  <img src={image67} alt="Project" /></div>
            <div className="absec2"><h3>" Our Mission is to empower designers by providing a space to
                <br></br> express creativity , Collabration and growth."</h3></div>
            
        </div>
        <br></br>
        <br></br>
        <div className="sub_about">
           
            <div className="absec2"><h3>"A Team of Creative professionals passionate about design and technology. "</h3></div>
            <div id="absec1">  <img src={image68} alt="Project" /></div>
        </div>
        <br></br>
        <br></br>
        <div className="sub_about">
            <div id="absec1">  <img src={image56} alt="Project" /></div>
            <div className="absec2"><h3>" We offer a sleek and professional Platform tailored for designers, ensuring maxium exposure and opportunities."</h3></div>
            
        </div>
        
    </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div id="sub_ab3">
        <img src={image69} alt="Project" /> 
        </div>
        <br></br>
        <br></br>
        {<Footer />}
    </>
};

export default About;