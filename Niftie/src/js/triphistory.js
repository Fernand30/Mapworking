import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Actions } from 'react-native-router-flux';

import styles from '../css/tripStyle'
import commonStyles from '../css/commonStyle'

const { width, height } = Dimensions.get('window');

const selectStar = require('../assets/images/selectStar.png');
const unselectStar = require('../assets/images/unselectStar.png');
const back = require('../assets/images/back.png');

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
    Actions.pop();
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
                      <View style={styles.backView}>
                          <Image source={back} />
                          <Text style={styles.text2}>Back</Text>
                      </View>
                  </TouchableOpacity>
                  <View style={styles.tripTextView}>
                      <Text style={styles.tripText}>Trips</Text>
                  </View>
                  <View style={{flex:1}}/>
              </View>
          </View>
          <View style={styles.bodyView}>
            <View  style={styles.segemantView}>
              <SegmentedControlTab
                borderRadius={18}
                borderColor={'transparent'}
                tabStyle={styles.segmentTap}
                tabTextStyle ={{color:'#fb3353'}}
                activeTabStyle ={{borderRadius:18,backgroundColor:'#fb3353'}}
                values={['Favourites', 'Upcoming', 'History']}
                selectedIndex={this.state.selectedIndex}
                onTabPress={this.handleIndexChange}
              />
              </View>
              <View style={{flex:1,justifyContent:'space-between'}}>
                <View>
                    <View style={styles.eachView}>
                        <View>
                          <Text style={styles.commonText}>31 WeeroonaRd</Text>
                          <Text style={styles.commonText}>Backstown-Lidcombe Hospital</Text>
                          <Text style={styles.smallText}>AUG 12,2017,08:20 PM - 09:00 PM</Text>
                        </View>
                        <Image source={selectStar}/>
                    </View>
                    <View style={styles.eachView}>
                        <View>
                          <Text style={styles.commonText}>31 WeeroonaRd</Text>
                          <Text style={styles.commonText}>Backstown-Lidcombe Hospital</Text>
                          <Text style={styles.smallText}>AUG 12,2017,08:20 PM - 09:00 PM</Text>
                        </View>
                        <Image source={unselectStar}/>
                    </View>
                    <View style={styles.eachView}>
                        <View>
                          <Text style={styles.commonText}>31 WeeroonaRd</Text>
                          <Text style={styles.commonText}>Backstown-Lidcombe Hospital</Text>
                          <Text style={styles.smallText}>AUG 12,2017,08:20 PM - 09:00 PM</Text>
                        </View>
                        <Image source={unselectStar}/>
                    </View>
                  </View>
                    <View style={styles.bookTripButtonView}>
                      <TouchableOpacity onPress={this.goBuyticket.bind(this)} style={styles.bookTripButton}>
                          <Text style={{color:'#ffffff'}}>Book a Trip</Text>
                      </TouchableOpacity>
                    </View>
                </View>
          </View>
      </View>
    );
  }
}
