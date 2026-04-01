import { TextInput, Text, View, StyleSheet } from "react-native";
import { FONTS } from "../constants";

type FormInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  error?: string;
};

export const FormInput = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  error,
}: FormInputProps) => {
    return (
  <View style={styles.container}>
    <TextInput
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#AAAAAA"
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      style={[styles.input, error && styles.inputError]}
    />
    {error && <Text style={[styles.error]}>{error}</Text>}
  </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        fontSize: FONTS.sizes.medium,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 50,
    },
    inputError: {
        borderColor: "#FF6B6B",
    },
    error: {
        color: "red",
        fontSize: FONTS.sizes.small,
        marginTop: 4,
    }
})