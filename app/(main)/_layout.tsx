import { Redirect, Stack, router } from "expo-router";
import { useSession } from "../../hooks/useAuth";
import { Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AppLayout() {
  const { isLoading, session } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={"/login/"} />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
      <View className="bg-white relative">
        <LinearGradient
          colors={["#E55287", "#F191B3"]}
          className="rounded-tr-3xl rounded-tl-3xl h-16 bg-transparent"
        />

        <View className="absolute top-3 left-0 right-0">
          <View className="flex flex-row mx-auto justify-center">
            <Pressable
              className="w-8 h-8"
              onPress={() => router.navigate("/(main)")}
            >
              <Image
                source={require("../../assets/tab/home.png")}
                className="w-full h-full"
              />
            </Pressable>
            <View className="w-8 h-8 mx-16">
              <Image
                source={require("../../assets/tab/chat.png")}
                className="w-full h-full"
              />
            </View>
            <Pressable
              className="w-8 h-8"
              onPress={() => router.navigate("/(main)/profile")}
            >
              <Image
                source={require("../../assets/tab/profile.png")}
                className="w-full h-full"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
