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
  TouchableHighlight
} from "react-native";
import {Button,Drawer,Toolbar,Icon,Avatar} from "react-native-material-design";

const DayIcon = props => (
  <TouchableHighlight onPress={() => props.onPress()}>
  <View>
    <Avatar
      text={props.day}
      backgroundColor={props.enabled ? "paperLime" : "#bbbbbb"}
    />
  </View>
  </TouchableHighlight>
);

export default DayIcon;
