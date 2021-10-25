import React,{Component} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native';
import Profile from "./screens/Profile";
import Messages from "../screens/MessageScreen"
import Consultations from "./screens/ConsulationScreen"
import Logout from "../screens/LogoutScreen";
import Home from "./screens/Home";

const Drawer = createDrawernavigator();

export default class DrawerNavigator extends Component{
   render(){
       return(
           <Drawer.Navigator
           drawerContentOprions = {{
               activeTintColor :"0ff1ce",
               itemStyle :{
                   marginVertical:5
               }
           }}>
              <Drawer.Screen
              />

           </Drawer.Navigator>
       )
   } 
}