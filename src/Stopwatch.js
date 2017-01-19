import React, {Component} from "react";
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
import TimerInputMode from "./TimerInputMode";
import TimerActiveMode from "./TimerActiveMode";

function getTimeSpan(elapsed) {
  const hours = String(Math.floor(elapsed / 1000 / 60 / 60) + 100).substring(1);
  const minutes = String(
    Math.floor(elapsed % (1000 * 60 * 60) / 60000) + 100
  ).substring(1);
  const seconds = String(
    Math.floor(elapsed % (1000 * 60) / 1000) + 100
  ).substring(1);
  const ms = String(elapsed % 1000 + 1000).substring(1);

  return {hours, minutes, seconds, ms};
}

//diff = now - start - last diff
//array of diffs to display
function tick() {
  var elapsed = Date.now() - this.state.start + this.state.diff;
  this.setState({elapsed: elapsed});
}

const Stopwatch = props => {
  return <Text>text</Text>;
};

export default Stopwatch