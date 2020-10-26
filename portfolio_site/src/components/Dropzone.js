import React, { Component } from 'react';
import DropZoneLogo from '../images/DropzoneLogo.png'

export default class Dropzone extends Component {
  render() {
    return (
      <div>
      <img src={DropZoneLogo} alt="Dropzone Logo"></img>
      <a href="https://thedropzone.netlify.app/" target="_blank" rel="noopener noreferrer">DropZone</a>
      </div>
      )
    }
  }