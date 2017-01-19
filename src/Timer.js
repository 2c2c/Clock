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
import TimerActiveMode from "./TimerActiveMode";

const styles = StyleSheet.create({
  timerScreen: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    width: Dimensions.get("window").width
  }
});

export default class extends React.Component {
  state = {
    activated: false,
    paused: false,
    key: null,
    display: "00000",
    hours: null,
    minutes: null,
    seconds: null
  };

  activateTimer() {
    this.setState({activated: true});
    this.startCountdown();
  }
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

    console.log({hours: new_hours, minutes: new_minutes, seconds: new_seconds});
    return {hours: new_hours, minutes: new_minutes, seconds: new_seconds};
  }

  //converts string based display to numerical hours,mins,seconds used in actual countdown
  convertDisplay(display) {
    const hours = Number(display.substring(0, 1));
    const minutes = Number(display.substring(1, 3));
    const seconds = Number(display.substring(3, 5));

    const time = this.removeOverflow({hours, minutes, seconds});

    this.setState({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds
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
    var key = setInterval(
      () => {
        const {hours, minutes, seconds} = this.state;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(key);
          return;
        }
        if (!this.state.paused) {
          this.decrement();
        }
      },
      ONE_SECOND
    );

    this.setState({key});
  }

  togglePauseState() {
    this.setState({paused: !this.state.paused});
  }
  destroyCountdown() {
    console.log("stop");
    clearInterval(this.state.key);
  }

  onPressKey(key) {
    let new_display = this.state.display.substring(1, 5);
    new_display += key;

    this.convertDisplay(new_display);

    this.setState({display: new_display});
  }

  render() {
    const {display, paused, activated, hours, minutes, seconds} = this.state;
    const renderInputMode = (
      <Card style={styles.timerScreen}>
        <TimerInputMode
          display={display}
          clearDisplay={() => this.clearDisplay()}
          onPressKey={key => this.onPressKey(key)}
        />
        <ActionButton
          onPress={() => this.activateTimer()}
          position="center"
          buttonColor="rgba(231,76,60,1)"
          icon={<Icon color="#ffffff" name="play-arrow" />}
        />
      </Card>
    );

    const renderActiveMode = (
      <Card style={styles.timerScreen}>
        <TimerActiveMode hours={hours} minutes={minutes} seconds={seconds} />
        <ActionButton
          onPress={() => this.togglePauseState()}
          position="center"
          buttonColor="rgba(231,76,60,1)"
          icon={
            paused
              ? <Icon color="#ffffff" name="play-arrow" />
              : <Icon color="#ffffff" name="pause" />
          }
        />
      </Card>
    );
    return activated ? renderActiveMode : renderInputMode;
  }
}
