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
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {Button,Drawer,Toolbar,Icon,Avatar} from "react-native-material-design";

const DayIcon = props => (
  <Avatar
    text={props.day}
    backgroundColor={props.enabled ? "paperLime" : "#bbbbbb"}
  />
);

export default DayIcon;
