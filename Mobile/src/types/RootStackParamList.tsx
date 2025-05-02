export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyAccount: undefined;
  Success: undefined;
  Home: undefined;
  Messages: undefined;
  ChatScreen: { id: string }; 
  ProfileScreen: undefined;
  PreferencesScreen: undefined;
  ProfileSetupScreen: undefined;
  AccountScreen: undefined;
  PrivacyScreen: undefined;
  NotificationsScreen: undefined;
  SupportScreen: undefined;
  FilterInternships: undefined;
  InternshipDetails: { internshipId: string };
  ViewInternships: undefined;
  ApplyForInternship: {id:string, visible: boolean; onClose: () => void; onSubmit: () => void };

  SetupProfile: undefined;
  SelectCountry   : undefined;
  PersonalInfo: undefined;
  Education: undefined;
};

