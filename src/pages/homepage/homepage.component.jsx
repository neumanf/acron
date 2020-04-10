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
                    <Link to="/about">Sobre</Link>
                    <Link to="/usage"><p>Como utilizar</p></Link>
                    <a href="mailto:guiYhmmoNshpDGAUr6@protonmail.com">Suporte</a>
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