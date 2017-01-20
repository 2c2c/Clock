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
import StopwatchDisplay from "./StopwatchDisplay";

const styles = StyleSheet.create({
  timerScreen: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    width: Dimensions.get("window").width
  }
});

export default class Stopwatch extends React.Component {
  state = {activated: false, paused: false, elapsed: null, key: null};

  //diff = now - start - last diff
  //array of diffs to display
  tick() {
    if (!this.state.start) {
      this.setState({elapsed: 0});
      return;
    }
    var elapsed = Date.now() - this.state.start;
    this.setState({elapsed: elapsed});
  }

  startStopwatch() {
    this.setState({activated: true, start: Date.now()});

    const key = setInterval(
      () => {
        if (!this.state.paused) {
          this.tick();
        }
      },
      8
    );

    this.setState({key});
  }

  destroyStopwatch() {
    clearInterval(this.state.key);
    this.setState({activated: false, paused: false, elapsed: null, key: null});
  }

  togglePause() {
    this.setState({paused: !this.state.paused});
  }

  render() {
    const {paused, activated, elapsed} = this.state;
    const renderStopped = (
      <Card style={styles.timerScreen}>
        <StopwatchDisplay activated elapsed={elapsed} />
        <ActionButton
          onPress={() => this.startStopwatch()}
          position="center"
          buttonColor="rgba(231,76,60,1)"
          icon={<Icon color="#ffffff" name="play-arrow" />}
        />
      </Card>
    );

    const renderActivated = (
      <Card style={styles.timerScreen}>
        <StopwatchDisplay activated elapsed={elapsed} />
        <ActionButton
          onPress={() => this.togglePause()}
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
    return activated ? renderActivated : renderStopped;
  }
}
