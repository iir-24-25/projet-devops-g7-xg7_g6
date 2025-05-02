import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import VerifyAccountScreen from "../screens/auth/VerifyAccountScreen";
import SuccessScreen from "../screens/auth/SucssessScreen";
import HomeTab from "./HomeTab";
import SetupProfileScreen from "../screens/SetupProfile";
import SelectCountryScreen from "../screens/SetupProfile/SelectCountry";
import PersonalInfoScreen from "../screens/SetupProfile/SetupProfile";
import EducationScreen from "../screens/SetupProfile/SchoolingDetails";



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
        <Stack.Screen name="SelectCountry"
        options={{ headerShown: true ,presentation:"card",
      
        headerShadowVisible:false
        }}
        
        
        component={SelectCountryScreen}
        
        
        
        
        />
        <Stack.Screen name="SetupProfile"
        options={{ 
          headerShown: true
           ,presentation:"card",    
              headerShadowVisible:false
        }}
        component={SetupProfileScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen}
        
        options={{ 
          headerShown: true
           ,presentation:"card",    
              headerShadowVisible:false
        }}
        />
        <Stack.Screen name="Education" component={EducationScreen}
         options={{ 
          headerShown: true
           ,presentation:"card",    
              headerShadowVisible:false
        }}
        
        />

    
      </Stack.Navigator>
    );
  };
  
  export default RootStack;