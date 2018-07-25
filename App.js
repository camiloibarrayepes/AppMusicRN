import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Animated,
  PanResponder,
  ScrollView,
  Image,
  Slider
} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDHT = Dimensions.get('window').width

class AppMusic extends Component{

  componentWillMount(){
    this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 })
  }

  render(){

    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    }

    return(
    <Animated.View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={[animatedHeight, {
                position: 'absolute', 
                left:0, 
                right:0,
                zIndex:10, 
                backgroundColor: 'white', 
                height: SCREEN_HEIGHT}]}
      >

      <Animated.View
        style={{height:80, borderTopWidth:1, borderTopColor:'#ebe5e5',
                flexDirection:'row', alignItems: 'center'}}
      >
        <View style={{flex:4, flexDirection:'row', alignItems:'center'}}
        >
          <Animated.View style={{height:32, width:32, marginLeft:10}}>
            <Image style={{flex:1, width:null, height:null}}
            source={require('./assets/greenday.jpeg')} />
          </Animated.View>
          <Animated.Text style={{opacity:1, fontSize: 18, paddingLeft: 10}}>
            Green Day - American Idiot
          </Animated.Text>
        </View>
        <Animated.View style={{opacity: 1, flex: 1, flexDirection:'row'}}>
          <IonIcons name="md-pause" size={32} />
          <IonIcons name="md-play" size={32} />
        </Animated.View>
      </Animated.View>
      </Animated.View>
    </Animated.View>      
    );
  }
}

export default AppMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})