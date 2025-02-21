import React, { useState } from 'react';
import './css/footer.css';
import './css/header.css';


//icons
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


//bikes
// import Bullet350 from './bikes/bullet350';
// import Classic350 from './bikes/classic350';
// import ContinentalGT from './bikes/continentalGT';
// import Himalayan450 from './bikes/Himalayan450';
// import Hunter350 from './bikes/hunter350';
// import Int650 from './bikes/int650';
// import Meteor350 from './bikes/Meteor350';
//import Thunderbird from './bikes/Thunderbird';
// import Scram411 from './bikes/scram411';
// import Shotgun650 from './bikes/shotgun650';
// import Supermeteor650 from './bikes/supermeteor650';




//header
import { Link, Route, Routes } from 'react-router-dom';
import Attachments from './component/attachments';
import Findus from './component/findus';
import Home from './component/home';
import LoginPage from './component/login';
import Maintancetips from './component/maintancetips';
import Motorbike from './component/motorbike';
import CreatingAccountPage from './component/open';
import Outfit from './component/outfit';



const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const handleMenuClick = () => {
      setIsMenuOpen(false);
    };
  return (
    <>
    {/* header */}
    <div className="head">
      <span className="headlogo">
        <Link to="/Royal-Riders/">
          <img className="logo" src="Screenshot 2024-12-19 105928.png" height={50} width={200} alt="Logo" />
        </Link>
      </span>

      <span className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>

      <span className={`headcontent ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/motorbike" className="heada" onClick={handleMenuClick}>Motorbikes</Link></li>
          <li><Link to="/Attachments" className="heada" onClick={handleMenuClick}>Attachments</Link></li>
          <li><Link to="/maintance" className="heada" onClick={handleMenuClick}>Maintenance Tips</Link></li>
          <li><Link to="/Outfit" className="heada" onClick={handleMenuClick}>Outfit</Link></li>
          <li><Link to="/Findus" className="heada" onClick={handleMenuClick}>Find Us</Link></li>
          <li><Link to="/login" className="heada" onClick={handleMenuClick}>Log In</Link></li>
        </ul>
      </span>
    </div>

      {/* //content */}
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/motorbike" element={<Motorbike/>}></Route>
        <Route path="/Attachments" element={<Attachments/>}></Route>
        <Route path='/maintance' element={<Maintancetips/>}></Route>
        <Route path='/Outfit' element={<Outfit/>}></Route>
        <Route path='/Findus' element={<Findus/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/login/CreatingAccountPage' element={<CreatingAccountPage/>}></Route>


        {/* <Route path='Himalayan450.js' element={<Himalayan450/>}></Route>
        <Route path='bullet350.js' element={<Bullet350/>}></Route>
        <Route path='classic350.js' element={<Classic350/>}></Route>
        <Route path='continentalGT.js' element={<ContinentalGT/>}></Route>
        <Route path='hunter350.js' element={<Hunter350/>}></Route>
        <Route path='int650.js' element={<Int650/>}></Route>
        <Route path='Meteor350.js' element={<Meteor350/>}></Route>
        <Route path='scram411.js' element={<Scram411/>}></Route>
        <Route path='shotgun650.js' element={<Shotgun650/>}></Route>
        <Route path='supermeteor650.js' element={<Supermeteor650/>}></Route>
        <Route path='Thunderbird.js' element={<Thunderbird/>}></Route> */}

        
      </Routes>
        
     </div> 


    {/* footer */}
      <footer className="footer">
      <div className="footer-section">
        <h4>Motorcycles</h4>
        <ul>
          <li><a href='Himalayan450.js' className='foota'>Himalayan 450</a></li>
          <li><a href='shotgun650.js' className='foota'>Shotgun 650</a></li>
          <li><a href='bullet350.js' className='foota'>Bullet 350</a></li>
          <li><a href='supermeteor650.js' className='foota'>Super Meteor 650</a></li>
          <li><a href='hunter350.js' className='foota'>Hunter 350</a></li>
          <li><a href='scram411.js' className='foota'>Scram 411</a></li>
          <li><a href='classic350.js' className='foota'>Classic 350</a></li>
          <li><a href='Meteor350.js' className='foota'>Meteor</a></li>
          <li><a href='int650.js' className='foota'>INT650</a></li>
          <li><a href='continentalGT.js' className='foota'>Continental GT</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Rides & Events</h4>
        <ul>
          <li><a href='' className='foota'>Events</a></li>
          <li><a href='' className='foota'>Tours</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href='' className='foota'>Owner's Manual</a></li>
          <li><a href='' className='foota'>Contact Us</a></li>
          <li><a href='' className='foota'>Locate Dealers</a></li>
          <li><a href='' className='foota'>Become a Dealer</a></li>
          <li><a href='' className='foota'>Roadside Assistance</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Media</h4>
        <ul>
          <li><a href='' className='foota'>News</a></li>
          <li><a href='' className='foota'>Press Releases</a></li>
          <li><a href='' className='foota'>Media Kit</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>About us</h4>
        <ul>
          <li><a href='' className='foota'>Since 1901</a></li>
          <li><a href='' className='foota'>About Eicher Motors</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024, Royal Enfield. | Images shown here may differ from the actual product</p>
        <div className="social-media-icons">
          <a href="#"><i className="fa fa-facebook"><FaFacebookSquare className='fb' /></i></a>
          <a href="#"><i className="fa fa-x-twitter"><FaSquareXTwitter className='twit' /></i></a>
          <a href="#"><i className="fa fa-youtube"><IoLogoYoutube className='youtube'/></i></a>
          <a href="#"><i className="fa fa-instagram "><FaInstagramSquare className='insta' /></i></a>
          <a href="#"><i className="fa fa-linkedin"><FaLinkedin className='linkedin' /></i></a>
        </div>
      </div>
      <div className="footer-terms">
        <a href="#">Privacy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Cookies</a>
      </div>
    </footer>
    </>
  )
}

export default App
