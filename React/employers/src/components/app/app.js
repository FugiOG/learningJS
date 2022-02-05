import { Component } from 'react';

import {v1 as uuidv1} from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: true, id: uuidv1()},
                {name: "Alex M.", salary: 1000, increase: true, rise: false, id: uuidv1()},
                {name: "Carl S.", salary: 6000, increase: false, rise: false, id: uuidv1()}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, rise: false, id: uuidv1()}
        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term, filter) => {
        let newItems;
        if (term.length === 0) {
            newItems = items;
        }else{
            newItems = items.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }

        if (filter === 'all'){
            return newItems;
        }
        if (filter === 'salary'){
            return newItems.filter(item =>  parseInt(item[filter]) > 1000);
        }

        return newItems.filter(item => item[filter])
    }

    onUppdateSearch = (term) => {
        this.setState({term})
    }

    onUppdateFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term, filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUppdateSearch={this.onUppdateSearch}/>
                    <AppFilter onUppdateFilter={this.onUppdateFilter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;