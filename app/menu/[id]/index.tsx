import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { menu } from "../../../constant";

const MenuDetail = () => {
  const { id } = useLocalSearchParams();

  const getData = menu.find((item) => item.id === id);

  return (
    <View className="flex-1">
      <View className=" z-10 mb-5">
        <Pressable
          className="h-10 w-10 mt-10 ml-5 z-10 absolute top-0"
          onPress={() => router.back()}
        >
          <Image
            source={require("../../../assets/arrow-left2.png")}
            className="h-full w-full"
          />
        </Pressable>
      </View>
      <LinearGradient
        colors={["#f297b8", "#e96c9a", "#e45085", "#e45085", "#e45085"]}
        className="h-full absolute w-full top-0 left-0 right-0 bottom-0"
        end={{ x: 2, y: 0.5 }}
      />

      <ScrollView className="bg-white m-3 rounded-tr-3xl rounded-tl-3xl rounded-br-md rounded-bl-md overflow-hidden">
        <View className="h-32 w-[70%] mt-2.5 overflow-hidden mx-auto border border-[#0CC0B8] rounded-2xl">
          <Image
            source={getData?.image}
            className="h-full w-full bg-center object-cover"
          />
        </View>
        <Text className="font-[Amaranth-Regular] text-xl text-primary text-center mt-1.5">
          Menu hari ke-{getData?.id}
        </Text>
        <View className="mt-1.5  px-2.5">
          <Text className="font-[Amaranth-Regular] text-2xl text-primary">
            {getData?.name}
          </Text>
          <View>
            <Text className="font-[Amaranth-Regular] text-lg text-primary pt-2.5 flex flex-col underline">
              Bahan :
            </Text>
            <Text className="font-[Amaranth-Regular] text-base text-primary flex flex-col">
              {getData?.ingredients}
            </Text>
          </View>
          <View>
            <Text className="font-[Amaranth-Regular] text-lg text-primary pt-2.5 flex flex-col underline">
              Bumbu {getData?.name} :
            </Text>
            <Text className="font-[Amaranth-Regular] text-base text-primary flex flex-col">
              {getData?.spices}
            </Text>
          </View>
          <View className="pb-7">
            <Text className="font-[Amaranth-Regular] text-lg text-primary pt-2.5 flex flex-col underline">
              Cara Membuat {getData?.name} :
            </Text>
            <Text className="font-[Amaranth-Regular] text-base text-primary flex flex-col">
              {getData?.steps}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuDetail;
