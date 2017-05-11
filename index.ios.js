/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var PackageTabar = require('./Class/Main/packageTabbar');

export default class zhylTabbar extends Component {
  render() {
    return (
      <PackageTabar/>
    );
  }
}

AppRegistry.registerComponent('zhylTabbar', () => zhylTabbar);
