import React from "react";
import {View,Text} from "react-native";

const TimerActivatedDisplay = props => {
  convertCountdown = time => {
    const {hours, minutes, seconds} = time;

    const new_seconds = seconds % 60
    const minute_carry = seconds > 60 ? 1 : 0;

    const new_minutes = minutes % 60 + minute_carry
    const hour_carry = minutes > 60 ? 1 : 0;

    const new_hours = hours + hour_carry

    return {hours: new_hours, minutes: new_minutes, seconds: new_seconds};
  };
  const hours = props.display.substring(0, 1);
  const minutes = props.display.substring(1, 3);
  const seconds = props.display.substring(3, 5);

  return <Text>text</Text>;
};
