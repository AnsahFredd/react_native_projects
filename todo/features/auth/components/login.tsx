import { FormInput } from "@/shared/components/Form";
import { COLORS, FONTS } from "@/shared/constants";
import { useReducer } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { CONFIG } from "@/shared/constants/config";
import { loginUser } from "@/features/auth/services/auth_service";

type FormState = {
  email: string;
  password: string;
};

type FormAction = {
  field: keyof FormState;
  value: string;
};

const initialState: FormState = {
  email: "",
  password: "",
};

function formReducer(state: FormState, action: FormAction): FormState {
  return { ...state, [action.field]: action.value };
}

export const Login = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const router = useRouter();

  function handleChange(field: keyof FormState) {
    return (text: string) => dispatch({ field, value: text });
  }

    async function handleLogin(){
        try {
            await loginUser({email: form.email, password: form.password});
            router.push(CONFIG.ROUTES.HOME);
        } catch (error) {
            throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
        }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.title}>Welcome back</Text>
          <Image style={styles.image} source={require("@/assets/images/login_img.png")}/>
        </View>

        <View style={styles.form}>
        
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
          
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Link href={CONFIG.ROUTES.REGISTER}>
            <Text style={styles.signInText}>Sign Up</Text>
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
    flex: 1,
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 24,
    gap: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: FONTS.family.semibold,
    fontSize: FONTS.sizes.xlarge,
    color: COLORS.text.primary,
    letterSpacing: FONTS.letterSpacing.normal,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  
  form: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
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