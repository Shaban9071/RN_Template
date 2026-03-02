import React from 'react';
import {   Text, TextInputs, Buttons,  Wrapper, Spacer, AuthLayout, Images } from '../../../components';
import {  colors, routes, responsiveWidth, appImages } from '../../../services';
import { useHooks } from './hooks';
 

export default function Index(props) {


  

    const {
        navigation,
        email, setEmail
    } = useHooks()

    return (
        <AuthLayout>
            <Spacer isSmall />
            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Images.SqareRound
                    source={appImages.forgetimage}
                    size={responsiveWidth(25)}
                />
                <Spacer isBasic />
                <Text isBoldTextH5 isWhite>Forgot Password?</Text>
                <Spacer isTiny />
                <Text isGray isRegTextMed alignTextCenter>No worries, we will send you reset instructions. Please enter your email</Text>
            </Wrapper>
            <Spacer isMedium />
            <TextInputs.Underlined
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder={'you@example.com'}
                inputTitle={"Email"}
            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow justifyContentSpaceEvenly>
                <Buttons.ColoredSmall
                onPress={()=>navigation.goBack()}
                textColor={colors.appTextColor5}
                    text="Cancel"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        borderWidth: responsiveWidth(.15),
                        borderColor: colors.appColor5
                    }}

                />
                <Buttons.ColoredSmall

                    text="Send"
                    onPress={() => navigation.navigate(routes.sentemail)}

                />
            </Wrapper>
        </AuthLayout>
    );
}

