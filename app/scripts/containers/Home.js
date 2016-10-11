import { default as React, Component } from 'react';
import getUsers from '../actions/getUsers'

export default class Home extends Component {

  componentWillMount() {
    getUsers()
  }

  render() {
    return (
      <h1>Home</h1>

    );
  }
}

