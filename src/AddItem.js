import React, { Component } from 'react';


class AddItem extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = '';
    this.priceInput.value = ' ';
  }

    render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <h3> Add Item </h3>
         <input placeholder = "Name" ref = {nameInput => this.nameInput = nameInput} />
         <input placeholder = "Price" ref = {priceInput => this.priceInput = priceInput}/>
         <button> ADD </button>
         <hr />
      </form>
    );
  }
}

export default AddItem ;
