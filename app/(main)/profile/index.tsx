import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1">
      <Pressable
        className="h-10 w-10 mt-10 ml-5 z-10"
        onPress={() => router.back()}
      >
        <Image
          source={require("../../../assets/arrow-left.png")}
          className="h-full w-full"
        />
      </Pressable>
      <LinearGradient
        colors={["#f297b8", "#e96c9a", "#e45085", "#e45085", "#e45085"]}
        className="h-full absolute w-full bg-sky-500 top-0 left-0 right-0 bottom-0"
        end={{ x: 2, y: 0.5 }}
      />

      <View className="mx-auto items-center">
        <Image className="rounded-full w-24 h-24 bg-gray" />
        <Text className="text-white font-[Amaranth-Regular] text-xl mt-2.5">
          Kartika Ayuningtyas
        </Text>
      </View>

      <View className="bg-white rounded-tr-3xl rounded-tl-3xl mt-10 flex justify-center items-center flex-1">
        <View className="flex flex-row items-center mx-auto gap-5 w-full ml-7">
          <Text className="font-[Amaranth-Regular] text-lg text-[#e6578983]">
            Firstname
          </Text>
          <Text className="font-[Amaranth-Regular] text-lg text-[#E6578A]">
            Kartika
          </Text>
        </View>
        <View className="flex flex-row items-center mx-auto gap-5 w-full ml-7">
          <Text className="font-[Amaranth-Regular] text-lg text-[#e6578983]">
            Lastname
          </Text>
          <Text className="font-[Amaranth-Regular] text-lg text-[#E6578A]">
            Ayuningtyas
          </Text>
        </View>
        <View className="flex flex-row items-center mx-auto gap-5 w-full ml-7">
          <Text className="font-[Amaranth-Regular] text-lg text-[#e6578983]">
            Birthday
          </Text>
          <Text className="font-[Amaranth-Regular] text-lg text-[#E6578A] pl-1">
            12-12-1998
          </Text>
        </View>
        <View className="flex flex-row items-center mx-auto gap-5 w-full ml-7">
          <Text className="font-[Amaranth-Regular] text-lg text-[#e6578983]">
            Email
          </Text>
          <Text className="font-[Amaranth-Regular] text-lg text-[#E6578A] pl-6">
            ayuningtyah123@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
