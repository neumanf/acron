import React from 'react';
import { motion } from 'framer-motion'

export const DisciplinesList = ({ disciplines, schedules, deleteDiscipline }) => (
    <div className="disciplines-list">
        {disciplines.map(discipline => (
            <motion.div
                key={disciplines.indexOf(discipline)}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div className="discipline-card">
                    <h4>{discipline}</h4>
                    <p>{schedules[disciplines.indexOf(discipline)]+ ' '}</p>
                    <button className="clicked" onClick={() => deleteDiscipline(disciplines.indexOf(discipline))}>
                        <i className='far fa-trash-alt'></i>
                    </button>
                </div>
            </motion.div>
        ))}
    </div>
)