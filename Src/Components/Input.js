import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

export default class Input extends React.Component {

  render() {
    return (
      <TextInput 
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        underlineColorAndroid='transparent'
        style={styles.input}/>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'grey',
    borderBottomWidth: 1,
    color: 'grey'
  }
})

