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
import DatePicker from 'react-native-datepicker';
import styles from '../css/addcardStyle'
import commonStyles from '../css/commonStyle'

const { width, height } = Dimensions.get('window');

const calenderImage = require('../assets/images/ic_calendar.png');
const Visa_dark = require('../assets/images/Visa_dark.png');
const combo = require('../assets/images/Shape3.png');

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
              <View style={styles.navigaorbar}>
                  <TouchableOpacity style={{flex:1}} onPress={this.goback.bind(this)}>
                      <View style={{flex:1,marginLeft:20,paddingTop:5}}>
                          <Text style={styles.cancelText}>Cancel</Text>
                      </View>
                  </TouchableOpacity>
                  <View style={styles.tripTextView}>
                      <Text style={styles.tripText}>ADD CARD</Text>
                  </View>
                  <TouchableOpacity style={{flex:1,}} onPress={this.godone.bind(this)}>
                      <View style={{flex:1,marginRight:20,paddingTop:5}}>
                          <Text style={styles.doneText}>Done</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.bodyView}>
              <View style={styles.carddetail}>
                  <Text>Card Details</Text>
              </View>
              <View style={styles.cardnumber}>
                  <View>
                      <Text style={{fontSize:12}}>CARD NUMBER</Text>
                      <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
                  <Image source={Visa_dark}/>
              </View>
              <View style={styles.cardholder}>
                  <View>
                      <Text style={{fontSize:12}}>CARD HOLDER</Text>
                      <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
              </View>
              <View style={styles.dateView}>
                  <View style={{flex:1,marginRight:10,borderBottomWidth:1,borderBottomColor:'#fb3353',}}>
                      <Text style={{fontSize:10}}>EXP,DATE</Text>
                      <DatePicker
                          style={{width:15,}}
                          date="12/02/2016"
                          placeholder="select date"
                          format="MM-DD-YYYY"
                          confirmBtnText="DONE"
                          cancelBtnText="LIVE"
                          iconSource={calenderImage}
                          customStyles={{
                              dateIcon: {
                                width:20,height:20,marginLeft:90
                              },
                              dateInput: {
                                          height:20,
                                          width:50,
                                          marginLeft:180,
                                        },
                            }}
                          onDateChange={(date) => {
                          }}
                        />
                  </View>
                  <View style={{flex:1,marginLeft:10,borderBottomWidth:1,borderBottomColor:'#000000'}}>
                      <Text style={{fontSize:10}}>CVV CODE</Text>
                      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                          <TextInput secureTextEntry={true} style={{height:20,width:100,paddingTop:5,fontSize:30}}/>
                          <Text style={{marginTop:5,fontSize:16}}>?</Text>
                      </View>
                  </View>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.invaliddate}>Invalid Date</Text>
                  <Text style={styles.invaliddate}></Text>
              </View>
              <View style={styles.billingaddress}>
                  <Text>Billing Address</Text>
              </View>
              <View style={styles.billingphone}>
                  <View>
                      <Text style={{fontSize:12}}>BILLING PHONE</Text>
                      <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
              </View>
              <View style={styles.address}>
                  <View>
                      <Text style={{fontSize:12}}>ADDRESS</Text>
                      <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
              </View>
              <View style={styles.postcode}>
                  <View style={styles.postText}>
                        <Text style={{fontSize:10}}>POST CODE</Text>
                        <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
                  <View style={styles.postText}>
                        <Text style={{fontSize:10}}>COUNTRY</Text>
                        <TextInput style={{width:250,marginTop:5,fontSize:16}}></TextInput>
                  </View>
              </View>
              <View style={styles.stateView}>
                  <View style={styles.state}>
                      <View>
                          <Text style={{fontSize:10}}>STATE</Text>
                          <Text style={{marginTop:5,fontSize:18}}>NSW</Text>
                      </View>
                      <TouchableOpacity>
                          <Image source={combo}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{flex:1}}/>
              </View>
          </View>
      </View>
    );
  }
}
