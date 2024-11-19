// import React from "react";
// import "../styles/HeroSection.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import VamshiPhoto from "../images/Vamshi1.jpg"; // Importing the image
// import Typewriter from './TypingText';
// const HeroSection = ({ nav, handleNav }) => {
//   const scrollToAbout = () => {
//     // Scroll to the About section smoothly
//     const aboutSection = document.getElementById('about');
//     aboutSection.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="hero-section" name="home" id="home">
//       <div className="hero-overlay"></div>
//       <div className="menu-icon" onClick={handleNav}>
//         {nav ? <FaTimes /> : <FaBars />}
//       </div>
    
//       <div className="hero-content">
//         <div className="text-side">
//           <h1>Hi there!</h1>
//           <h2>I'm a Software Engineer</h2>
//           {/* I focus on solving problems and building easy-to-use applications that work efficiently and get things done. */}
//           <p> I enjoy taking on challenges and creating solutions that make tasks easier for users.</p>
//           <button className="explore-btn" onClick={scrollToAbout}>Explore...</button>
//         </div>
//         <div className="photo-side">
//           <img src={VamshiPhoto} alt="Vamshi Krishna" className="profile-photo" />
//           {/* <h6 className="photo-name">Serla Vamshi Krishna</h6> */}
//           <Typewriter
//             dataText={["Serla Vamshi Krishna"]} // Display your name
//             period={5000}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import VamshiPhoto from "../images/Vamshi1.jpg"; // Importing the image
import Typewriter from './TypingText';

const HeroSection = ({ nav, handleNav }) => {
  const scrollToAbout = () => {
    // Scroll to the About section smoothly
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section" name="home" id="home">
      <div className="hero-overlay"></div>
      <div className="menu-icon" onClick={handleNav}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
    
      <div className="hero-content">
        <div className="text-side">
          <h1>Hi there!</h1>
          <h2>I'm a Software Engineer</h2>
          <p>I enjoy taking on challenges and creating solutions that make tasks easier for users.</p>
          <button className="explore-btn" onClick={scrollToAbout}>Explore...</button>
        </div>
        <div className="photo-side">
          <img src={VamshiPhoto} alt="Vamshi Krishna" className="profile-photo" />
          <Typewriter
            dataText={["Serla Vamshi Krishna"]} // Display your name
            period={5000}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
