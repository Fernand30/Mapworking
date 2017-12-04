import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../css/loginStyle'
import commonStyles from '../css/commonStyle'

const background = require('../assets/images/login.png');
const mark = require('../assets/images/Mark.png');

export default class Logo extends React.Component {
  goAccountCreat(){
    Actions.createAccount();
  }
  login(){
    Actions.dashboard();
  }
  goForgotPassword(){
    Actions.forgotpassword();
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <Image source={background} style={commonStyles.imageStyle}>
            <View style={styles.totalView}>
                <View style={styles.mark}>
                    <Image source={mark} />
                </View>
                <View style={{flex:1}}>
                    <View style={styles.email}>
                      <Text style={styles.emailText}>Email</Text>
                      <TextInput style={styles.emailInput}/>
                    </View>
                    <View style={styles.pin}>
                      <Text style={styles.pinText}>4-digit PIN</Text>
                      <TextInput style={styles.pinInput}/>
                      <TouchableOpacity onPress={this.goForgotPassword.bind(this)}>
                          <Text style={styles.forgotPin}>FORGOT PIN?</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.login.bind(this)} style={styles.loginButton}>
                        <Text style={styles.onlyTextColor}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goAccountCreat.bind(this)} style={styles.createAccountButton}>
                        <Text style={styles.createAccountText}>Create an Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginFacebookButton}>
                        <Text style={commonStyles.smallText}>Login with</Text>
                        <Text style={commonStyles.bigText}>FACEBOOK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Image>
      </View>
    );
  }
}
