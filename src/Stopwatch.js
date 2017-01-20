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
  stopwatch: {flex: 1, flexDirection: "column", justifyContent: "center"}
});

export default class Stopwatch extends React.Component {
  state = {
    start: null,
    prevElapsed: 0,
    activated: false,
    paused: false,
    elapsed: null,
    key: null
  };

  //diff = now - start - last diff
  //array of diffs to display
  tick() {
    if (!this.state.start) {
      this.setState({elapsed: 0});
      return;
    }
    var elapsed = Date.now() - this.state.start + this.state.prevElapsed;
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
    this.state.paused
      ? this.setState({
        paused: false,
        prevElapsed: this.state.elapsed,
        start: Date.now()
      })
      : this.setState({paused: true});
  }

  render() {
    const {paused, activated, elapsed} = this.state;
    const renderStopped = (
      <View style={styles.stopwatch}>
        <StopwatchDisplay activated elapsed={elapsed} />
        <ActionButton
          onPress={() => this.startStopwatch()}
          position="center"
          buttonColor="rgba(231,76,60,1)"
          icon={<Icon color="#ffffff" name="play-arrow" />}
        />
      </View>
    );

    const renderActivated = (
      <View style={styles.stopwatch}>
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
      </View>
    );
    return activated ? renderActivated : renderStopped;
  }
}
