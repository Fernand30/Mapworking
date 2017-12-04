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
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Actions } from 'react-native-router-flux';

import styles from '../css/profileStyle'
import commonStyles from '../css/commonStyle'

const { width, height } = Dimensions.get('window');

const back = require('../assets/images/back.png');
const profile_logo = require('../assets/images/profile_logo.png');

export default class CustomMarkers extends React.Component {
  constructor(){
      super()
      this.state = {
        selectedIndex: 0,
      };
    }
  handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
    }
  goback(){
    Actions.pop()
  }
  godone(){

  }
  goBuyticket(){
    Actions.buyticket();
  }
  render() {
    return (
      <View style={commonStyles.container}>
          <View>
              <View style={styles.header}>
                  <TouchableOpacity style={{flex:1}} onPress={this.goback.bind(this)}>
                      <View style={{marginLeft:20,paddingTop:5,flexDirection:'row'}}>
                          <Image source={back}/>
                          <Text style={styles.backText}>Back</Text>
                      </View>
                  </TouchableOpacity>
                  <View style={{flex:1,}}>
                      <Text style={{textAlign:'center',fontSize:20}}>PROFILE</Text>
                  </View>
                  <TouchableOpacity style={{flex:1,}} onPress={this.godone.bind(this)}>
                      <View style={{flex:1,alignItems:'flex-end',paddingRight:20}}>
                          <Text style={styles.backText}>Edit</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.bodyView}>
              <View style={styles.firstname}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>FIRST NAME</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>Morgan</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>LAST NAME</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>Scheneiderlin</Text>
                </View>
              </View>
              <View style={{marginTop:40,marginLeft:40,marginRight:40,}}>
                    <Text style={{fontSize:12,}}>EMAIL</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>morganscheneiderlin@mail.com</Text>
              </View>
              <View style={{marginTop:40,marginLeft:40,marginRight:40,}}>
                    <Text style={{fontSize:12,}}>ADDRESS</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>Strawberry Hills 124</Text>
              </View>
              <View style={styles.eachView}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>POST CODE</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>2127</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>COUNTRY</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>Australia</Text>
                </View>
              </View>
              <View style={styles.eachView}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>STATE</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>NSW</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>PHONE NUMBER</Text>
                    <Text style={{marginTop:5,fontSize:18,}}>+61 3 9685 3777</Text>
                </View>
              </View>
              <View style={styles.security}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,}}>4DISIT_SECURITY PIN</Text>
                    <TextInput secureTextEntry={true} style={{marginTop:5,fontSize:18,}}></TextInput>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <TouchableOpacity>
                        <Text style={{marginTop:5,fontSize:16,color:'#fb3353'}}>change</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={{marginTop:30,marginLeft:40,marginRight:40}}>
                  <TouchableOpacity style={styles.signout}>
                      <Text style={{color:'#fb3353'}}>Sign Out</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}
