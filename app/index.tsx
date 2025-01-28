import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import React from 'react'
import * as WebBrowser from 'expo-web-browser'


export default function Index() {
  return (
  <Redirect 
  href={'/Home'}
  
  
  />
  );
}
