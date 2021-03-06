import React from 'react'
import {View, Text} from 'react-native'
import dateFns from 'date-fns'

export default class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTime: dateFns.format(new Date(), 'h:mm A')
    }
  }

  componentDidMount() {
    const ONE_SECOND = 1000
    setInterval(() => {
      this.setState({
        currentTime: dateFns.format(new Date(), 'h:mm A')
      })
    }, ONE_SECOND)
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 80}}>{this.state.currentTime}</Text>
      </View>
    )
  }
}
