import React from 'react';
import { Text, TextInputs, Buttons, Wrapper, Spacer, AuthLayout, Images } from '../../../components';
import { colors, responsiveWidth, appImages } from '../../../services';
import { useHooks } from './hooks';
 

export default function Index(props) {

     

    const {
        navigation,
        newPassword, setNewPassword,
        showNewPassword, setShowNewPassword,
        confirmPassword, setConfirmPassword,
        showConfirmPassword, setShowConfirmPassword
    } = useHooks()

    return (
        <AuthLayout>
            <Spacer isSmall />
            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Images.SqareRound
                    source={appImages.resetimage}
                    size={responsiveWidth(45)}
                />
                <Text isBoldTextH5>Reset Your Password</Text>
                <Spacer isTiny />
                <Text isGray isRegTextMed alignTextCenter>Both password should be same.</Text>
            </Wrapper>
            <Spacer isMedium />
            <TextInputs.Underlined
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
                placeholder={'Enter your new password'}
                inputTitle={"New Password"}
                secureTextEntry={!showNewPassword}
                iconNameRight={
                    newPassword.length > 0
                        ? (showNewPassword ? "eye" : "eye-off")
                        : null
                }
                onPressIconRight={() => setShowNewPassword(!showNewPassword)}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder={'Confirm your new password'}
                inputTitle={"Confirm Password"}
                secureTextEntry={!showConfirmPassword}
                iconNameRight={
                    confirmPassword.length > 0
                        ? (showConfirmPassword ? "eye" : "eye-off")
                        : null
                }
                onPressIconRight={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow justifyContentSpaceEvenly>
                <Buttons.ColoredSmall
                    onPress={() => navigation.goBack()}
                    text="Cancel"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        borderWidth: responsiveWidth(.15),
                        borderColor: colors.appColor5
                    }}
                />
                <Buttons.ColoredSmall
                    onPress={() => { }}
                    text="Reset"
                />
            </Wrapper>
        </AuthLayout>
    );
}

