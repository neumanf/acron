import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import Header from '../../components/Header/header.component'

import './about.styles.scss'

const About = (props) => (
    <motion.div 
        className="about"
        style={props.pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={props.pageVariants}
        transition={props.pageTransition}
    >
        <Header />
        <div className="container">
            <div className="left-half">
                <div className="text">
                    <h1>Uma nova forma de organizar<br />seu planejamento acadêmico</h1>
                </div>
            </div>
            <div className="right-half">
                <p>
                ACRON permite-lhe criar rapidamente o melhor cronograma de acordo com as suas necessidades.<br /><br /> 
                Ao simplesmente inserir o nome da disciplina e seus horários disponíveis (os quais estão
                disponíveis durante o período de cadastramento), o aplicativo será capaz de computar todos 
                os cronogramas possíveis. <br /><br />Veja mais detalhes 
                <Link to="/usage"> aqui</Link>.
                </p>
            </div>
        </div>
    </motion.div>
)

export default About;