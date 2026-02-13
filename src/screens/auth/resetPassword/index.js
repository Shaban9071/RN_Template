import React, { Component, useState } from 'react';
import { Pressable, View, } from 'react-native';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, AuthLayout, Images } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appImages } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
    const { navigate } = props.navigation

    const { accepted, setAccepted } = useHooks()
    return (
        <AuthLayout>

            <Spacer isSmall />

            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Images.SqareRound
                    source={appImages.resetimage}
                   size={responsiveWidth(45)}
                />
               
                <Text isSmallTitle isWhite>Reset Your Password</Text>
                <Spacer isTiny />
                <Text isGray isRegularFont alignTextCenter>Both password should be same.</Text>

            </Wrapper>
            <Spacer isMedium />
            <TextInputs.Underlined
                placeholder={'Enter your new password'}
                inputTitle={"New Password"}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                placeholder={'Confirm your new password'}
                inputTitle={"Confirm Password"}
            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow justifyContentSpaceEvenly>
                <Buttons.ColoredSmall
                    text="Cancel"
                    buttonStyle={{ backgroundColor: "transparent", borderWidth: responsiveWidth(.15), borderColor: colors.appColor2 }}

                />
                <Buttons.ColoredSmall
                    text="Reset"

                />
            </Wrapper>


        </AuthLayout>
    );
}

