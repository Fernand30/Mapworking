
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Router from './src/js/router.js';

export default class Niftie extends Component {
  render() {
    return (
      <Router />
    );
  }
}
AppRegistry.registerComponent('Niftie', () => Niftie);
