import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import RecipeFlatListComponent from './RecipeFlatListComponent';

export default function App() {
  return (
       <View style={styles.container}>
         <SafeAreaView>
            <RecipeFlatListComponent></RecipeFlatListComponent>
         </SafeAreaView>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loginButtonContainer: {
    top: 20,
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  loginButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});
