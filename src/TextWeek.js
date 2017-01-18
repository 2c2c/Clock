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
  TouchableOpacity,
  Modal
} from "react-native";
import {Card,Button,Drawer,Toolbar,Icon} from "react-native-material-design";
import dateFns from "date-fns";
import ActionButton from "react-native-action-button";
import Week from "./Week";
import AlarmModal from "./AlarmModal";

const TextWeek = props => {
  const keys = Object.keys(props.enabledDays);
  const weekList = keys
    .filter(k => props.enabledDays[k])

    //3 character weekdays look a lot better
    .map(k => {
      {
        const mapping = {
          su: "Sun",
          mo: "Mon",
          tu: "Tue",
          we: "Wed",
          th: "Thu",
          fr: "Fri",
          sa: "Sat"
        };

        return mapping[k];
      }
    });

  return <Text>{weekList.join(", ")}</Text>;
};

export default TextWeek;
