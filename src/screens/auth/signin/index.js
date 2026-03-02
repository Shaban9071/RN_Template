import React from 'react';
import { Pressable } from 'react-native';
import { Text, TextInputs, Buttons, Spacer, AuthLayout ,Wrapper, Loaders} from '../../../components';
import { useHooks } from "./hooks"
import {  responsiveFontSize, responsiveWidth,  colors, appStyles } from '../../../services';
import { Icon } from '@rneui/base';

export default function Index(props) {


  const {
    navigation,
    
    socialApps,
    handleSignUp,
    handleForgetPassword,
    email, setEmail,
    password, setPassword,
    showPassword, setShowPassword,

    emailError,setEmailError,
    passwordError,setPasswordError,
    handleSignin,
    handleEmailChange,handlePasswordChange,

    isloading
  } = useHooks()

  return (
    <AuthLayout>
      <Spacer isSmall />
      <Wrapper alignItemsCenter>
        <Text isBoldTextH5>Welcome Back</Text>
        <Text isGray isRegTextMed>Sign in to access your Scopepilot</Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <TextInputs.Underlined
        value={email}
        onChangeText={handleEmailChange}
        placeholder={'you@example.com'}
        inputTitle={"Email"}
        error={emailError}
      />
      <Spacer isBasic />
      <TextInputs.Underlined
        value={password}
        onChangeText={handlePasswordChange}
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
      <Pressable
        onPress={handleForgetPassword}
        style={{
          marginRight: responsiveWidth(6)

        }}
      >
        <Text isSemiTextReg alignTextRight>
          Forget password?
        </Text>
      </Pressable>
      <Spacer isBasic />
      <Buttons.Colored
        text="Log in"
        onPress={handleSignin}
      />
      <Spacer isBasic />
      <Wrapper flexDirectionRow alignItemsCenter style={{ paddingHorizontal: responsiveWidth(5) }}>
        <Wrapper flex={1} style={{ backgroundColor: colors.appColor5, height: responsiveWidth(.1) }} />
        <Text isGray isRegTextReg style={{ paddingHorizontal: responsiveWidth(3) }}>or with</Text>
        <Wrapper flex={1} height={1} style={{ backgroundColor: colors.appColor5, height: responsiveWidth(.1) }} />
      </Wrapper>
      <Spacer isBasic />
      <Wrapper flexDirectionRow justifyContentSpaceEvenly >
        {socialApps.map((item) => (
          <Pressable key={item.id} style={appStyles.socialBtn}>
            <Icon
              name={item.name}
              type={'font-awesome'}
              color={colors.appColor2}
              size={responsiveFontSize(18)}
            />
          </Pressable>
        ))}
      </Wrapper>
      <Spacer isBasic />
      <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
        <Text isGray isRegTextReg>Don't have an account?{" "}</Text>
        <Pressable
          onPress={handleSignUp}
        >
          <Text
        isRegTextReg
            isUnderlined
            style={{ color: colors.appTextColor4 }}
          >
            Sign Up
            </Text>
        </Pressable>
      </Wrapper>
      <Spacer isSmall />

      <Loaders.Secondary isVisible={isloading}/>
    </AuthLayout>
  );
}
