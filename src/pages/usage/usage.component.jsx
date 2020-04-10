import React from 'react';
import { motion } from "framer-motion";

import Header from '../../components/Header/header.component';

import './usage.styles.scss';

const Usage = (props) => (
    <motion.div 
        className="usage"
        style={props.pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={props.pageVariants}
        transition={props.pageTransition}
    >
        <Header />
        <div className="video-container">
        <iframe 
            title="ACRON usage"
            width="768" 
            height="432" 
            src="https://www.youtube.com/embed/3JKtzKFzig8" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
        />
        </div>
    </motion.div>
)

export default Usage;