import React, { Component, useState } from 'react';
import { Pressable, View, } from 'react-native';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, AuthLayout, Images } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
    const { navigate } = props.navigation

    const { } = useHooks()
    return (
        <AuthLayout>

            <Spacer isSmall />

            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Text isSmallTitle isWhite>Check your email</Text>
                <Spacer isTiny />
                <Text isGray isRegularFont alignTextCenter>We’ve sent you a password recover instructions to <Text isWhite> abc123@gmail.com</Text></Text>

                <Images.SqareRound
                    source={appImages.sentimage}
                    size={responsiveWidth(45)}
                />
            

            </Wrapper>
           
            <Spacer isBasic />
            <Buttons.Colored
                text="Open my Gmail"
                onPress={()=>navigate(routes.resetpassword)}

            />
            <Spacer isBasic/>
            <Buttons.Colored
                text="Cancel"
                buttonStyle={{ backgroundColor: "transparent", borderWidth: responsiveWidth(.15), borderColor: colors.appColor2 }}

            />




        </AuthLayout>
    );
}

