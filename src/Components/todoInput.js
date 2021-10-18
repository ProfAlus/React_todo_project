import React, {Component} from "react";
//import { Button } from "react-bootstrap";

export default class TodoInput extends Component{
    render(){
        const {varItem, varHandleChange, varHandleSubmit, varEditItem} = this.props

        return(
        <div className="card card-body my-3">
            <form onSubmit={varHandleSubmit}>
        <div className="input-group">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>
                </div>
             <input type="text" className="form-control text-capitalize" placeholder="enter todo items"
             value = {varItem} onChange={varHandleChange} 
             />
        </div>
        <div className="list-group">  

        <button type="submit" className={varEditItem ? "btn-sm btn-block btn-success mt-3" : "btn-sm btn-block btn-primary mt-3"}>
           {varEditItem ? "Edit Item" : "Add Item"}
        </button>
        
        </div>
        </form>
        </div>
        )
    }
}