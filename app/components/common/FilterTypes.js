import React, { Component } from 'react';
import services from '../../utils/services';

class FilterTypes extends Component{
    constructor(props){
        super(props);

        this.state={filters : []};
        this.renderTypes = this.renderTypes.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let index = this.state.filters.indexOf(e.target.textContent), arr = this.state.filters;
        index > -1 ? arr.splice(index, 1) : arr.push(e.target.textContent);
        this.setState({filters : arr});
        this.props.filterTypes(arr.join(','));
    }

    renderTypes(items){
        let types = [];
        for(let j in items) {
            types.push(
                <span key={j} title={'Click to filter by ' + items[j].name} onClick={this.handleClick}
                      className={'filter-tag label ' + (services.in_array(items[j].name, this.state.filters) ? ' label-info ' : ' ')} >
                    {items[j].name}
                </span>);
        }
        return types;
    }

    render(){
        return(
            <div className="tag-group">
                {this.renderTypes(this.props.types)}
            </div>
        )
    }
}

export default FilterTypes;