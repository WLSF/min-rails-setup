import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppContainer extends Component {
  render() {
    return <div>Yay</div>
  }
}

export default connect()(AppContainer);
