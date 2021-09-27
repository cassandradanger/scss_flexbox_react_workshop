import React, {Component} from 'react';
import './form.scss';

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
          <div className="input-form">
            <label htmlFor="name">name:</label>
            <input type="text" id="name" onChange={(e) => {this.onChange(e, "name")}}/>
            <label htmlFor="imageUrl">image url:</label>
            <input type="text" id="imageUrl" onChange={(e) => {this.onChange(e, "imageUrl")}}/>
            <label htmlFor="recipeUrl">recipe url:</label>
            <input type="text" id="recipeUrl" onChange={(e) => {this.onChange(e, "recipeUrl")}}/>
            <button onClick={this.onSubmit}>SUBMIT</button>
          </div>
          {/* { JSON.stringify(this.state.displayObject) } */}
          <div className="display-new-image">
            {this.state.displayObject.name &&
              <span>
                <p>{this.state.displayObject.name}</p>
                <a href={this.state.displayObject.recipeUrl}>
                  <img alt='most recent entry' src={this.state.displayObject.imageUrl}/>
                </a>
              </span>
            }
          </div>
        </div>
  )}
}

export default Form;
