import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class PetEditScreen extends React.Component {
  static navigationOptions = {
    title: 'Edição Pet'
  }

  back = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 2</Text>
        <Button 
          onPress={this.back}
          title='Voltar'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
