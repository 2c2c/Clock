import React, {Component} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Switch,
  TimePickerAndroid
} from "react-native";
import {Button,Drawer,Toolbar,Icon} from "react-native-material-design";
import dateFns from "date-fns";

//androids timepicker gives an hour and minute integer
//creating a fake date makes for easier conversion
const AlarmList = props => (
  <ListView
    dataSource={props.dataSource}
    renderRow={data => (
        <View>
          <Text>
            {
            dateFns.format(
              new Date(1999, 1, 1, data.hour, data.minute),
              "h:mm A"
            )
          }
          </Text>
        </View>
      )}
  />
);

export default AlarmList;
