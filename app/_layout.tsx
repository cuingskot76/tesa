import { Slot } from "expo-router";
import { SessionProvider } from "../hooks/useAuth";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [_] = useFonts({
    "Amaranth-Regular": require("../assets/fonts/Amaranth-Regular.ttf")
  });

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
