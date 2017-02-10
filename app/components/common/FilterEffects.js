import React, { Component } from 'react';
import services from '../../utils/services';

class FilterEffects extends Component{
    constructor(props){
        super(props);

        this.state={name : ''};
        this.renderNames = this.renderNames.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({name : e.target.dataset.value});
        this.props.handleItem(e.target.dataset.value);
    }

    renderNames(items){
        let names = [];
        for(let j in items) {
            names.push(
                <li key={j} className={items[j].name === this.state.name ? "active" : ""} onClick={this.handleClick}>
                    <a data-value={items[j].name}>{items[j].name}</a>
                </li>);
        }
        names.unshift(<li key="-1" className={!this.state.name ? "active" : ""} onClick={this.handleClick}>
            <a data-value="">All names</a>
        </li>);

        return names;
    }

    render(){
        return(
        <div className="dropdown">
            <button className="btn btn-default" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { this.state.name || "All names" }
                <span className="caret">{}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dLabel">
                {this.renderNames(this.props.items)}
            </ul>
        </div>)
    }
}

export default FilterEffects;