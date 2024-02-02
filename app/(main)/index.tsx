import { View, Text } from "react-native";
import { Image } from "react-native";

const Homepage = () => {
  return (
    <View className="relative h-full bg-white pt-16">
      <View className="h-[500px] absolute top-0 left-0 right-0">
        <Image
          source={require("../../assets/wave.png")}
          className="w-full h-full"
        />
      </View>
      <View className="flex flex-row items-center justify-end px-5 gap-2.5">
        <Text className="text-white font-[Amaranth-Regular] text-base">
          Hallo Kartika
        </Text>
        <Image className="w-7 h-7 rounded-full bg-gray" />
      </View>

      <View className="px-10 mt-6 flex">
        <Text className="text-white font-[Amaranth-Regular] text-2xl font-bold">
          Hallo, Sahabat Tesa!
        </Text>
        <Text className="text-slate-200 font-[Amaranth-Regular] text-sm tracking-tighter mt-3">
          Sahabat Tesa (Terbebas Stunting), Program Infofatif persiapan Calon
          Ibu Hamil, Sebagai langkah awal pencegahan Stunting.
        </Text>
      </View>

      <View className="flex-1 justify-center items-center mx-auto flex">
        <View className="flex flex-row gap-7 mb-7">
          <View className="w-[115px] h-[115px] bg-blue flex items-center justify-center rounded-lg py-2.5 px-4">
            <Image source={require("../../assets/menu/2.png")} />
            <Text className="text-white font-[Amaranth-Regular] text-xs mt-1 font-bold uppercase">
              Pengingat
            </Text>
          </View>
          <View className="w-[115px] h-[115px] bg-yellow flex items-center justify-center rounded-lg py-2.5 px-4">
            <Image source={require("../../assets/menu/1.png")} />
            <Text className="text-white font-[Amaranth-Regular] text-xs mt-1 font-bold uppercase">
              Menu Hari Ini
            </Text>
          </View>
        </View>
        <View className="flex flex-row gap-7">
          <View className="w-[115px] h-[115px] bg-red_dark flex items-center justify-center rounded-lg py-2.5 px-4">
            <Image source={require("../../assets/menu/3.png")} />
            <Text className="text-white font-[Amaranth-Regular] text-xs mt-1 font-bold uppercase">
              Tubuhku
            </Text>
          </View>
          <View className="w-[115px] h-[115px] bg-green flex items-center justify-center rounded-lg py-2.5 px-4">
            <Image source={require("../../assets/menu/4.png")} />
            <Text className="text-white font-[Amaranth-Regular] text-xs mt-1 font-bold uppercase">
              Hipnoterapi
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Homepage;
