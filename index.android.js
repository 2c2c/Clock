/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  TextInput
} from "react-native";
import {Button,Drawer,Toolbar,Icon,Avatar} from "react-native-material-design";
import dateFns from "date-fns";
import Clock from "./src/Clock";
import ActionButton from "react-native-action-button";
import Screen from "./src/Screen";
import AlarmList from "./src/AlarmList";
import DayIconSetter from "./src/DayIconSetter";
import DayIcon from "./src/DayIconSetter";
import Week from "./src/Week";
import Timer from "./src/Timer";

import Swiper from "react-native-swiper";

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: "#9DD6EB"
  },
  slide2: {flex: 1, backgroundColor: "#97CAE5"},
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {color: "#fff", fontSize: 30, fontWeight: "bold"}
});

class rntest extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <Screen style={styles.slide1} titlewtf="Clock">
          <Clock />
        </Screen>
        <Screen style={styles.slide1} titlewtf="Alarm">
          <View style={{paddingTop: 54}}>
            <AlarmList />
          </View>
        </Screen>
        <Screen style={styles.slide1} titlewtf="Timer">
          <Text>Timer</Text>
        </Screen>
        <Screen style={styles.slide1} titlewtf="Stopwatch">
          <Text>STopwatch</Text>
          <Week style={{ flexDirection: "row" }} />
        </Screen>
        <View style={styles.slide3}>
          <Timer />
        </View>
      </Swiper>
    );
  }
}

// <Week style={{flexDirection: "row"}} />
// <TextInput
//   keyboardType="numeric"
//   style={{height: 40, borderColor: "gray", borderWidth: 1}}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />
// <Button text="asdf" onPress={this.dateTimePicker.bind(this)} />
AppRegistry.registerComponent("rntest", () => rntest);
