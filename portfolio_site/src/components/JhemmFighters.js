import React, { Component } from 'react';
import JhemmFightersLogo from '../images/JhemmFightersImage.png'

export default class JhemmFighters extends Component {
  render() {
    return (
      <div>
      <img src={JhemmFightersLogo} alt="kitten"></img>
      <a href="https://team-jhemm-fighters.github.io/jhemm-fighters/" target="_blank" rel="noopener noreferrer">JhemmFighters</a>
      </div>
      )
    }
  }