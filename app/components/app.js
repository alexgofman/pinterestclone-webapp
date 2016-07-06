import React, {Component} from 'react';

require("../styles/style.scss");

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}