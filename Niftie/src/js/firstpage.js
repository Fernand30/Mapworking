import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const logo = require('../assets/images/Page1.png');

class Logo extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },

});

module.exports = Logo;
