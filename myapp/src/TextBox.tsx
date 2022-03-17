import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';

function TextBox(props : {label : string, change : Function}) {
  return (
    <div className="TextBox">
        <label htmlFor="">{props.label}</label>
        <br />
        <input type="text" onChange={e => props.change(e.target.value)}></input>
        <br />
    </div>
  );
}

export default TextBox;
