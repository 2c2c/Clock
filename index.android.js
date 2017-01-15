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
  Picker
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

import Swiper from "react-native-swiper";

var styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.items = [];
    this.count = 0;
    this.state = {language: "", dataSource: ds.cloneWithRows(this.items)};
  }

  addToAlarmList(hour, minute) {
    const time = {hour, minute}
    const days = {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    }
    this.items = this.items.concat([{name: "item" + this.count, time, days}]);
    this.count++;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.items)
    });
  }

  async dateTimePicker() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        // Will display '2 PM'
        is24Hour: false
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.addToAlarmList(hour, minute);
        console.log(items);
        //create new item in ListView
        //name, time contents, off state
      }
    } catch ({code, message}) {
      console.warn("Cannot open time picker", message);
    }
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <Screen style={styles.slide1} titlewtf="Clock">
          <Clock />
        </Screen>
        <Screen style={styles.slide1} titlewtf="Alarm">
          <View style={{paddingTop: 54}}>
            <AlarmList dataSource={this.state.dataSource} />
          </View>
          <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={this.addToAlarmList.bind(this)}
          />
        </Screen>
        <Screen style={styles.slide1} titlewtf="Timer">
          <Text>Timer</Text>
        </Screen>
        <Screen style={styles.slide1} titlewtf="Stopwatch">
          <Text>STopwatch</Text>
        </Screen>
        <View style={styles.slide3}>
          <Switch onValueChange={v => console.log("switch")} value={true} />
          <Button text="asdf" onPress={this.dateTimePicker.bind(this)} />
          <Week style={{flexDirection: "row"}} />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("rntest", () => rntest);
