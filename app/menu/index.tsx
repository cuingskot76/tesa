import { router } from "expo-router";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { menu } from "../../constant";

const Menu = () => {
  return (
    <View className="flex-1">
      <View className=" z-10 mb-5">
        <Pressable
          className="h-10 w-10 mt-10 ml-5 z-10 absolute top-0"
          onPress={() => router.back()}
        >
          <Image
            source={require("../../assets/arrow-left2.png")}
            className="h-full w-full"
          />
        </Pressable>
        <Text className="font-[Amaranth-Regular] text-primary text-3xl mt-16 text-center">
          Menu Makanan
        </Text>
      </View>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 20,
          marginBottom: 10
        }}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            className=" border border-primary h-52 rounded-tr-3xl overflow-hidden rounded-tl-3xl w-1/2"
            onPress={() =>
              router.navigate({
                pathname: "/menu/[id]/",
                params: { id: item.id }
              })
            }
          >
            <View className="w-full h-32">
              <Image
                source={item?.image}
                className="h-full w-full bg-center object-cover"
              />
            </View>
            <Text className="font-[Amaranth-Regular] text-2xl text-primary text-center mt-5">
              Menu hari ke-{item.id}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Menu;
