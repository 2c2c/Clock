import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  TimePickerAndroid,
  TouchableOpacity,
  TextInput
} from "react-native";
import {
  Card,
  Button,
  Drawer,
  Toolbar,
  Icon,
  Avatar
} from "react-native-material-design";

const KeypadNumber = props => {
  if (props.blank) {
    return (
      <Card style={{paddingLeft: 0, margin: -1, borderWidth: 0}}>
        <Button style={{fontSize: 40}} text=" " />
      </Card>
    );
  }

  return (
      <TouchableOpacity onPress={key => props.onPressKey(props.number)} style={{paddingTop: 10, paddingRight: 20, paddingLeft: 20, paddingBottom: 0}}>
        <Text style={{fontSize: 40}}>{props.number}</Text>
      </TouchableOpacity>
  );
};
// <Button
//   style={{fontSize: 40, flexDirection: 'row'}}
//   text={props.number}
//   onPress={() => props.onKeyPress(props.number)}
// />
export default KeypadNumber;
