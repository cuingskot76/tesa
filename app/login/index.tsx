import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import Input from "../../components/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const formSchema = z.object({
  email: z.string().email("Masukkan email yang benar"),
  password: z.string().min(8, "Password minimal 8 karakter")
});

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [_] = useFonts({
    "Amaranth-Regular": require("../../assets/fonts/Amaranth-Regular.ttf")
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <View className="px-7 h-full justify-center">
      <Text className="text-primary font-[Amaranth-Regular] text-3xl text-center">
        Sign in
      </Text>

      <View className="my-7">
        <Input
          control={control}
          name={"email"}
          placeholder="email"
          label="Email"
          labelClassName="text-primary"
        />
        <Input
          control={control}
          name={"password"}
          placeholder="password"
          label="Password"
          labelClassName="text-primary"
        />
      </View>

      <View className="flex justify-between flex-row mb-7">
        <View className="flex flex-row gap-3 items-center">
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={"#E75D8F"}
            className="border border-primary_50 rounded-sm w-4 h-4"
          />
          <Text
            onPress={() => {
              setIsChecked((prev) => !prev);
            }}
            className="text-sm text-primary font-[Amaranth-Regular]"
          >
            Remember me
          </Text>
        </View>
        <Text className="text-sm text-primary_35 font-[Amaranth-Regular]">
          Forgot password?
        </Text>
      </View>

      {/* <Button
        title="Masuk"
        color={"#E75D8F"}
        onPress={handleSubmit(onSubmit)}
      /> */}

      <Pressable>
        <LinearGradient
          colors={["#f297b8", "#e96c9a", "#e45085"]}
          className="rounded-md py-3"
        >
          <Text
            className="text-white text-center font-[Amaranth-Regular] text-lg font-bold"
            onPress={handleSubmit(onSubmit)}
          >
            Masuk
          </Text>
        </LinearGradient>
      </Pressable>

      <View className="flex flex-row justify-center items-center gap-0.5 my-7">
        <Text className="text-primary font-[Amaranth-Regular]">
          Tidak punya akun?
        </Text>
        <Link href={"/register/"}>
          <Text className="text-primary font-[Amaranth-Regular] font-bold underline">
            Daftar disini
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
