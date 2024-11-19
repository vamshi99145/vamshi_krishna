import React from "react";
import { motion } from "framer-motion";
import "../styles/Works.css";

const Works = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4,
        },
    };

    const projects = [
        {
            name: "Paypack",
            description: "A live web app that works with Stripe to upload and update customer, product, and invoice data from CSV files. It makes the process faster and more secure with email verification, and works in both sandbox and live modes.",        
            link: "https://app.paypack.ai/auth/login", 
            image: require('../images/paypackinside1.png'),
        },
        {
            name: "ShipModule",
            description: "A full-stack web app that allows users to create clients, integrations, field configurations, field groups, and easily map integrations and fields. It connects with Dell Boomi for efficient logistics management.",
            link: "https://www.novamodule.com/shipmodule", 
            image: "https://via.placeholder.com/280x160?text=Shipmodule", 
        },
    ];

    return (
        <div className='works' id='works'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={fade}
                    viewport={{ once: true }}
                    className='heading'>
                    <p className='heading-sub-text'>I build real value at my current startup</p>
                    <p className='heading-text'>NovaModule</p>
                </motion.div>

                <div className='projects'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className='project-card'>
                            <img src={project.image} alt={project.name} className='project-image' />
                            <h3 className='project-name'>{project.name}</h3>
                            <p className='project-description'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>
                                View Project
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
