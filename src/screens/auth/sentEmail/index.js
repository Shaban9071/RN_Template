import React from 'react';
import { Text, Buttons, Wrapper, Spacer, AuthLayout, Images } from '../../../components';
import { colors, routes, responsiveWidth, appImages } from '../../../services';
import { useHooks } from './hooks';
 

export default function Index(props) {
 

    const {
        navigation,
        userEmail
    } = useHooks()

    return (
        <AuthLayout>
            <Spacer isSmall />
            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Text isBoldTextH5>Check your email</Text>
                <Spacer isTiny />
                <Text isGray isRegTextMed alignTextCenter>
                    We’ve sent you a password recover instructions to
                    <Text isWhite> {userEmail}</Text>
                </Text>
                <Images.SqareRound
                    source={appImages.sentimage}
                    size={responsiveWidth(45)}
                />
            </Wrapper>
            <Spacer isBasic />
            <Buttons.Colored
                text="Open my Gmail"
                onPress={() => navigation.navigate(routes.resetpassword)}
            />
            <Spacer isBasic />
            <Buttons.Colored
            textStyle={{color:colors.appTextColor5}}
                onPress={() => navigation.goBack()}
                text="Go Back"
                buttonStyle={{
                    backgroundColor: "transparent",
                    borderWidth: responsiveWidth(.15),
                    borderColor: colors.appColor5
                }}
            />
        </AuthLayout>
    );
}

