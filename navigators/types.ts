import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
    
        Login: undefined;
        Signup: undefined;
        Home: undefined;
        Profile: undefined;
        SignUp: undefined;
        Dashboard: undefined;
        CoffeeDetails: undefined;
    
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParamList {}
    }
}