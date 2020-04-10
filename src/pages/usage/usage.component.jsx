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
            <iframe title="ACRON - Como utilizar" width="640" height="480"
                src="https://youtu.be/3JKtzKFzig8">
            </iframe>
        </div>
    </motion.div>
)

export default Usage;