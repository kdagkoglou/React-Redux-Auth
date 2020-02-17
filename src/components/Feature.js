import React, { Component } from 'react';
import requireAuth from '../helpers/requireAuth';

class Feature extends Component {
  render() {
    return <div>This is the feature content</div>;
  }
}

export default requireAuth(Feature);
