import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MessageScreen extends Component{
 render(){
    return(
        <View
        style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
        <Text>Message</Text>
        </View>

    )
 }
}