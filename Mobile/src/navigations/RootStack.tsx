import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import VerifyAccountScreen from "../screens/auth/VerifyAccountScreen";
import SuccessScreen from "../screens/auth/SucssessScreen";
import HomeTab from "./HomeTab";



const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
         screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
          <Stack.Screen  name="Success" component={SuccessScreen} />
          <Stack.Screen  name="Home" component={HomeTab} />
  
        </Stack.Navigator>
    );
  };
  
  export default RootStack;