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

const TimerActiveMode = props => {
  const formatTime = (hours, minutes, seconds) => {
    const new_seconds = String(seconds + 100).substring(1);
    const new_minutes = String(minutes + 100).substring(1);
    const new_hours = hours > 9
      ? String(hours + 100).substring(1)
      : String(hours + 10).substring(1);

    return {hours: new_hours, minutes: new_minutes, seconds: new_seconds};
  };

  const time = formatTime(props.hours, props.minutes, props.seconds);
  return (
    <Text style={{fontSize: 50}}>
      {time.hours} {time.minutes} {time.seconds}
    </Text>
  );
};

export default TimerActiveMode;
