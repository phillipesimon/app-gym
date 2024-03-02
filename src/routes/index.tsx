import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();

  return (
    <Box flex={1} bg={"gray.700"}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
