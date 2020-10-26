import React, { Component } from 'react';
import AffirmeLogo from '../images/AffirmeLogo.jpg'

export default class Affirm extends Component {
  render() {
    return (
      <div>
      <img src={AffirmeLogo} alt="Affirm.e Logo"></img>
      <a href="https://twitter.com/affirm_e" target="_blank" rel="noopener noreferrer">Affirm.E</a>
      </div>
      )
    }
  }