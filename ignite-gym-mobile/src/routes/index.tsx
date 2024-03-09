import { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";

import { AuthContext } from "@contexts/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { colors } = useTheme();

  const { user } = useAuth();

  console.log("USUARIO LOGADO => ", user);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg={"gray.700"}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
