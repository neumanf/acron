import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { DisciplinesList } from '../../components/DisciplinesList/disciplines.component'
import { Table } from '../../components/Table/table.component';
import { 
    allPossibleCases,
    checkSchedules,
    generateTable
} from '../../handlers/utils';

import './acron.styles.scss';

class Acron extends Component {
    constructor(props){
        super(props);

        this.state = {
            discipline: '',
            schedule: '',
            disciplines: [],
            schedules: [],
            schedulesData: [],
            tablesNumber: 0,
            tableData: []
        }
    }

    generateTables = () => {
        const { disciplines, schedules, tablesNumber } = this.state;
        let sched = [];
        let tables = [];
        let i = 0;

        if(schedules.length === 0 || tablesNumber !== 0) return

        for(let mat of allPossibleCases(schedules))
            sched.push(mat.split(' '));

        sched = checkSchedules(sched);

        for(i = 0; i < sched.length; ++i)
            tables.push(generateTable(sched[i], disciplines));

        this.setState({ schedulesData: sched, tablesNumber: i, tableData: tables });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();

        const { discipline, schedule, disciplines, schedules } = this.state;

        if(discipline !== '' && !schedule.split(' ').map((s) => (/^[2-6]+[M|T|N][1-6]+$/.test(s))).includes(false))
            this.setState({ 
                disciplines: disciplines.concat(discipline),
                schedules: schedules.concat([schedule.split(' ')]),
                discipline: '',
                schedule: ''
            });
    }

    clearTables = () => {
        this.setState({ tablesNumber: 0, tableData: [] })
    }

    deleteDiscipline = (i) => {
        this.setState(state => {
            const disciplines = state.disciplines.filter((item, j) => i !== j);
            const schedules = state.schedules.filter((item, j) => i !== j);
            
            return {
                disciplines,
                schedules
            };
        })
    };

    render(){
        const { discipline, schedule, disciplines, schedules } = this.state;
        let tables = [];

        if(this.state.tablesNumber !== 0)
            for(let i = 0; i < this.state.tablesNumber; ++i)
                tables.push(
                    <motion.div
                        key={i}
                        className="tables"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <div className="table-disc">
                            {this.state.schedulesData[i].map((s, index) => (
                                <p key={index}>{disciplines[index]}: {s}</p>
                            ))}
                        </div>
                        <Table data={this.state.tableData[i]}/>
                    </motion.div>
                );

        return (
            <motion.div 
                className="acron"
                style={this.props.pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={this.props.pageVariants}
                transition={this.props.pageTransition}
            >
                <div className="header">
                    <Link className="logo-container" to="/">
                        {/* <Logo className="logo" /> */}
                        <h2>ACRON</h2>
                    </Link>
                    <button className="clear-btn clicked" onClick={this.clearTables}>LIMPAR</button>
                    <button className="run-btn clicked" onClick={this.generateTables}><span>EXECUTAR </span></button>
                </div>
                <div className="body">
                    <div className="left-half">
                        <div className="inputs">
                            <p>Nome da disciplina</p>
                            <input 
                                type="text" 
                                name="discipline" 
                                value={discipline} 
                                onChange={this.onChange}
                                placeholder="ex: Mecânica dos Fluidos"
                            />
                            <p>Horários disponíveis<span> (separados por espaços)</span></p>
                            <input 
                                type="text" 
                                name="schedule" 
                                value={schedule}
                                onChange={this.onChange}
                                placeholder="ex: 24M56 46T12 46N34"
                            />
                            <button className="add-disc clicked" onClick={this.onClick}>Adicionar disciplina</button>
                        </div>
                        <div className="disciplines">
                            <div className="title">
                                <h2>DISCIPLINAS</h2>
                            </div>
                            <DisciplinesList 
                                disciplines={disciplines}
                                schedules={schedules} 
                                deleteDiscipline={this.deleteDiscipline}
                            />
                        </div>
                    </div>
                    <div className="right-half">
                        <div className="chronograms">
                            <div className="title">
                                <h2>CRONOGRAMAS</h2>
                            </div>
                            <div className="tables">
                                {tables}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default Acron;