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
                    source={appImages.forgetimage}
                       size={responsiveWidth(25)}
                />
                <Spacer isBasic />
                <Text isSmallTitle isWhite>Forgot Password?</Text>
                <Spacer isTiny/>
                <Text isGray isRegularFont alignTextCenter>No worries, we will send you reset instructions. Please enter your email</Text>

            </Wrapper>
            <Spacer isMedium />
            <TextInputs.Underlined
                placeholder={'you@example.com'}
                inputTitle={"Email"}
            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow justifyContentSpaceEvenly>
                <Buttons.ColoredSmall
                    text="Cancel"
                    buttonStyle={{ backgroundColor: "transparent", borderWidth: responsiveWidth(.15), borderColor: colors.appColor2 }}

                />
                <Buttons.ColoredSmall
                    text="Sent"
                    onPress={()=>navigate(routes.sentemail)}

                />
            </Wrapper>


        </AuthLayout>
    );
}

