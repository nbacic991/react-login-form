import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';

class App extends Component {

  render() {
    const author = "Nemanja Bačić";
    return (
      <div className="login-form">
        <Form className="form"/>
        <div className="author">
            <h4>This form is created by <br/> {author}</h4>
        </div>
      </div>
    );
  }

}

export default App;
