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
            ]
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


    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;