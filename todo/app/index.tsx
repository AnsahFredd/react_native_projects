import { DecorativeCircles } from "@/shared/components/DecorativeCircles";
import { COLORS, FONTS } from "@/shared/constants";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONFIG } from "@/shared/constants/config";

const { height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <DecorativeCircles />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.imageSection}>
            <Image
              source={require("../assets/images/onboarding.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Gets things done with TODO</Text>
              <Text style={styles.description}>
                Organize your tasks, hit your goals, and stay focused every day
                — all in one clean and simple app.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Link href={CONFIG.ROUTES.REGISTER} asChild>
              <TouchableOpacity
             
                style={styles.primaryButton}
                activeOpacity={0.8}
              >
                <Text style={styles.primaryButtonText}>Get Started</Text>
              </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingBottom: 20,
  },
  imageSection: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 60,
  },
  image: {
    width: "85%",
    aspectRatio: 1,
    maxHeight: 320,
  },
  bottomSection: {
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    color: COLORS.text.primary,
    fontFamily: FONTS.family.semibold,
    fontSize: 28,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 34,
  },
  description: {
    color: COLORS.text.secondary,
    fontFamily: FONTS.family.regular,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    height: 58,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: "#FFF",
    fontFamily: FONTS.family.semibold,
    fontSize: 18,
  },
});
