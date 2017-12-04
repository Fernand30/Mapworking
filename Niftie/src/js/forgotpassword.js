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

import styles from '../css/forgotpasswordStyle'
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
                <View style={styles.markView}>
                    <Image source={mark} />
                </View>
                <Text style={styles.explainText1}>Well email your 4-Digit PIN to your</Text>
                <Text style={styles.explainText2}>registered email address</Text>

                <View style={styles.emailView}>
                  <Text style={commonStyles.whiteText}>Email</Text>
                  <TextInput style={styles.emailInput}/>
                </View>

                <TouchableOpacity style={styles.resetView}>
                    <Text style={commonStyles.whiteText}>Reset PIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.goback.bind(this)} style={styles.goback}>
                    <Text style={commonStyles.bigText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </Image>
      </View>
    );
  }
}
