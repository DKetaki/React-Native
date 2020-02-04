import React, { Component } from 'react'
import {View, FlatList, SafeAreaView, Dimensions,Text,TouchableWithoutFeedback,Image,Alert} from 'react-native'
export default class RecipeFlatListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeList:[]
         };
       }
       componentDidMount() {
        this.onLoad()
    }
    render() {
        return (
            <View style={{ flex: 1,alignContent: 'center'}}>
                  <FlatList 
                  data = {this.state.recipeList}
                  extraData={this.state}
                  renderItem={({ item }) => {
                    return <View style={{margin: 10, height: 150, width: Dimensions.get('window').width - 20,borderColor: 'black',borderRadius: 10,borderWidth:1,flexDirection: 'row'}}>
                         <Image
                            style={{flex:0.4,resizeMode : 'cover',borderRadius: 10}}
                            source={{uri: item.photo}}
                           />
                          <TouchableWithoutFeedback onPress={() => this.onPostClick(item)}>
                            <View style = {{flexDirection: 'column'}}>
                                 <Text style = {{margin: 10}}>Recipe: {item.name}</Text>
                                 <Text style = {{margin: 10}}>FullName: {item.firstName}{item.lastName}</Text>
                                 <Text style = {{margin: 10}}>Preparation Time: {item.preparationTime}</Text>
                                 <Text style = {{margin: 10}}>Serves: {item.serves}</Text>
                            </View>
                         </TouchableWithoutFeedback>
                    </View>
                }}
                style={{flex: 1 }}
                keyExtractor={(item) => item.recipeId}
                  >
                 </FlatList>
            </View>
        );
    }
    onLoad = () => {
        fetch('http://35.160.197.175:3006/api/v1/recipe/cooking-list',
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            return response.json()
        }).then((responseJSON) => {
            console.log(responseJSON)
            this.setState({recipeList: responseJSON})
        }).catch((error) => {
            console.log(error);
        })
    }
    onPostClick = (item) => {
        Alert.alert('Cheif ' + item.firstName, 'This is ' + item.name + ' Recipe')
    }
}