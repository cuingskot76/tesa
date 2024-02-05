import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, Image, Switch, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["id"] = {
  monthNames: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ],
  dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
  dayNamesShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
};

LocaleConfig.defaultLocale = "id";

const Reminder = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reminderTime, setReminderTime] = useState(null);

  const getMarkedDates = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const markedDates = {};

    for (let dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      const dateStr = dt.toISOString().split("T")[0];
      if (dateStr === todayStr) {
        markedDates[dateStr] = {
          selected: true,
          selectedColor: "#96264f"
        };
      } else if (dt < today) {
        markedDates[dateStr] = {
          selected: true,
          selectedColor: "#E75D8F4D"
        };
      } else {
        markedDates[dateStr] = { selected: true, selectedColor: "#E75D8F" };
      }
    }

    return markedDates;
  };

  return (
    <View className="flex-1">
      <View className="flex-1 z-10">
        <Pressable
          className="h-10 w-10 mt-10 ml-5 z-10 absolute top-0"
          onPress={() => router.back()}
        >
          <Image
            source={require("../../assets/arrow-left2.png")}
            className="h-full w-full"
          />
        </Pressable>
        <LinearGradient
          colors={["#f297b8", "#e96c9a", "#e45085", "#e45085"]}
          className="h-full absolute w-full  top-0 left-0 right-0 bottom-0 "
          end={{ x: 2, y: 0.5 }}
        />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={["#f297b8", "#e96c9a", "#e45085", "#e45085", "#e45085"]}
          className="h-full absolute w-full  top-0 left-0 right-0 bottom-0 "
          end={{ x: 2, y: 0.5 }}
        />

        <View className="flex flex-row items-center gap-6 mt-10">
          <Image
            source={require("../../assets/reminder.png")}
            className="mt-4"
          />
          <View className="flex-1 flex gap-1.5 px-1.5">
            <Text className="font-[Amaranth-Regular] text-2xl text-white mt-4 font-bold">
              Pengingat Minum Tablet Fe
            </Text>
            <Text className="font-[Amaranth-Regular] text-base text-white">
              Minum Tablet Fe setiap Hari pada pagi hari setelah sarapan, atau
              malam hari sebelum tidur
            </Text>
          </View>
        </View>

        <View className="px-2.5">
          <Calendar
            className="mt-10 rounded-xl overflow-hidden pb-5"
            onDayPress={(day) => {
              setStartDate(day.dateString);
              const selectedDate = new Date(day.dateString);
              selectedDate.setDate(selectedDate.getDate() + 90);
              setEndDate(selectedDate.toISOString().split("T")[0]);
            }}
            maxDate={endDate}
            markedDates={getMarkedDates()}
            theme={{
              todayBackgroundColor: "blue",
              todayTextColor: "white"
            }}
            hori
          />

          <View className="bg-white mt-3 rounded-xl py-5 px-2.5 flex justify-between flex-row items-center">
            <View>
              <Text className="font-[Amaranth-Regular] text-base text-primary">
                Tablet Fe (1x1) 90 Hari
              </Text>
            </View>
            <View>
              <View className="flex flex-row items-center gap-2.5 justify-between mb-1">
                <Text className="font-[Amaranth-Regular] text-base text-primary">
                  08.00 Pagi
                </Text>
                <Switch
                  className="h-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) =>
                    setReminderTime(value ? "08.00 Pagi" : "08.00 Malam")
                  }
                  value={reminderTime === "08.00 Pagi"}
                />
              </View>
              <View className="flex flex-row items-center gap-2.5 justify-between">
                <Text className="font-[Amaranth-Regular] text-base text-primary">
                  08.00 Malam
                </Text>
                <Switch
                  className="h-4"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) =>
                    setReminderTime(value ? "08.00 Malam" : "08.00 Pagi")
                  }
                  value={reminderTime === "08.00 Malam"}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Reminder;
