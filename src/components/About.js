import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import snaps from '../videos/snaps.mp4';
import faceapi from '../videos/faceapi.mp4';
import Webprojetcs from '../videos/Webprojetcs.mp4';

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev" onClick={onClick}>
    <i className="fas fa-angle-left"></i> 
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next" onClick={onClick}>
    <i className="fas fa-angle-right"></i> {/* Font Awesome right angle icon */}
  </div>
);

const About = () => {
  const experienceInMonths = 17; // 17 months = 1 year 5 months

  // Calculate years and months dynamically
  const years = Math.floor(experienceInMonths / 12);
  const months = experienceInMonths % 12;

  // Display the dynamic experience
  const experienceText = `${years > 0 ? years + ' year' + (years > 1 ? 's' : '') : ''} ${months > 0 ? months + ' month' + (months > 1 ? 's' : '') : ''}`.trim();

  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 },
  };

  // Slider settings with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={horizontal}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">Who I am</p>
          <p className="heading-text">About Me</p>
        </motion.div>
        <div className="split-about">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={horizontal}
            className="about-content"
          >
<div className="about-content">
<p>• I'm Vamshi Krishna, a Computer Science graduate working as a Software Engineer at a U.S. startup with {experienceText} of experience.</p>
<br />
  <p>• I created real value for users with PayPack - a Stripe CSV uploader used by 200+ users, and ShipModule - a web app connecting integration data with Dell Boomi.</p>
  <br />
  <p>• I build backend applications with clean, efficient API code, including REST APIs, for all kinds of platforms like e-commerce, delivery systems, food ordering, and more..</p>
  <br />
  <p>• I'm also a coder who built a community of 82K on Instagram and 1,300+ YouTube subscribers, breaking down how apps like Instagram, OTT platforms, and more work using simple explanations and memes.</p>
</div>

          </motion.div>
          <motion.div
            initial={{ x: '50', opacity: 0 }}
            whileInView={horizontal}
            className="about-img"
          >
            <div style ={{marginBottom: '15px' }}>
            <Slider {...settings} className="square-slide">
              <img src={require('../images/vamshistanding1.jpeg')} alt="Slide 1" />
              <div className='video-naming'>
              <video
                src={snaps}
                autoPlay
                loop
                muted
                playsInline
                className="slider-video"
              />
              <h6 className="video-name">2.5M views</h6>
              </div>
              <img src={require('../images/Gokarna.jpeg')} alt="Slide 2" />
              <div className="video-naming">
              <video
                src={faceapi}
                autoPlay
                loop
                muted
                playsInline
                className="slider-video"
              />
                <h6 className="video-name">500K views</h6>
                </div>
                <div className="video-naming">
              <video
                src={Webprojetcs}
                autoPlay
                loop
                muted
                playsInline
                className="slider-video"
              />
                <h6 className="video-name">1.9M views</h6>
                </div>
            </Slider>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
