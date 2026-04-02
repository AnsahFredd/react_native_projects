import { Login } from "@/features/auth/components/login";
import { DecorativeCircles } from "@/shared/components/DecorativeCircles";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DecorativeCircles />
      <Login />
    </SafeAreaView>
  );
};

export default LoginPage;
