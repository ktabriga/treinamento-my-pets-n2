import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Avatar from '../Components/Avatar'

class Playground extends React.Component {
  state = {
    count: 0,
    text: ''
  }

  handleClickMe = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleChangeText = text => {
    this.setState({ text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Label text='Nome'/>
        <Input 
          onChangeText={this.handleChangeText}
          value={this.state.text}/>
        <Label text={`cliquei ${this.state.count} vezes`}/>
        <Button 
          onPress={this.handleClickMe}
          title='Click me'/>
        <Avatar source={require('../Images/Avatar_Alien-128.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    padding: 15
  },
  primeiro: {
    flex: 2,
    backgroundColor: 'red'
  },
  segundo: {
    flex: 1,
    backgroundColor: 'green'
  }
})

export default Playground
