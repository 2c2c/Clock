import React from "react";
import {Dimensions, AppRegistry,StyleSheet,Text,View,ListView,Switch} from "react-native";
import {Drawer,Toolbar,Icon} from "react-native-material-design";

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: Dimensions.get("window").width
  }
});

const Screen = props => (
  <View style={styles.screen}>
    <Toolbar icon="menu" title={props.titlewtf}/>
    {props.children}
  </View>
);

export default Screen;
