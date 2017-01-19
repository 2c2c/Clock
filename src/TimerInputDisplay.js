import React from "react";
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
  TouchableNativeFeedback,
  Modal
} from "react-native";
import {Card,Button,Drawer,Toolbar,Icon} from "react-native-material-design";

const TimerInputDisplay = props => {
  const hours = props.display.substring(0, 1);
  const minutes = props.display.substring(1, 3);
  const seconds = props.display.substring(3, 5);

  return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <Text>
        <Text style={{fontSize: 50}}>{hours}</Text>
        <Text style={{alignSelf: "flex-end"}}>h</Text>
        <Text style={{fontSize: 50}}>{minutes}</Text>
        <Text style={{alignSelf: "flex-end"}}>m</Text>
        <Text style={{fontSize: 50}}>{seconds}</Text>
        <Text style={{alignSelf: "flex-end"}}>s</Text>
      </Text>
      <View style={{alignSelf: "center"}}>
        <TouchableOpacity onPress={() => props.clearDisplay()}>
          <Icon name="cancel" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimerInputDisplay;
