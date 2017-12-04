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
import Carousel from 'react-native-snap-carousel';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import PageControl from 'react-native-page-control'
import { Actions } from 'react-native-router-flux';

import styles from '../css/dashboardStyle'
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
const mylocation = require('../assets/images/MyLocation.png');
const location = require('../assets/images/Location.png');
const pickImg = require('../assets/images/leftPosition.png');
const dropImg = require('../assets/images/rightPosition.png');
const groupImg = require('../assets/images/Group5.png');
const multiPoly =
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
      selectedIndex: 0,
      pagenumber:1,
    };
  }
  goMenu(){
    Actions.menu();
  }
  onItemTap(){
    this.setState({pagenumber:this.state.pagenumber+1})
  }
  _renderItem ({item, index}) {
        return (
            <View>
                <Text>{ item.title }</Text>
            </View>
        );
    }
  handleIndexChange = (index) => {
      this.setState({
        selectedIndex: index,
      });
    }
  render() {
    return (
      <View style={commonStyles.container}>
        <View style={styles.headerView}>
          <View style={{flex:1}}/>
          <View style={styles.logoView}>
              <Image source={logo}/>
          </View>
          <View style={{flex:1,alignItems:'flex-end'}}>
            <TouchableOpacity onPress={this.goMenu.bind(this)}>
                <Image source={header} style={{marginRight:10}}/>
            </TouchableOpacity>
        </View>
        </View>
        <View>
              <MapView
                style={{
                  width:width,
                  height:height-300,
                  backgroundColor:'#ff0000',
                }}
                initialRegion={this.state.region}
              >
                  <MapView.Marker
                    image={pickImg}
                    coordinate={{latitude: LATITUDE+0.0001,longitude: LONGITUDE-0.0017}}
                  />
                  <MapView.Marker
                    image={dropImg}
                    coordinate={{latitude: LATITUDE+0.0007,longitude: LONGITUDE+0.0012,}}
                  />
                  <MapView.Marker
                    image={mylocation}
                    coordinate={{latitude: LATITUDE-0.002,longitude: LONGITUDE-0.002,}}
                  />
                  <MapView.Marker
                    image={location}
                    coordinate={{latitude: LATITUDE-0.004,longitude: LONGITUDE+0.005,}}
                  />

                  <MapView.Polyline
                    key={i++}
                    coordinates={multiPoly}
                    strokeColor="#ff0000"
                    strokeWidth={3}
                  />

              </MapView>
              <View  style={{
                position:'absolute',
                width:width-80,
                height:38,
                borderWidth:1,
                borderRadius:19,
                borderColor:'#ff0000',
                marginLeft:40,
                marginTop:10,
                marginRight:40,
              }}>
                <SegmentedControlTab
                  borderRadius={18}
                  marginLeft={30}
                  borderColor={'transparent'}
                  tabStyle={styles.tabStyle}
                  tabTextStyle ={{color:'#fb3353'}}
                  activeTabStyle ={styles.acchiveTab}
                  values={['Favourite Rides', 'All Rides']}
                  selectedIndex={this.state.selectedIndex}
                  onTabPress={this.handleIndexChange}
                />
                </View>
        </View>
        <View style={{
          shadowOffset: {width: 1,height: 1},
          shadowRadius: 5,
          shadowOpacity: 0.1,
          marginTop:10,
          marginLeft:5,
          marginRight:5,
          borderColor:'#dee4e7',
          borderWidth:1
        }}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.dash1}>
                <Text style={{marginTop:10,}}>08:27 am</Text>
                <Text style={{marginTop:10}}>Bankstown</Text>
                <Text style={{marginTop:10,marginBottom:10}}>Local Area</Text>
            </View>
            <View style={styles.dash2}>
                <Text style={{marginTop:10,}}>08:48 am</Text>
                <Text style={{marginTop:10}}>Bankstown-</Text>
                <Text style={{marginTop:10,marginBottom:10}}>Lidcombu Hospital</Text>
            </View>
          </View>
          <View style={styles.intantBook}>
                <TouchableOpacity style={styles.intantButton}>
                  <Text style={commonStyles.whiteText}>Instant Booking</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={{
            marginTop:25,
            marginLeft:(width-45)/2,
            position:'absolute'
          }}>
            <Image source={groupImg}/>
          </TouchableOpacity>
        </View>
        <PageControl style={styles.pagecontrol}
             numberOfPages={5}
             currentPage={this.state.pagenumber}
             hidesForSinglePage={true}
             pageIndicatorTintColor='gray'
             currentPageIndicatorTintColor='#fb3353'
             indicatorStyle={{borderRadius: 2}}
             currentIndicatorStyle={{borderRadius: 2}}
             indicatorSize={{width:4, height:4}}
             onPageIndicatorPress={this.onItemTap} />
      </View>
    );
  }
}

CustomMarkers.propTypes = {
  provider: MapView.ProviderPropType,
};
