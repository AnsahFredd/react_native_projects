import { Register } from "@/features/auth/components/register";
import { DecorativeCircles } from "@/shared/components/DecorativeCircles";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DecorativeCircles />
      <Register />
    </SafeAreaView>
  );
};

export default RegisterPage;
