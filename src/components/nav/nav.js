import React, { Component } from 'react';
import './nav.css'
import Modal from '../usermodel/modal'

class Home extends Component {

  render() {
      return (
        <div className="sidebar">
            <Modal   id={5} />
            <div className="logo-nav">FLAMINGO</div>
        </div>
      );

    };
  }

export default Home;