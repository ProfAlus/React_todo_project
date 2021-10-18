import React, { Component } from 'react';
import '../node_modules/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/todoList';
import TodoInput from './Components/todoInput';


export default class App extends Component {
    state = {
        items : [],
        id : 0,
        item : "",
        editItem : false
    }

    handleChange = e =>{
        this.setState({ 
            item : e.target.value
        })
    }

    
handleSubmit = e =>{
    e.preventDefault();

    const newItem = {
        id : this.state.id,
        item : this.state.item
    }
    

 const updatedItems = [...this.state.items, newItem];

 this.setState({ 
     items : updatedItems,
     id : this.state.id +11111,
     item : "",
     editItem : false
 }) 
}

clearList = () =>{
    this.setState({
        items : []
    })
     }

     handleDelete =(id)=>{
         const sortedItems = this.state.items.filter( varFilterItem => varFilterItem.id !== id);
       
         this.setState({
             items : sortedItems
         })
     }

     handleEdit = id =>{
        const filteredItems = this.state.items.filter( varFilterItem => varFilterItem.id !== id);
        
        const selectedItem = this.state.items.find(findItem => findItem.id === id)
        
        this.setState({
            items : filteredItems,
            item : selectedItem.item,
            editItem : true,
            id : id
        })
     }

    render() {
        return (
            <div className="container" >
            <div className="row">
             <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                  todo input
              </h3>
                <TodoInput varItem={this.state.item} 
                varHandleChange={this.handleChange} 
                varHandleSubmit={this.handleSubmit}
                varEditItem = {this.state.editItem}
                />
 
                <TodoList varItems={this.state.items} 
                varClearList={this.clearList}
                varHandleDelete={this.handleDelete}
                varHandleEdit = {this.handleEdit}
                />
            </div>
            </div>
              </div>
        )
    }
}

