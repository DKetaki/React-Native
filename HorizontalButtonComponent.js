import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity,Text} from 'react-native'

export default class ButtonComponent extends Component {
    constructor (){
        super()
        this.state = {title: 'abc'}
    }
  render() {
    return (
        <View>
            <TouchableOpacity style = {StyleSheet.Button} onPress = {this.onClick}></TouchableOpacity>
        </View>
    );
  }
  onClick = () => {

  } 
}

const styles = StyleSheet.create ({
    Button: {
       flex: 1,
        backgroundColor: 'red',
        width: '40%',
        height: 30,
        borderRadius: 5
    }
})