import React from 'react'
import {Image, StyleSheet} from 'react-native'

export default class Avatar extends React.Component {

  render() {
    return (
      <Image
        style={styles.avatar}
        source={this.props.source}/>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
})

