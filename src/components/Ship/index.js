import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  PanResponder,
  Animated,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

export default class Draggable extends Component {
  constructor() {
    super();
    this._val = { x: 0, y: 0 };

    this.state = {
      pan: new Animated.ValueXY(),
      shipDirection: false,
    };
  }

  componentWillMount() {
    // Add a listener for the delta value change

    this.getPan().addListener((value): void => {
      this._val = value;
    });

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (): boolean => true,
      onMoveShouldSetPanResponder: (): boolean => true,
      onMoveShouldSetPanResponderCapture: (): boolean => true,
      onPanResponderMove: Animated.event([
        null,{ dx: this.getPan().x, dy: this.getPan().y },
      ]),
      onPanResponderGrant: (event, gesture): void => {
        this.getPan().setOffset(this._val);
        this.getPan().setValue({ x: 0, y: 0 });
      },
      onPanResponderRelease: (event, gesture): void => {
        // console.log(event.nativeEvent);
        // if (gesture.dx < 0 || gesture.dy < 0) {
        //   Animated.spring(this.getPan(), {
        //     toValue: {x: 0, y: 0},
        //     friction: 5,
        //   }).start();
        // }
      }
    });
  }

  getPan() {
    const { pan } = this.state;
    return pan;
  }

  render() {
    const panStyle = {
      transform: this.getPan().getTranslateTransform(),
    };

    const { shipDirection } = this.state;


    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle]}
      >
        <TouchableWithoutFeedback
          onPress={() => this.setState({shipDirection: !shipDirection})}
        >
          <View
            style={{backgroundColor: 'red', alignSelf: 'flex-start', flexDirection: shipDirection ? 'column' : 'row'}}>
            <View style={styles.circle}>

            </View>
            <View style={styles.circle}>

            </View>
          </View>
        </TouchableWithoutFeedback>


      </Animated.View>

    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});