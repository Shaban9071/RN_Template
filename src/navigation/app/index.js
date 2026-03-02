import React, { Component, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab'
import AppDraw from "./drawTab"
import { useRoute } from '@react-navigation/native';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {

    const route = useRoute();
    const [showLanding, setShowLanding] = useState(route.params?.isShowLanding || false);
    

  useEffect(() => {
    if (showLanding) {
      // 3 second baad landing page khatam kar do
      const timer = setTimeout(() => {
        setShowLanding(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showLanding]);
    if (showLanding)
        return <App.LandingPage />
    else

        return (
            <AppStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={routes.bottomTab}
            >

                <AppStack.Screen name={routes.bottomTab} component={BottomTab} />
                <AppStack.Screen name={routes.drawTab} component={AppDraw} />
                <AppStack.Screen name={routes.messages} component={App.Messages} />

            </AppStack.Navigator>
        )
}

export default AppNavigation