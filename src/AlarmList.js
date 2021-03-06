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
import {Divider, Card,Button,Drawer,Toolbar,Icon} from "react-native-material-design";
import dateFns from "date-fns";
import ActionButton from "react-native-action-button";
import Week from "./Week";
import AlarmModal from "./AlarmModal";
import TextWeek from "./TextWeek";

//androids timepicker gives an hour and minute integer
//creating a fake date makes for easier conversion
export default class AlarmList extends React.Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.items = [];
    this.count = 0;
    this.state = {dataSource: ds.cloneWithRows(this.items)};
  }

  addToAlarmList(hour, minute) {
    const time = {hour, minute};
    const confirmedDays = {
      su: false,
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false
    };
    const displayDays = {
      su: false,
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false
    };
    const alarmEnabled = false;
    const showModal = false;
    this.items = this.items.concat([
      {
        name: "item" + this.count,
        time,
        confirmedDays,
        displayDays,
        alarmEnabled,
        showModal
      }
    ]);
    this.count++;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.items)
    });
  }

  handleDayToggle(rowID, day) {
    const lowercase_day = day.toLowerCase();
    this.items[rowID].displayDays[lowercase_day] = !this.items[rowID].displayDays[lowercase_day];

    // better way to copy? spread doesnt work
    const items_copy = JSON.parse(JSON.stringify(this.items));

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items_copy)
    });
  }

  cancelAlarmDays(rowID) {
    const confirmed_copy = JSON.parse(JSON.stringify(this.items[rowID].confirmedDays))
    this.items[rowID].displayDays = confirmed_copy

    const items_copy = JSON.parse(JSON.stringify(this.items))
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items_copy)
    });
  }

  confirmAlarmDays(rowID) {
    const display_copy = JSON.parse(JSON.stringify(this.items[rowID].displayDays))
    this.items[rowID].confirmedDays = display_copy

    const items_copy = JSON.parse(JSON.stringify(this.items))
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items_copy)
    });
  }

  handleAlarmToggle(rowID) {
    this.items[rowID].alarmEnabled = !this.items[rowID].alarmEnabled;

    // better way to copy? spread doesnt work
    const items_copy = JSON.parse(JSON.stringify(this.items));

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items_copy)
    });
  }

  async dateTimePicker() {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 7,
        minute: 0,
        // Will display '2 PM'
        is24Hour: false
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.addToAlarmList(hour, minute);
        //create new item in ListView
        //name, time contents, off state
      }
    } catch ({code, message}) {
      console.warn("Cannot open time picker", message);
    }
  }
  toggleModal(rowID) {
    this.items[rowID].showModal = !this.items[rowID].showModal;

    const items_copy = JSON.parse(JSON.stringify(this.items));

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items_copy)
    });
  }

  _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
    return <Divider key={`${sectionID}-${rowID}`} style={{alignSelf: "stretch"}}/>
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <View style={{width: Dimensions.get("window").width, flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity style={{}} onPress={(r) => this.toggleModal(rowID)}>
          <View>
            <Text style={{ fontSize: 30 }}>
              {
                dateFns.format(
                  new Date(
                    1999,
                    1,
                    1,
                    rowData.time.hour,
                    rowData.time.minute
                  ),
                  "h:mm A"
                )
              }
            </Text>
            <TextWeek enabledDays={rowData.confirmedDays} />
          </View>
        </TouchableOpacity>
        <View style={{ alignSelf: "center" }}>
          <Switch
            onValueChange={r => this.handleAlarmToggle(rowID)}
            value={rowData.alarmEnabled}
            />
        </View>
        <AlarmModal
          toggleModal={rowID => this.toggleModal(rowID)}
          showModal={rowData.showModal}
          cancelAlarmDays={(rowID) => this.cancelAlarmDays(rowID)}
          confirmAlarmDays={(rowID) => this.confirmAlarmDays(rowID)}
          handleDayToggle={(rowID, day) => this.handleDayToggle(rowID, day)}
          rowID={rowID}
          enabledDays={rowData.displayDays}
          time={rowData.time}
          />
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
        <ListView
          style={{width: Dimensions.get("window").width }}
          contentContainerStyle={{alignItems: "center" }}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeperator.bind(this)}
          />
        <ActionButton
          position="center"
          icon={<Icon color="#ffffff" name="add-alert" />}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.dateTimePicker()}
          />
      </View>
    );
  }
}

        // <ListView
        //   style={{height: Dimensions.get("window").height}}
        //   contentContainerStyle={{alignItems: "center"}}
        //   enableEmptySections
        //   dataSource={this.state.dataSource}
        //   renderRow={this._renderRow.bind(this)}
        // />