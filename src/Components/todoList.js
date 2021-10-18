import React, {Component} from 'react';
import TodoItem from './todoItem';


export default class TodoList extends Component{
    render(){

        const {varItems, varClearList, varHandleDelete, varHandleEdit} = this.props

        return(
            <div>
        <ul className="list-group my-5" >
        <h3 className="text-capitalize text-center">
            todo list 
        </h3>
       
        {varItems.map(mapItem => {
            // we are  having varHandleDelete2 and varHandleEdit as other  variables  rather than varHandleDelete and varHandleEdit because we are going  to pass them as variables to the TodoItems components
             return <TodoItem varHandleDelete2 = { () =>varHandleDelete(mapItem.id)}
             varHandleEdit2 = { () =>varHandleEdit(mapItem.id)} 
        key={varItems.id} 
        title={mapItem.item} 
        
        /> 
         })}

        <button type="button" className="btn-sm btn-danger btn-block mt-5" 
        onClick={varClearList} >
           Clear List
        </button>
        </ul>
        </div>
        )
    }
}