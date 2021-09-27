import React, {Component} from 'react';
import './form.css';

class Form extends Component {
  state = {
    inputObject: {
      name: '',
      imageUrl: '',
      recipeUrl: '',
    },
    displayObject:{
      name: '',
      imageUrl: '',
      recipeUrl: '',
    }
  }
  onChange = (e, type) => {
    console.log(e.target.value, type);
    this.setState({
      inputObject: {
        ...this.state.inputObject,
        [type]: e.target.value
      }
    })
  }

  onSubmit = () => {
    this.setState({
      displayObject: this.state.inputObject
    });
  }

  render() {
    return (
        <div className="form">
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" onChange={(e) => {this.onChange(e, "name")}}/>
            <label htmlFor="imageUrl">image url:</label>
            <input type="text" id="imageUrl" onChange={(e) => {this.onChange(e, "imageUrl")}}/>
            <label htmlFor="recipeUrl">recipe url:</label>
            <input type="text" id="recipeUrl" onChange={(e) => {this.onChange(e, "recipeUrl")}}/>
            <button onClick={this.onSubmit}>submittt</button>
          </div>
          {/* { JSON.stringify(this.state.displayObject) } */}
          <div className="display-new-image">
            <p>{this.state.displayObject.name}</p>
            <a href={this.state.displayObject.recipeUrl}>
              <img alt='most recent entry' src={this.state.displayObject.imageUrl}/>
            </a>
          </div>
        </div>
  )}
}

export default Form;
