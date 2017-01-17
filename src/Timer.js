import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  TimePickerAndroid,
  Picker,
  TextInput
} from "react-native";
import { Button, Drawer, Toolbar, Icon, Avatar } from "react-native-material-design";
import dateFns from "date-fns";
import ActionButton from "react-native-action-button";
import Swiper from "react-native-swiper";

export default class extends React.Component {
  state = {
    display: '12345',
  };

  onKeyPress(key) {
    console.log(key)
  }

  render() {
    const {display} = this.state
    const formatted_display = `${display.substring(0,1)}h ${display.substring(1,3)}m ${display.substring(3,5)}s`
    return (
      <View>
        <Text>
          {formatted_display}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button text="1" onPress={() => this.onKeyPress(1)} />
          <Button text="2" onPress={() => this.onKeyPress(2)} />
          <Button text="3" onPress={() => this.onKeyPress(3)} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button text="4" onPress={() => this.onKeyPress(4)} />
          <Button text="5" onPress={() => this.onKeyPress(5)} />
          <Button text="6" onPress={() => this.onKeyPress(6)} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button text="7" onPress={() => this.onKeyPress(7)} />
          <Button text="8" onPress={() => this.onKeyPress(8)} />
          <Button text="9" onPress={() => this.onKeyPress(9)} />
        </View>
        <Button text="0" onPress={() => this.onKeyPress(0)} />
      </View>
    )
  }
}