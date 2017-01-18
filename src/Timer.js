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
import KeypadNumber from "./KeypadNumber"

export default class extends React.Component {
  state = {display: "00000"};

  onPressKey(key) {
    console.log(key);
    let new_display = this.state.display.substring(1, 5);
    new_display += key;

    this.setState({display: new_display});
  }

  render() {
    const {display} = this.state;
    const formatted_display = `${display.substring(0,1)}h ${display.substring(1,3)}m ${display.substring(3,5)}s`
    return (
      <Card
        style={
          {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            width: Dimensions.get('window').width
          }
        }
        >
        <Text style={{ fontSize: 50, paddingBottom: 30 }}>
          {formatted_display}
        </Text>
        <View style={{
            flexDirection: "column",
            alignItems: "center",
        }}>
          <View style={{flexDirection: "row"}}>
            <KeypadNumber number="1" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="2" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="3" onPressKey={key => this.onPressKey(key)} />
          </View>
          <View style={{ flexDirection: "row", }}>
            <KeypadNumber number="4" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="5" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="6" onPressKey={key => this.onPressKey(key)} />
          </View>
          <View style={{ flexDirection: "row", }}>
            <KeypadNumber number="7" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="8" onPressKey={key => this.onPressKey(key)} />
            <KeypadNumber number="9" onPressKey={key => this.onPressKey(key)} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <KeypadNumber number="0" onPressKey={key => this.onPressKey(key)} />
          </View>
        </View>
      </Card>
    );
  }
}
