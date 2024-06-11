import React from "react";
import { NativeBaseProvider} from "native-base";
import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from "src/theme";

import { Loading } from "@components/Loading";

import { Routes } from "../src/routes";

export default function Index() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#202024"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}
