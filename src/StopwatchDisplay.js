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

const StopwatchDisplay = props => {
  getTimeSpan = elapsed => {
    const hours = hours > 9
      ? String(Math.floor(elapsed / 1000 / 60 / 60) + 100).substring(1)
      : String(Math.floor(elapsed / 1000 / 60 / 60) + 10).substring(1);

    const minutes = String(
      Math.floor(elapsed % (1000 * 60 * 60) / 60000) + 100
    ).substring(1);
    const seconds = String(
      Math.floor(elapsed % (1000 * 60) / 1000) + 100
    ).substring(1);
    const ms = String(Math.floor(elapsed % 1000 / 10) + 100).substring(1);

    return {hours, minutes, seconds, ms};
  };

  const {hours, minutes, seconds, ms} = getTimeSpan(props.elapsed);

  return (
    <Text style={{ fontSize: 50 }}>
      <Text>{hours} {minutes} {seconds} </Text>
      <Text style={{ fontSize: 20 }}>
        {ms}
      </Text>
    </Text>
  );
};

export default StopwatchDisplay;
