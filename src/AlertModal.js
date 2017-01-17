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

export default class AlertModal extends React.Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={true}
        onRequestClose={() => {
            alert("Modal has been closed.");
          }}
      >
        <View style={{marginTop: 22}}>
          <Text>hi</Text>
        </View>
      </Modal>
    );
  }
}