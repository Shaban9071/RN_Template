import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';
import AppNavigation from './app';
import CommonNavigation from './common';
import { routes } from '../services';
import { Splash } from '../screens/auth';
import { navigationRef } from './rootNavigation';


const MainStack = createNativeStackNavigator();

export default function Navigation() {
     


    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={routes.splash}
            >
                <MainStack.Screen name={routes.splash} component={Splash} />
                <MainStack.Screen
                    name={routes.auth}
                    component={AuthNavigation}
                />
                <MainStack.Screen
                    name={routes.app}
                    component={AppNavigation}
                />
                <MainStack.Screen
                    name={routes.common}
                    component={CommonNavigation}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

