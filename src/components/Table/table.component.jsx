import React from 'react';

import './table.styles.scss';

export class Table extends React.Component {
    constructor(props){
      super(props);

      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = () => {
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = () => {
      const keys = this.getKeys();

      return keys.map((keyy, index)=>{
        return <th key={index} keyy={keyy}>{keyy.toUpperCase()}</th>
      })
    }
    
    getRowsData = () => {
      const items = this.props.data;
      const keys = this.getKeys();

      return items.map((row, index)=>{
        return <tr key={index} keyy={index}><RenderRow key={index} keyy={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div className="tables">
            <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowsData()}
            </tbody>
            </table>
          </div>
        );
    }
}

const RenderRow = (props) => {
  return props.keys.map((keyy, index) => {
    return <td key={index} keyy={props.data[keyy]}>{props.data[keyy]}</td>
  })
}