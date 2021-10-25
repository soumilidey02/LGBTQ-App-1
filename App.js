import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Messages from "./screens/MessageScreen"
import Home from "./screens/Home";
import Profile from "./screens/Profile"
import Consultations from "./screens/ConsultationScreen"
import Login from "./screens/LoginScreen"
import Drawer from "./navigation/DrawerNavigator"

export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
