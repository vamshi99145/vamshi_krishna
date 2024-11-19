import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {
   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }
  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Backend Developemnt</p>
                        <p className='services-desc'>I build strong and reliable backend systems that make websites run smoothly and efficiently</p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Frontend Development</p>
                        <p className='services-desc'>I create user-friendly, easy-to-use, and visually appealing websites that are easy to navigate and interact with.</p>
                    </div>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Product Optimization & Growth Strategy</p>
                        <p className='services-desc'>I optimize products and create growth strategies to improve performance, make things easier for users, and grow the business. </p>
                    </div>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Social Media Marketing & Brand Engagement </p>
                        <p className='services-desc'>I handle social media marketing and brand engagement to increase visibility, connect with people, and grow the brand. </p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
