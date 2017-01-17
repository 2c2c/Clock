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
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import {Button,Drawer,Toolbar,Icon,Avatar} from "react-native-material-design";
import DayIcon from "./DayIcon";

export default class DayIconSetter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.handleDayToggle(this.props.rowID, this.props.day)
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={.8}
        style={{height: 40, width: 40}}
        onPress={() => this.handleClick()}
      >
        <View>
          <DayIcon
            day={this.props.day}
            enabled={this.props.enabled}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
