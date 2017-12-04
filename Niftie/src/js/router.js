import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import DashBoard from './dashboard.js';
import Menu from './menu.js';
import Triphistory from './triphistory.js';
import Login from './login.js';
import CreateAccount from './createAccount.js';
import Forgotpassword from './forgotpassword.js';
import Buyticket from './buyticket.js';
import AddCard from './addcard.js';
import Payment from './payment.js';
import Profile from './profile.js';
import Dropselect from './dropselect.js';

const Routes = () => (
  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "dashboard" component = {DashBoard} hideNavBar={true} {...this.props}  />
      <Scene key = "menu" component = {Menu} hideNavBar={true} panHandlers={null} />
      <Scene key = "triphistory" component = {Triphistory} hideNavBar={true} panHandlers={null} />
      <Scene key = "login" component = {Login} hideNavBar={true} panHandlers={null} initial/>
      <Scene key = "createAccount" component = {CreateAccount} hideNavBar={true} panHandlers={null} />
      <Scene key = "forgotpassword" component = {Forgotpassword} hideNavBar={true} panHandlers={null} />
      <Scene key = "buyticket" component = {Buyticket} hideNavBar={true} panHandlers={null} />
      <Scene key = "addcard" component = {AddCard} hideNavBar={true} panHandlers={null} />
      <Scene key = "payment" component = {Payment} hideNavBar={true} panHandlers={null} />
      <Scene key = "profile" component = {Profile} hideNavBar={true} panHandlers={null} />
      <Scene key = "dropselect" component = {Dropselect} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>
);

const styles = StyleSheet.create({
});

export default Routes
