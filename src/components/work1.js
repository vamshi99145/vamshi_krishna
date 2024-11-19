import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../styles/work1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThreadApp from '../videos/ThreadApp.mp4';
import ClothingWebsite from '../videos/ClothingWebsite.mp4';
import EducationWebsite from '../videos/EducationWebsite.mp4';
import FoodRestaurant from '../videos/FoodRestaurant.mp4';
import Travel from '../videos/Travel.mp4';
import Footwear from '../videos/Footwear.mp4';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev" onClick={onClick}>
    <i className="fas fa-angle-left"></i>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next" onClick={onClick}>
    <i className="fas fa-angle-right"></i>
  </div>
);

const Projects = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4,
        },
    };

    const Projectss = [
        { name: "Thread App", description: "Description for Projects One.", link: "https://threads-app-jade.vercel.app/", video: ThreadApp },
        { name: "Grilli Restaurant", description: "Description for Projects Two.", link: "https://vamshi99145.github.io/Food_App/", video: FoodRestaurant },
        { name: "FootCap", description: "Description for Projects Three.", link: "https://vamshi99145.github.io/FootWear/", video: Footwear },
        { name: "Clothing Store", description: "Description for Projects Four.", link: "https://vamshi99145.github.io/Clothing_Website/", video: ClothingWebsite },
        { name: "Travel India", description: "Description for Projects Five.", link: "https://vamshi99145.github.io/Travel_Website/", video: Travel },
    ];

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3, // Number of visible slides
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1, // Number of visible slides for smaller screens
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of visible slides
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Number of visible slides for smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <div className="Projects" id="Projects">
            <div className="container">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={fade}
                    viewport={{ once: true }}
                    className="heading">
                    <h1>Projects</h1>
                </motion.div>

                {/* Slider Wrapper */}
                <div className="slider-wrapper">
                    <Slider {...settings} className="Projectss-slider">
                        {Projectss.map((Projects, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="Projects-card">
                                <video
                                    src={Projects.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="Projects-video"
                                    alt={Projects.name}
                                />
                               
                                <h3 className="Projects-name">{Projects.name}</h3>
                                <p className="Projects-description">{Projects.description}</p>
                                <br/>
                                <a href={Projects.link} target="_blank" rel="noopener noreferrer" className="Projects-link">
                                    View Project
                                </a>
                            </motion.div>
                        ))}
                    </Slider>
                </div>

                {/* Custom Arrow Containers */}
                <div className="arrow-container">
                    {/* <PrevArrow /> */}
                </div>
                <div className="arrow-container">
                    {/* <NextArrow /> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;
