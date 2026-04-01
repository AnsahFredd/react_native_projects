import { FormInput } from "@/shared/components/Form";
import { COLORS, FONTS } from "@/shared/constants";
import { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { CONFIG } from "@/shared/constants/config";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormAction = {
  field: keyof FormState;
  value: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function formReducer(state: FormState, action: FormAction): FormState {
  return { ...state, [action.field]: action.value };
}

export const Register = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  function handleChange(field: keyof FormState) {
    return (text: string) => dispatch({ field, value: text });
  }

  function handleRegister() {
    // handle submission
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Onboard!</Text>
          <Text style={styles.subtitle}>Let's help you meet up your tasks</Text>
        </View>

        <View style={styles.form}>
          <FormInput
            placeholder="Enter your full name"
            onChangeText={handleChange("name")}
            value={form.name}
            autoCapitalize="words"
          />
          <FormInput
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            value={form.email}
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Enter password"
            onChangeText={handleChange("password")}
            value={form.password}
            secureTextEntry
          />
          <FormInput
            placeholder="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            value={form.confirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Link href={CONFIG.ROUTES.LOGIN}>
            <Text style={styles.signInText}>Sign In</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 24,
    gap: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: FONTS.family.semibold,
    fontSize: FONTS.sizes.xlarge,
    color: COLORS.text.primary,
    letterSpacing: FONTS.letterSpacing.normal,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: FONTS.family.regular,
    fontSize: FONTS.sizes.medium,
    color: COLORS.text.secondary,
    letterSpacing: FONTS.letterSpacing.normal,
  },
  form: {
    gap: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: FONTS.family.semibold,
    fontSize: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  footerText: {
    fontFamily: FONTS.family.regular,
    fontSize: FONTS.sizes.medium,
    color: COLORS.text.secondary,
  },
  signInText: {
    fontFamily: FONTS.family.semibold,
    fontSize: FONTS.sizes.medium,
    color: COLORS.primary,
  },
});