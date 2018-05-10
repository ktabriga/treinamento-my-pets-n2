import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class PetListScreen extends React.Component {
  static navigationOptions = {
    title: 'Pets'
  }

  editPat = () => {
    this.props.navigation.navigate('petEditScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 1</Text>
        <Button 
          onPress={this.editPat}
          title='Editar Pet'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
