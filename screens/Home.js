import React,{Component} from 'react';
import{
View, 
Text,
StyleSheet
} from "react-native";

export default class HomeScreen extends Component{
render(){
    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Text>Home Sceen</Text>
        </View>

    )
}    
}