import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
import styles from '../css/buyticketStyle'
import commonStyles from '../css/commonStyle'

const ticket = require('../assets/images/ticket.png');
const minus = require('../assets/images/minuse.png');
const plus = require('../assets/images/plus.png');
const fromto = require('../assets/images/fromto.png');
const pulldown = require('../assets/images/pulldown.png');
const ticketBackground = require('../assets/images/ticketBackground.png');
const back = require('../assets/images/back.png');

export default class Logo extends React.Component {
  goAccountCreat(){
    Actions.createAccount();
  }
  login(){
    Actions.dashboard();
  }
  goForgotPassword(){
    Actions.forgotpassword();
  }
  goback(){
    Actions.pop();
  }
  ticketList(){
    var ticketList = ['1','2','3','4','5','6','7','8','9','10'];
    var returnLayout;
    var price = 0;
    var i = 0;
    var returnLayout = ticketList.map(function(item){
      i++;
      price+=10;
      return(
        <View style={{marginTop:10,alignItems:'center'}} key = {i}>
            <Image source={ticketBackground} style={{resizeMode:'cover'}}>
              <View style={styles.ticketView}>
                  <Text style={styles.priceText}>{price} TICKETS</Text>
                  <Text style={styles.priceValue}>Save ${price/2}</Text>
              </View>
              <View style={styles.forandbuyView}>
                <View>
                  <Text style={{backgroundColor:'transparent',fontSize:26}}>$8.50</Text>
                  <Text style={{backgroundColor:'transparent',fontSize:16}}>For 1 Ticket</Text>
                </View>
                <TouchableOpacity style={styles.buypack}>
                  <Text style={{backgroundColor:'transparent',color:'#ffffff'}}>Buy Pack</Text>
                </TouchableOpacity>
              </View>
          </Image>
        </View>
      );
    });

    return returnLayout;
  }

   render() {
    return (
      <View style={commonStyles.container}>
          <View style={styles.headerView}>
              <TouchableOpacity onPress={this.goback.bind(this)} style={{flex:1,marginLeft:10}}>
                  <View style={{flexDirection:'row'}}>
                    <Image source={back}/>
                    <Text style={{marginLeft:10,color:'#fb3353',fontSize:16}}>Back</Text>
                  </View>
              </TouchableOpacity>
              <View>
                  <Text style={{textAlign:'center',fontSize:16}}>BUY TICKETS</Text>
              </View>
              <View style={{flex:1}}>
              </View>
          </View>
          <View style={{alignItems:'center'}}>
              <Image source={ticket} style={{width:width-20,resizeMode:'cover'}}>
                  <View style={styles.selectService}>
                      <Text style={{backgroundColor:'transparent',fontSize:16}}>SELECTED SERVICE</Text>
                  </View>
                  <View style={{marginLeft:30,marginTop:10,flexDirection:'row'}}>
                      <View>
                          <Text style={{backgroundColor:'transparent',}}>FROM</Text>
                          <Text style={{marginTop:5,backgroundColor:'transparent',}}>Backstown-</Text>
                          <Text style={{marginTop:5,backgroundColor:'transparent',}}>Lidcombe Hospital</Text>
                      </View>
                      <View style={{marginLeft:20,alignItems:'center',justifyContent:'center'}}>
                          <Image source={fromto} />
                      </View>
                      <View style={{marginLeft:20}}>
                          <Text style={{backgroundColor:'transparent',}}>TO</Text>
                          <Text style={{marginTop:5,backgroundColor:'transparent',}}>Backstown</Text>
                          <Text style={{marginTop:5,backgroundColor:'transparent',}}>Local Area</Text>
                      </View>
                  </View>
              </Image>
          </View>
          <ScrollView>
              <Text style={{marginTop:50,textAlign:'center',fontSize:36}}>$18.00</Text>
              <View style={{flexDirection:'row',marginTop:120,justifyContent:'center'}}>
                  <View style={styles.minusButton}>
                      <TouchableOpacity>
                          <Image source={minus}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{marginLeft:10,marginRight:10,}}>
                      <Text style={{textAlign:'center',color:'#fb3353'}}>Tickets</Text>
                      <Text style={{textAlign:'center',marginTop:10,fontSize:26}}>2</Text>
                  </View>
                  <View style={styles.plusButton}>
                      <TouchableOpacity>
                          <Image source={plus}/>
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={{marginLeft:40,marginRight:40,marginTop:40,}}>
                    <TouchableOpacity style={styles.purchageButton}>
                        <Text style={{color:'#ffffff'}}>Purchage</Text>
                    </TouchableOpacity>
              </View>
              <Text style={{textAlign:'center',fontSize:16,marginTop:30,}}>Want to save money?</Text>
              <View style={{marginTop:10,alignItems:'center'}}>
                <TouchableOpacity>
                  <Image source={pulldown} />
                </TouchableOpacity>
              </View>
              <View style={{paddingLeft:30,paddingRight:30}}>
                {this.ticketList()}
              </View>
          </ScrollView>
      </View>
    );
  }
}
