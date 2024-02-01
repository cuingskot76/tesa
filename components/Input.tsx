import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";

const Input = ({ control, name, className = "", ...otherProps }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => (
        <View>
          <View className="flex mt-2">
            <TextInput
              className={`p-3 border border-primary_50 rounded-md text-sm font-[Amaranth-Regular] ${className}`}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              {...otherProps}
            />
          </View>
          {error && (
            <Text className="text-red-500 text-sm font-[Amaranth-Regular]">
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;
