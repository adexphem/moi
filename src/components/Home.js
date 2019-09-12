import React, { Component } from 'react';

import maskedImg from '../masking.png';
import gS from './GlobalStyles';

export default class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/leap');
    }, 7000);
  }
  render() {
    return (
      <div>
        <div style={(gS.logoSize, gS.webGl)}>
          <img src={maskedImg} style={gS.webGl} alt="" />
        </div>
      </div>
    );
  }
}
