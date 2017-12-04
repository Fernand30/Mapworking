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

import styles from '../css/paymentStyle'
import commonStyles from '../css/commonStyle'

const { width, height } = Dimensions.get('window');

const back = require('../assets/images/back.png');
const plus = require('../assets/images/plus.png');
const ic_check = require('../assets/images/ic_check.png');
const master_dark = require('../assets/images/MasterCard-dark.png');
const visa_dark = require('../assets/images/Visa_dark.png');

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
  goDropselect(){
    Actions.dropselect();
  }
  goplus(){
    Actions.addcard()
  }
  goBuyticket(){
    Actions.buyticket();
  }
  render() {
    return (
      <View style={commonStyles.container}>
          <View>
              <View style={styles.headerView}>
                  <TouchableOpacity style={{flex:1}} onPress={this.goback.bind(this)}>
                      <View style={{marginLeft:20,paddingTop:5,flexDirection:'row'}}>
                          <Image source={back}/>
                          <Text style={styles.backText}>Back</Text>
                      </View>
                  </TouchableOpacity>
                  <View style={{flex:1,}}>
                      <Text style={{textAlign:'center',fontSize:20}}>PAYMENT</Text>
                  </View>
                  <TouchableOpacity style={{flex:1,}} onPress={this.goplus.bind(this)}>
                      <View style={{flex:1,alignItems:'flex-end',paddingRight:20}}>
                          <Image source={plus} />
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.bodyView}>
              <View style={styles.visa}>
                  <View style={{flexDirection:'row',paddingLeft:20,}}>
                      <Image source={visa_dark}/>
                      <Text style={{marginLeft:10,color:'#ffffff'}}>**** **** **** 8811</Text>
                  </View>
                  <Image source={ic_check} style={{marginRight:20}}/>
              </View>
              <View style={{paddingTop:20,paddingBottom:20,}}>
                  <View style={{flexDirection:'row',paddingLeft:20,}}>
                      <Image source={master_dark}/>
                      <Text style={{marginLeft:10,color:'#000000'}}>**** **** **** 2026</Text>
                  </View>
              </View>
              <View style={styles.tickets}>
                  <Text style={{fontSize:12,marginTop:20}}>33x Tickets</Text>
                  <Text style={{fontSize:26,}}>$7.50</Text>
              </View>
              <View style={styles.total}/>
              <View style={styles.totalView}>
                  <Text style={{fontSize:12,marginTop:20}}>Total:</Text>
                  <Text style={{fontSize:26,}}>$247.50</Text>
              </View>
              <View style={styles.total}/>
              <View style={{marginLeft:40,marginRight:40,marginTop:20,}}>
                  <TouchableOpacity onPress={this.goDropselect.bind(this)} style={styles.confirmButton}>
                      <Text style={{color:'#ffffff'}}>Confirm Payment</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}
