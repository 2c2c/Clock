import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  Dimensions,
  TimePickerAndroid,
  Modal
} from "react-native";
import {Card,Button,Drawer,Toolbar,Icon} from "react-native-material-design";
import dateFns from "date-fns";
import ActionButton from "react-native-action-button";
import Week from "./Week";
import Screen from "./Screen";

export default class AlertModal extends React.Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.showModal}
        onRequestClose={() => {
            this.props.cancelAlarmDays(this.props.rowID);
            this.props.toggleModal(this.props.rowID);
          }}
      >
        <View style={{alignItems: "center", flexDirection: "column"}}>
          <Toolbar
            onIconPress={() => {
                this.props.cancelAlarmDays(this.props.rowID);
                this.props.toggleModal(this.props.rowID);
              }}
            icon="keyboard-backspace"
            title="Set Alarm"
          />
          <Text style={{marginTop: 54, fontSize: 60}}>
            {
              dateFns.format(
                new Date(
                  1999,
                  1,
                  1,
                  this.props.time.hour,
                  this.props.time.minute
                ),
                "h:mm A"
              )
            }
          </Text>
          <Week
            handleDayToggle={this.props.handleDayToggle}
            rowID={this.props.rowID}
            enabledDays={this.props.enabledDays}
            style={{flexDirection: "row"}}
          />
          <Button
            onPress={() => {
                this.props.confirmAlarmDays(this.props.rowID);
                this.props.toggleModal(this.props.rowID);
              }}
            style={{alignSelf: "flex-end"}}
            raised
            text="CONFIRM"
          />
        </View>
      </Modal>
    );
  }
}
