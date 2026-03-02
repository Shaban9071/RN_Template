import React from 'react';
import { Pressable } from 'react-native';
import { Text, TextInputs, Buttons, Wrapper, Spacer, AuthLayout, Loaders } from '../../../components';
import { routes } from '../../../services';
import { useHooks } from './hooks';


export default function Index(props) {




    const {
        navigation,
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword,
        // confirmPassword, setConfirmPassword,

        showPassword, setShowPassword,
        // showConfirmPassword, setShowConfirmPassword,

        emailError, setEmailError,
        passwordError, setPasswordError,
        lastNameError, setLastNameError,
        firstNameError, setFirstNameError,
        // confirmPasswordError, setConfirmPasswordError,

        handleSignup,
        isloading

    } = useHooks()

    return (
        <AuthLayout>
            <Spacer isSmall />
            <Wrapper alignItemsCenter marginHorizontalMedium>
                <Text isSmallTitle isWhite>Sign up Account</Text>
                <Text isGray isRegularFont alignTextCenter>Enter your personal data to create a new account</Text>
            </Wrapper>
            <Spacer isMedium />
            <TextInputs.Underlined
                value={firstName}
                autoCapitalize
                onChangeText={(text) => {
                    setFirstName(text)
                    setFirstNameError('')
                }
                }
                placeholder={'Enter your first name'}
                inputTitle={"First Name"}
                error={firstNameError}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={lastName}
                autoCapitalize
                onChangeText={(text) => {
                    setLastName(text)
                    setLastNameError('')
                }


                }
                placeholder={'Enter your last name'}
                error={lastNameError}
                inputTitle={"Last Name"}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={email}
                onChangeText={(text) => {
                    setEmail(text);      // Pehle email update hogi
                    setEmailError('');   // Saath hi error message khatam ho jayega
                }}
                placeholder={'Enter your email'}
                inputTitle={"Email"}
                error={emailError}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
                value={password}
                onChangeText={(text) => {
                    setPassword(text)
                    setPasswordError('')
                }

                }
                placeholder={'*******'}
                secureTextEntry={!showPassword}
                inputTitle={"Password"}
                iconNameRight={
                    password.length > 0
                        ? (showPassword ? "eye" : "eye-off")
                        : null
                }
                onPressIconRight={() => setShowPassword(!showPassword)}
                error={passwordError}

            />
            <Spacer isBasic />
            {/* <TextInputs.Underlined
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder={'*******'}
                secureTextEntry={!showConfirmPassword}
                inputTitle={"Confirm Password"}
                iconNameRight={
                    confirmPassword.length > 0
                        ? (showConfirmPassword ? "eye" : "eye-off")
                        : null
                }
                onPressIconRight={() => setShowConfirmPassword(!showConfirmPassword)}
                error={confirmPasswordError}
            /> */}

            <Spacer isMedium />
            <Buttons.Colored
                text="Sign up"
                onPress={handleSignup}

            />
            <Spacer isBasic />
            <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
                <Text isGray isSmall>Already have an account?{" "}</Text>
                <Pressable
                    onPress={() => navigation.navigate(routes.signin)}
                >
                    <Text isSmall isUnderlined >Log In</Text>
                </Pressable>
            </Wrapper>

            <Loaders.Secondary isVisible={isloading} />
        </AuthLayout>
    );
}

