import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import Switch from 'react-native-customisable-switch';
import { Actions } from 'react-native-router-flux';

import styles from '../css/menuStyle'
import commonStyles from '../css/commonStyle'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
var i = 0;
const logo = require('../assets/images/Logo.png');
const header = require('../assets/images/header.png');
const face = require('../assets/images/face.png');
const trip = require('../assets/images/trip.png');
const payment = require('../assets/images/payment.png');
const profile = require('../assets/images/profile.png');
const contact = require('../assets/images/contact.png');
const notification =require('../assets/images/notification.png');
const close =require('../assets/images/close.png');
const front =require('../assets/images/ic_arrow_front.png');

    [ {latitude: LATITUDE-0.00045,longitude: LONGITUDE-0.002},
      {latitude: LATITUDE+0.0003, longitude: LONGITUDE-0.0015},
      {latitude: LATITUDE,longitude: LONGITUDE-0.001} ,
      {latitude: LATITUDE-0.0002,longitude: LONGITUDE},
      {latitude: LATITUDE-0.0001,longitude: LONGITUDE+0.0005},
      {latitude: LATITUDE+0.0001,longitude: LONGITUDE+0.001}];

export default class CustomMarkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }
  goTrip(){
    Actions.triphistory();
  }
  goPayment(){
    Actions.payment();
  }
  goProfile(){
    Actions.profile();
  }
  goback(){
    Actions.pop();
  }
  render() {
    return (
      <View style={commonStyles.container}>
          <View style={styles.headerView}>
              <View style={styles.flexheader}>
                    <View style={{flex:1,}}/>
                    <View style={{flex:1,alignItems:'center'}}>
                      <Image source={face}/>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={this.goback.bind(this)} style={styles.close}>
                            <Image source={close}/>
                        </TouchableOpacity>
                    </View>
              </View>
              <Text style={styles.headerText}>Morgan Schneiderlin</Text>
          </View>
          <View style={{flex:3,}}>
                <View style={styles.eachView}>
                      <View style={styles.listView}>
                          <Image source={trip} style={{marginLeft:20}}/>
                      </View>
                      <View style={styles.listLink}>
                            <TouchableOpacity onPress={this.goTrip.bind(this)}>
                                  <View style={styles.listLinkText}>
                                          <Text style={{fontSize:20,}}>Trips </Text>
                                          <Image source={front} />
                                  </View>
                            </TouchableOpacity>
                      </View>
                </View>
                <View style={styles.eachView}>
                      <View style={styles.listView}>
                          <Image source={payment} style={{marginLeft:20}}/>
                      </View>
                      <View style={styles.listLink}>
                            <TouchableOpacity onPress={this.goPayment.bind(this)}>
                                  <View style={styles.listLinkText}>
                                          <Text style={{fontSize:20,}}>Payment </Text>
                                          <Image source={front} />
                                  </View>
                            </TouchableOpacity>
                      </View>
                </View>
                <View style={styles.eachView}>
                      <View style={styles.listView}>
                          <Image source={profile} style={{marginLeft:20}}/>
                      </View>
                      <View style={styles.listLink}>
                            <TouchableOpacity  onPress={this.goProfile.bind(this)}>
                                  <View style={styles.listLinkText}>
                                          <Text style={{fontSize:20,}}>My Profile </Text>
                                          <Image source={front} />
                                  </View>
                            </TouchableOpacity>
                      </View>
                </View>
                <View style={styles.eachView}>
                      <View style={styles.listView}>
                          <Image source={contact} style={{marginLeft:20}}/>
                      </View>
                      <View style={styles.listLink}>
                            <TouchableOpacity>
                                  <View style={styles.listLinkText}>
                                          <Text style={{fontSize:20,}}>Contact Niftie </Text>
                                          <Image source={front} />
                                  </View>
                            </TouchableOpacity>
                      </View>
                </View>
                <View style={styles.eachView}>
                      <View style={styles.listView}>
                          <Image source={notification} style={{marginLeft:20}}/>
                      </View>
                      <View style={{flex:1,paddingBottom:25,marginLeft:20}}>

                                  <View style={{flexDirection:'row',paddingRight:20,justifyContent:'space-between'}}>
                                          <Text style={{fontSize:20,}}>Notifications </Text>
                                          <Switch
                                              activeBackgroundColor={'#fb3353'}
                                              inactiveBackgroundColor={'transparent'}
                                              activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                                              inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                                              switchWidth={50}
                                              switchHeight={30}
                                              switchBorderRadius={15}
                                              switchBorderColor={'rgba(200, 200, 200, 1)'}
                                              switchBorderWidth={1}
                                              buttonWidth={30}
                                              buttonHeight={30}
                                              buttonBorderWidth={1}
                                              buttonBorderColor={'rgba(200, 200, 200, 1)'}
                                              buttonBorderRadius={15}
                                              padding={false}
                                          />
                                  </View>
                      </View>
                </View>
          </View>

          <View style={{flex:1,justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.bookTrip}>
                <Text style={commonStyles.whiteText}>Book a Trip</Text></TouchableOpacity>
          </View>
      </View>
    );
  }
}

CustomMarkers.propTypes = {
  provider: MapView.ProviderPropType,
};
