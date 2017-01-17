import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  TimePickerAndroid,
  Picker
} from "react-native";
import {Button,Drawer,Toolbar,Icon,Avatar} from "react-native-material-design";
import DayIconSetter from "./DayIconSetter";

const Week = props => {
  if (!props.enabledDays) {
    return null;
  }

  return (
    <View style={props.style}>
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Su"
        enabled={props.enabledDays.su}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Mo"
        enabled={props.enabledDays.mo}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Tu"
        enabled={props.enabledDays.tu}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="We"
        enabled={props.enabledDays.we}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Th"
        enabled={props.enabledDays.th}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Fr"
        enabled={props.enabledDays.fr}
      />
      <DayIconSetter
        rowID={props.rowID}
        handleDayToggle={props.handleDayToggle}
        day="Sa"
        enabled={props.enabledDays.sa}
      />
    </View>
  );
};

export default Week;
