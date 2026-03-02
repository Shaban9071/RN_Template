import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as App from '../../screens/app';
const ScopeStack= createNativeStackNavigator();

const ScopeNavigation = () => {
    return (
        <ScopeStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.scope}
        >
            <ScopeStack.Screen name={routes.scope}  component={App.Scope}/>
            <ScopeStack.Screen name={routes.estimate}  component={App.Estimate}/>
              <ScopeStack.Screen name={routes.milestone}  component={App.MileStone}/>
                <ScopeStack.Screen name={routes.testcases}  component={App.TestCases}/>
        </ScopeStack.Navigator>
    )
}

export default ScopeNavigation