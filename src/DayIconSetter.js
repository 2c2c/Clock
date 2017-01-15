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
import DayIcon from "./DayIcon";

export default class DayIconSetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {enabled: false};
  }

  handleClick() {
    console.log(this.state.enabled);
    this.setState({enabled: !this.state.enabled});
  }

  render() {
    return (
      <DayIcon
        day={this.props.day}
        enabled={this.state.enabled}
        onPress={this.handleClick.bind(this)}
      />
    );
  }
}
