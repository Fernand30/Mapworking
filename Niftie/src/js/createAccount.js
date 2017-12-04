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

import styles from '../css/createAccountStyle'
import commonStyles from '../css/commonStyle'

const background = require('../assets/images/login.png');
const mark = require('../assets/images/Mark.png');

export default class Logo extends React.Component {
  goback(){
    Actions.pop();
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <Image source={background} style={commonStyles.imageStyle}>
            <View style={{flex:1,}}>
                <View style={styles.mark}>
                    <Image source={mark} />
                </View>
                <View style={styles.firstName}>
                  <Text style={commonStyles.whiteText}>First Name</Text>
                  <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.textInputView}>
                  <Text style={commonStyles.whiteText}>Last Name</Text>
                  <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.textInputView}>
                  <Text style={commonStyles.whiteText}>Email Address</Text>
                  <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.textInputView}>
                  <Text style={commonStyles.whiteText}>4-digit PIN</Text>
                  <TextInput style={styles.textInput}/>
                </View>
                <TouchableOpacity style={styles.signButton}>
                    <Text style={commonStyles.whiteText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.byCreate}>
                    <Text style={commonStyles.smallText}>By Creating an account you agree to our</Text>
                    <Text style={commonStyles.smallText}>Terms of Use and Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goback.bind(this)} style={styles.backLogin}>
                    <Text style={commonStyles.bigText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </Image>
      </View>
    );
  }
}
