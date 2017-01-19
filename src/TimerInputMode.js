import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  TimePickerAndroid,
  Picker,
  Dimensions,
  TextInput
} from "react-native";
import {
  Card,
  Button,
  Drawer,
  Toolbar,
  Icon,
  Divider,
  Avatar
} from "react-native-material-design";
import dateFns from "date-fns";
import ActionButton from "react-native-action-button";
import Swiper from "react-native-swiper";
import KeypadNumber from "./KeypadNumber";
import TimerInputDisplay from "./TimerInputDisplay";


const TimerInputMode = props => {
  return (
    <View>
      <TimerInputDisplay clearDisplay={props.clearDisplay} display={props.display} />
      <View style={{flexDirection: "column", alignItems: "center"}}>
        <View style={{flexDirection: "row"}}>
          <KeypadNumber number="1" onPressKey={props.onPressKey} />
          <KeypadNumber number="2" onPressKey={props.onPressKey} />
          <KeypadNumber number="3" onPressKey={props.onPressKey} />
        </View>
        <View style={{flexDirection: "row"}}>
          <KeypadNumber number="4" onPressKey={props.onPressKey} />
          <KeypadNumber number="5" onPressKey={props.onPressKey} />
          <KeypadNumber number="6" onPressKey={props.onPressKey} />
        </View>
        <View style={{flexDirection: "row"}}>
          <KeypadNumber number="7" onPressKey={props.onPressKey} />
          <KeypadNumber number="8" onPressKey={props.onPressKey} />
          <KeypadNumber number="9" onPressKey={props.onPressKey} />
        </View>
        <View
          style={
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }
          }
        >
          <KeypadNumber number="0" onPressKey={props.onPressKey} />
        </View>
      </View>
    </View>
  );
};

export default TimerInputMode