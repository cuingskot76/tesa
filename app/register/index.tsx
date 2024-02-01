import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input";
import { Link } from "expo-router";

const formShema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  email: z.string().email("Masukkan email yang benar"),
  password: z.string().min(8, "Password minimal 8 karakter")
});

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    resolver: zodResolver(formShema)
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <View className="h-full justify-center relative">
      <LinearGradient
        colors={["#f297b8", "#e96c9a", "#e45085", "#e45085", "#e45085"]}
        className="h-full absolute w-full"
        end={{ x: 2, y: 0.5 }}
      />
      <View className="px-7">
        <Text className="text-white font-[Amaranth-Regular] text-3xl text-center">
          Register
        </Text>

        <View className="my-7">
          <Input
            control={control}
            className="bg-white"
            name={"username"}
            placeholder="Username"
            label="Username"
            errorClassName="text-white"
          />
          <Input
            control={control}
            className="bg-white"
            name={"email"}
            placeholder="Email"
            label="Email"
            errorClassName="text-white"
          />
          <Input
            control={control}
            className="bg-white"
            name={"password"}
            placeholder="Password"
            label="Password"
            errorClassName="text-white"
          />
        </View>

        <Pressable>
          <LinearGradient
            colors={["#f297b8", "#e96c9a", "#e45085"]}
            className="rounded-md py-3"
            end={{ x: 2, y: 0.5 }}
          >
            <Text
              className="text-white text-center font-[Amaranth-Regular] text-lg font-bold"
              onPress={handleSubmit(onSubmit)}
            >
              Register
            </Text>
          </LinearGradient>
        </Pressable>

        <View className="flex flex-row justify-center items-center gap-0.5 my-7">
          <Text className="text-white font-[Amaranth-Regular]">
            Sudah punya akun?
          </Text>
          <Link href={"/login/"}>
            <Text className="text-white font-[Amaranth-Regular] font-bold underline">
              Login disini
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Register;
