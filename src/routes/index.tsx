import { useContext } from 'react'
import { Box, useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { AuthContext } from '@contexts/AuthContext';

export function Routes(){
  const { colors } = useTheme();

  const contextData = useContext(AuthContext);
  console.log('usuario logado', contextData)

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return(
    <Box flex={1} bg='gray.700'>
      <NavigationContainer theme={theme} independent>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
