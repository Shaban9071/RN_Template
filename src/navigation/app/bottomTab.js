 import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, responsiveFontSize, responsiveWidth, responsiveHeight, routes } from "../../services";
import { Wrapper } from "../../components";
import { Icon } from "@rneui/base";
import * as App from '../../screens/app';
import ScopeNavigation from "./scopeStack";
import { Keyboard, Platform, View } from 'react-native';

const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
    const tabIconSize = responsiveFontSize(24);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const Show = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
        const Hide = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
        return () => {
            Show.remove();
            Hide.remove();
        };
    }, []);

    const TabIcon = ({ iconName, iconType, focused }) => {
        return (
            <Wrapper
                alignItemsCenter
                justifyContentCenter
                style={{
                    // Orange pill logic
                    backgroundColor: focused ? colors.appBgColor2 : 'transparent',
                    width: responsiveWidth(22), // Adjusted for perfect spacing
                    height: responsiveHeight(6),
                    borderRadius: responsiveHeight(3),
                    // Centering the icon perfectly
                    marginTop: Platform.OS === 'android' ? 0 : 5, 
                }}
            >
                <Icon
                    name={iconName}
                    type={iconType}
                    size={tabIconSize}
                    color={focused ? colors.appColor2 : colors.appBgColor5}
                />
            </Wrapper>
        );
    }

    return (
        <BottomTabStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: isKeyboardVisible,
                tabBarStyle: {
                    backgroundColor: colors.appBgColor1,  
                    height: responsiveHeight(9),
                    borderTopWidth: 0,
                    elevation: 0,
                    justifyContent: 'center',
                    position:"absolute"
                },
            }}
        >
            <BottomTabStack.Screen
                name={routes.requirements}
                component={App.Requirements}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainerLeft}>
                            <TabIcon iconName='chat' iconType='material-community' focused={focused} />
                        </View>
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.scopestack}
                component={ScopeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainerMiddle}>
                            <TabIcon iconName={focused ? 'file' : 'file-outline'} iconType='material-community' focused={focused} />
                        </View>
                    ),
                }}
            />
            <BottomTabStack.Screen
                name={routes.summary}
                component={App.Summary}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainerRight}>
                            <TabIcon iconName='credit-card' iconType={focused ? 'material-community' : 'feather'} focused={focused} />
                        </View>
                    ),
                }}
            />
        </BottomTabStack.Navigator>
    );
}

const styles = {
  
    iconContainerLeft: {
        backgroundColor: colors.black, 
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        height: responsiveHeight(8),
        width: responsiveWidth(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveWidth(2), 
        top:responsiveHeight(2) 
    },
    iconContainerMiddle: {
        backgroundColor: colors.black,
        height: responsiveHeight(8),
        width: responsiveWidth(40),
        justifyContent: 'center',
        alignItems: 'center',
          top:responsiveHeight(2) 

    },
    iconContainerRight: {
        backgroundColor: colors.black,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        height: responsiveHeight(8),
        width: responsiveWidth(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: responsiveWidth(2),  
          top:responsiveHeight(2) 
    }
};