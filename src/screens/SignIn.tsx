import { Image, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg={"gray.700"}>
      <Image
        source={BackgroundImg}
        alt="Pessoas pedalando"
        resizeMode="contain"
        position={"absolute"}
      />
    </VStack>
  );
}
