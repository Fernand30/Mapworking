import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import PageControl from 'react-native-page-control'
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'

import styles from '../css/dropselectStyle'
import commonStyles from '../css/commonStyle'
import moment from 'moment';
var now = moment().format('LLL');
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;
var i = 0;
const mylocation = require('../assets/images/MyLocation.png');
const location = require('../assets/images/Location.png');
const pickImg = require('../assets/images/leftPosition.png');
const dropImg = require('../assets/images/rightPosition.png');
const mapClose = require('../assets/images/mapClose.png');
const pickup = require('../assets/images/pickup.png');
const pick_up_active = require('../assets/images/pick_up_active.png');
const clock = require('../assets/images/clock.png');
const passenser = require('../assets/images/passenser.png');
const stop = require('../assets/images/stop.png');
const whitePassenger  = require('../assets/images/whitePassenger.png');
const unpick  = require('../assets/images/unpick.png');

const thinRoad =
    [ {latitude: LATITUDE+0.001,longitude: LONGITUDE-0.008},
      {latitude: LATITUDE-0.00045,longitude: LONGITUDE-0.006},
      {latitude: LATITUDE-0.00045,longitude: LONGITUDE-0.004},
      {latitude: LATITUDE-0.00045,longitude: LONGITUDE-0.003},
      {latitude: LATITUDE-0.00045,longitude: LONGITUDE-0.002},
      {latitude: LATITUDE+0.0003, longitude: LONGITUDE-0.0015}];
const thickRoad =
      [{latitude: LATITUDE+0.0003, longitude: LONGITUDE-0.0015},
      {latitude: LATITUDE,longitude: LONGITUDE-0.001} ,
      {latitude: LATITUDE-0.0002,longitude: LONGITUDE},
      {latitude: LATITUDE-0.0001,longitude: LONGITUDE+0.0005},
      {latitude: LATITUDE+0.0001,longitude: LONGITUDE+0.001},
      {latitude: LATITUDE+0.0002,longitude: LONGITUDE+0.002},
      {latitude: LATITUDE+0.0003,longitude: LONGITUDE+0.003},
      {latitude: LATITUDE+0.0004,longitude: LONGITUDE+0.004},
      {latitude: LATITUDE+0.0005,longitude: LONGITUDE+0.005},
      {latitude: LATITUDE+0.0006,longitude: LONGITUDE+0.006}];

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
      date:'Sun,09,09 12:45,am',
      hh:0,
      passenserFlag:0,
    };
  }
  mapClose(){
    Actions.pop();
  }
  pickUpDate(){
    this.setState({
      hh:0,
      passenserFlag:0,
    })
  }
  showPick(){
    this.setState({
      hh:130,
      passenserFlag:0,
    })
  }
  showPassenger(){
    this.setState({
      hh:0,
      passenserFlag:1,
    })
    let data = [];
    for(var i=1;i<100;i++){
        data.push(i);
    }

    Picker.init({
        pickerData: data,
        selectedValue: [1],
        pickerTitleText:'',
        onPickerConfirm: data => {
            console.log(data);
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
    Picker.show();
  }

  pickupList(){
    var pickList = [
      {'id':1,'pick':'31 Weeroona Rd'},
      {'id':2,'pick':'The University of Sidney'},
      {'id':3,'pick':'Lidcombe Railway St'},
      {'id':4,'pick':'Bankstown-Lidcombe Hospital'}
    ];
    var returnLayout;
    var returnLayout = pickList.map(function(item){
      if(item.id==1){
        return(
          <View style={{marginLeft:20,marginTop:10,}} key = {item.id}>
              <View style={{flexDirection:'row'}}>
                <View style={{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'#000000',alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:16,height:16,borderRadius:8,backgroundColor:'#fb3353'}} />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style={{marginLeft:20}}>{item.pick}</Text>
                </View>
              </View>
          </View>
        );
      }else if(item.id==4){
        return(
          <View style={{marginLeft:20,}} key = {item.id}>
              <View style={{height:20,borderLeftWidth:1,borderLeftColor:'#9a0820',marginLeft:10}} />
              <View style={{flexDirection:'row'}}>
                <View style={{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'#000000',alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:16,height:16,borderRadius:8,backgroundColor:'#fb3353'}} />
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style={{marginLeft:20}}>{item.pick}</Text>
                </View>
              </View>
          </View>
        );
      }else{
        return(
          <View style={{marginLeft:20,}} key = {item.id}>
              <View style={{height:20,borderLeftWidth:1,borderLeftColor:'#9a0820',marginLeft:10}} />
              <View style={{flexDirection:'row',}}>
                <View style={{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'#000000'}}/>
                <View style={{justifyContent:'center'}}>
                    <Text style={{marginLeft:20}}>{item.pick}</Text>
                </View>
              </View>
          </View>
        );
      }
    });

    return returnLayout;
  }

  handleIndexChange = (index) => {
      this.setState({
        selectedIndex: index,
      });
    }
  render() {
    return (
      <View style={commonStyles.container}>
        <View>
              <MapView
                style={{
                  width:width,
                  height:height-400,
                  backgroundColor:'#ff0000',
                }}
                initialRegion={this.state.region}
              >
                  <MapView.Marker
                    image={stop}
                    coordinate={{longitude: LONGITUDE-0.0077,latitude: LATITUDE+0.0014}}
                  />
                  <MapView.Marker
                    image={stop}
                    coordinate={{longitude: LONGITUDE-0.006,latitude: LATITUDE+0.0003}}
                  />
                  <MapView.Marker
                    image={stop}
                    coordinate={{longitude: LONGITUDE-0.004,latitude: LATITUDE}}
                  />
                  <MapView.Marker
                    image={pickImg}
                    coordinate={{longitude: LONGITUDE-0.0011,latitude: LATITUDE+0.0011}}
                  />
                  <MapView.Marker
                    image={stop}
                    coordinate={{longitude: LONGITUDE+0.0015,latitude: LATITUDE+0.00064}}
                  />
                  <MapView.Marker
                    image={stop}
                    coordinate={{longitude: LONGITUDE+0.004,latitude: LATITUDE+0.0009}}
                  />
                  <MapView.Marker
                    image={dropImg}
                    coordinate={{longitude: LONGITUDE+0.0063,latitude: LATITUDE+0.0014}}
                  />
                  <MapView.Marker
                    image={mylocation}
                    coordinate={{longitude: LONGITUDE-0.002,latitude: LATITUDE-0.002}}
                  />
                  <MapView.Marker
                    image={location}
                    coordinate={{longitude: LONGITUDE+0.005,latitude: LATITUDE-0.004}}
                  />

                  <MapView.Polyline
                    key={i++}
                    coordinates={thickRoad}
                    strokeColor="#ff0000"
                    strokeWidth={3}
                  />
                  <MapView.Polyline
                    key={i++}
                    coordinates={thinRoad}
                    strokeColor="#ff0000"
                    strokeWidth={1}
                  />

              </MapView>
          <View style={{position:'absolute',flexDirection:'row',}}>
                <View style={{flex:1}}/>
                <TouchableOpacity onPress= {this.mapClose.bind(this)} style={{marginTop:20,marginRight:20}}>
                    <Image source={mapClose}/>
                </TouchableOpacity>
           </View>
        </View>
        <View style={{
          backgroundColor:'white',
          borderColor:'#dee4e7',
          borderWidth:1
        }}>
          <View style={{borderBottomWidth:1,flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1}}>
                <View style={styles.dash1}>
                  <Image source={pickup} style={{marginLeft:10}}/>
                  <View style={{marginLeft:10}}>
                        <Text style={{marginTop:5,}}>PICK UP</Text>
                        <Text style={{marginTop:5}}>31 Weeroona</Text>
                        <Text style={{marginTop:5,marginBottom:5}}>Rd</Text>
                  </View>
                </View>
            </TouchableOpacity>
            <View style={styles.dash2}>
                <TouchableOpacity onPress={this.showPick.bind(this)} style={this.state.hh!=0?{backgroundColor:'#fb3353',flexDirection:'row',alignItems:'center'}:{backgroundColor:'white',flexDirection:'row',alignItems:'center'}}>
                    <Image source={this.state.hh!=0?pick_up_active:unpick} style={{marginLeft:10}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={this.state.hh!=0?{marginTop:5,color:'white'}:{marginTop:5,color:'black'}}>DROP OFF</Text>
                        <Text style={this.state.hh!=0?{marginTop:5,color:'white'}:{marginTop:5,color:'black'}}>Bankstown-</Text>
                        <Text style={this.state.hh!=0?{marginTop:5,marginBottom:5,color:'white'}:{marginTop:5,marginBottom:5,color:'black'}}>Lidcombu Hospital</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
          <View style={this.state.hh==0?{borderBottomWidth:0,height:this.state.hh,}:{borderBottomWidth:1,height:this.state.hh,}}>
            <ScrollView>
              {this.pickupList()}
            </ScrollView>
          </View>
          <View style={{flexDirection:'row',borderBottomWidth:1}}>
              <TouchableOpacity onPress={this.pickUpDate.bind(this)} style={{flex:1,}}>
                  <View style={{alignItems:'center',borderRightColor:"#000000",borderRightWidth:1}}>
                    <Image source={clock} style={{marginTop:10,}}/>
                    <Text style={{marginTop:10,marginBottom:10,textAlign:'center'}}>Pick Up Time and Date</Text>
                      <DatePicker
                              style={{width: 200}}
                              date={this.state.date}
                              mode="datetime"
                              placeholder="select date"
                              format="dddd,DD,MM hh:mm,a"
                              minDate="2016-05-01"
                              maxDate="2016-06-01"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  width:0,
                                  height:0,
                                },
                                dateInput: {
                                  marginLeft: 36,
                                  borderWidth:0,
                                }
                                // ... You can check the source to find the other keys.
                              }}
                              onDateChange={(date) => {this.setState({date: date})}}
                          />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showPassenger.bind(this)} style={this.state.passenserFlag==0?{flex:1,}:{flex:1,backgroundColor:'#fb3353'}}>
                  <View style={{alignItems:'center'}}>
                    <Image source={this.state.passenserFlag==0?passenser:whitePassenger} style={{marginTop:10,}}/>
                    <Text style={this.state.passenserFlag==0?{marginTop:10,marginBottom:10,textAlign:'center'}:{marginTop:10,marginBottom:10,textAlign:'center',color:'white'}}>1 passenger</Text>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={{fontSize:16,textAlign:'center',marginBottom:20}}>RIDE PRICING STARTING AT $6.50</Text>
                <View style={{marginLeft:40,marginRight:40,marginBottom:20,}}>
                    <TouchableOpacity style={{height:50,borderRadius:25,backgroundColor:'#fb3353',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'white'}}>Sign Up now to get 3 free rides</Text>
                    </TouchableOpacity>
                </View>
          </View>
      </View>
    );
  }
}

CustomMarkers.propTypes = {
  provider: MapView.ProviderPropType,
};
