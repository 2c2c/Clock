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
import KeypadNumber from "./KeypadNumber";
import TimerInputDisplay from "./TimerInputDisplay";
import TimerInputMode from "./TimerInputMode";

export default class extends React.Component {
  state = {
    activated: false,
    key: null,
    display: "00000",
    hours: null,
    minutes: null,
    seconds: null
  };

  clearDisplay() {
    this.setState({display: "00000"});
  }
  // display can receive input that overflow minute or second property
  // ie change 80s -> 1m 20s
  removeOverflow(time) {
    const {hours, minutes, seconds} = time;

    const new_seconds = seconds % 60;
    const minute_carry = seconds > 60 ? 1 : 0;

    const new_minutes = minutes % 60 + minute_carry;
    const hour_carry = minutes > 60 ? 1 : 0;

    const new_hours = hours + hour_carry;

    return {hours: new_hours, minutes: new_minutes, seconds: new_seconds};
  }

  //converts string based display to numerical hours,mins,seconds used in actual countdown
  convertDisplay() {
    const {display} = this.state;
    const hours = Number(display.substring(0, 1));
    const minutes = Number(display.substring(1, 3));
    const seconds = Number(display.substring(3, 5));

    const {new_hours, new_minutes, new_seconds} = this.removeOverflow({
      hours,
      minutes,
      seconds
    });
    this.setState({
      hours: new_hours,
      minutes: new_minutes,
      seconds: new_seconds
    });
  }

  decrement() {
    const {hours, minutes, seconds} = this.state;

    const new_seconds = seconds === 0 ? 59 : seconds - 1;
    const carry_minute = seconds === 0 ? 1 : 0;

    const new_minutes = minutes === 0 && !!carry_minute
      ? 59
      : minutes - carry_minute;
    const carry_hour = minutes === 0 && !!carry_minute ? 1 : 0;

    const new_hours = hours - carry_hour;

    this.setState({
      hours: new_hours,
      minutes: new_minutes,
      seconds: new_seconds
    });
  }

  startCountdown() {
    const ONE_SECOND = 1000;
    const key = setInterval(
      () => {
        this.decrement();
      },
      ONE_SECOND
    );

    this.setState({key});
  }

  onPressKey(key) {
    console.log(key);
    let new_display = this.state.display.substring(1, 5);
    new_display += key;

    this.setState({display: new_display});
  }

  render() {
    const {display} = this.state;
    return (
      <Card
        style={
          {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            width: Dimensions.get("window").width
          }
        }
      >
        <TimerInputMode
          display={display}
          clearDisplay={() => this.clearDisplay()}
          onPressKey={key => this.onPressKey(key)}
        />
      </Card>
    );
  }
}
