import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
    //SignIn: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParamList {}
    }
}