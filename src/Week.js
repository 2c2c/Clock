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
import DayIconSetter from './DayIconSetter'

const Week = props => (
  <View style={props.style}>
    <DayIconSetter day="Su" />
    <DayIconSetter day="Mo" />
    <DayIconSetter day="Tu" />
    <DayIconSetter day="We" />
    <DayIconSetter day="Th" />
    <DayIconSetter day="Fr" />
    <DayIconSetter day="Sa" />
  </View>
);

export default Week