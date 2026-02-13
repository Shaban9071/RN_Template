import React, { Component, useState } from 'react';
import { Pressable, View, } from 'react-native';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, AuthLayout } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes } from '../../../services';
import { useHooks } from './hooks';
import { navigate } from '../../../navigation/rootNavigation';
export default function Index(props) {


    const {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        showPassword, setShowPassword

    } = useHooks()
    return (
        <AuthLayout>

            <Spacer isSmall />
            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Text isSmallTitle isWhite>Sign in Account</Text>
                <Text isGray isRegularFont alignTextCenter>Enter your personal data to create your data</Text>

            </Wrapper>
            <Spacer isMedium />

            <TextInputs.Underlined
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholder={'Enter your first name'}
                inputTitle={"First Name"}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                placeholder={'Enter your last name'}

                inputTitle={"Last Name"}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder={'Enter your email'}
                inputTitle={"Email"}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={'*******'}
                secureTextEntry={!showPassword}
                inputTitle={"Password"}
                iconNameRight={
                    password.length > 0
                        ? (showPassword ? "eye" : "eye-off")
                        : null
                }
                onPressIconRight={() => setShowPassword(!showPassword)}

            />
            <Spacer isBasic />
            <Buttons.Colored
                text="Sign up"

            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
                <Text isGray isSmall>Already have an account?{" "}</Text>
                <Pressable
                    onPress={() => navigate(routes.signin)}
                >
                    <Text
                        isSmall
                        isUnderlined
                    >
                        Log In
                    </Text>
                </Pressable>
            </Wrapper>
        </AuthLayout>
    );
}

