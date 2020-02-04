import React, { Component } from 'react'
import {View, ScrollView,StyleSheet} from 'react-native'
import ButtonComponent from './HorizontalButtonComponent'
export default class Scrollcomponent extends Component {
    render() {
        return (
            <View>
                    <ScrollView contentContainerStyle={scrollStyle.scrollContainer}>
                        <ButtonComponent>                        
                        </ButtonComponent>
                    </ScrollView>
               
            </View>
        );
    }
}
const scrollStyle = StyleSheet.create ({
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 30,
        backgroundColor: 'yellow'
    }
})