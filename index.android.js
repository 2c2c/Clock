/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry,StyleSheet,Text,View,ListView,Switch} from "react-native";
import {Drawer,Toolbar,Icon} from "react-native-material-design";
import dateFns from "date-fns";
import Clock from "./src/Clock";
import ActionButton from "react-native-action-button";
import Screen from "./src/Screen";

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

    this.items = ["row1", "row2"];
    this.state = {dataSource: ds.cloneWithRows(this.items)};
  }

  addToAlarmList() {
    this.items = this.items.concat(["test"]);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.items)
    });
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <Screen style={styles.slide1} titlewtf="Clock">
          <Clock />
        </Screen>
        <Screen style={styles.slide1} titlewtf="Alarm">
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data => (
                <View>
                  <Text>{data}</Text>
                </View>
              )}
          />
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
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("rntest", () => rntest);
