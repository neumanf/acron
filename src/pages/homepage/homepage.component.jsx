import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
//import logo from '../../assets/logo.svg';

import './homepage.styles.scss';

const Homepage = (props) => {
    return (
        <div className="bg-wrapper">
            <motion.div 
                className="homepage animation"
                style={props.pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={props.pageVariants}
                transition={props.pageTransition}
            >
            <div className="hero-header">
                <div className="logo-container">
                    <Link to="/">
                        {/* <img src={logo} alt="logo-lf"/> */}
                        <h2>ACRON</h2>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><a href="/about">Sobre</a></li>
                        <li><a href="/usage">Como utilizar</a></li>
                        <li><a href="mailto:guiYhmmoNshpDGAUr6@protonmail.com">Suporte</a></li>
                    </ul>
                </nav>
            </div>
            <div className="hero">
                <h1 className="text">Automação e planejamento <br />à distância de um clique.</h1>
                <Link to="/app" style={{ textDecoration: 'none' }}>
                    <button className="btn"><span>COMECE JÁ</span></button>
                </Link>
            </div>
            </motion.div>
        </div>
    )
}

export default Homepage;