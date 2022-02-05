import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filter: 'all'
        }
    }

    onUppdateFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');

        this.setState({filter})
        this.props.onUppdateFilter(filter)
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                className={this.state.filter === 'all'? "btn btn-light": "btn btn-outline-light"}
                type="button"
                data-filter="all"
                onClick={this.onUppdateFilter}>
                    Все сотрудники
                </button>
    
                <button 
                className={this.state.filter === 'rise'? "btn btn-light": "btn btn-outline-light"}
                type="button"
                data-filter="rise"
                onClick={this.onUppdateFilter}>
                    На повышение
                </button>
    
                <button 
                className={this.state.filter === 'salary'? "btn btn-light": "btn btn-outline-light"}
                type="button"
                data-filter="salary"
                onClick={this.onUppdateFilter}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;