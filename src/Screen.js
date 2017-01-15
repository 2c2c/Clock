import React from "react";
import {AppRegistry,StyleSheet,Text,View,ListView,Switch} from "react-native";
import {Drawer,Toolbar,Icon} from "react-native-material-design";

const Screen = props => (
  <View style={props.style}>
    <Toolbar icon="menu" title={props.titlewtf}/>
    {props.children}
  </View>
);

Screen.defaultProps = {title: React.PropTypes.string};

export default Screen;
