import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    Bitcount: require("@/assets/fonts/Bitcount-Regular.ttf"),
    Lexend: require("@/assets/fonts/Lexend-Regular.ttf"),
    Cause: require("@/assets/fonts/Cause-Regular.ttf"),
    Mansalva: require("@/assets/fonts/Mansalva-Regular.ttf"),
    LexendBold: require("@/assets/fonts/Lexend-Bold.ttf"),
  });

  if (fontLoaded && !error) return <Stack />;
}
