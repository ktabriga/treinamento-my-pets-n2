import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default class Label extends React.Component {

  render() {
    const text = this.props.text.toUpperCase()
    return (
      <Text style={styles.label}>{text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'grey'
  }
})
