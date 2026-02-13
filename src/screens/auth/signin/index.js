import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, TextInputs, Buttons, Spacer, AuthLayout } from '../../../components';
import { useHooks } from "./hooks"
import { routes, responsiveFontSize, responsiveWidth, responsiveHeight, colors, appStyles } from '../../../services';
import Wrapper from '../../../components/wrapper';
import { Icon } from '@rneui/base';

export default function Index(props) {


  const {
    handleLogin,
    socialApps,
    handleSignUp,
    handleForgetPassword,
    email, setEmail,
    password, setPassword,
    showPassword, setShowPassword
  } = useHooks()

  return (
    <AuthLayout>
      <Spacer isSmall />
      <Wrapper alignItemsCenter>
        <Text isSmallTitle isWhite>Welcome Back</Text>
        <Text isGray isRegularFont>Sign in to access your Scopepilot</Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <TextInputs.Underlined
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder={'you@example.com'}
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
      <Pressable
        onPress={handleForgetPassword}
        style={{
          marginRight: responsiveWidth(6)

        }}
      >
        <Text isWhite isSmall alignTextRight>
          Forget password?
        </Text>
      </Pressable>
      <Spacer isBasic />
      <Buttons.Colored
        text="Log in"
        onPress={handleLogin}
      />
      <Spacer isBasic />
      <Wrapper flexDirectionRow alignItemsCenter style={{ paddingHorizontal: responsiveWidth(5) }}>
        <Wrapper flex={1} style={{ backgroundColor: colors.appColor2, height: responsiveWidth(.1) }} />
        <Text isGray isSmall style={{ paddingHorizontal: responsiveWidth(3) }}>or with</Text>
        <Wrapper flex={1} height={1} style={{ backgroundColor: colors.appColor2, height: responsiveWidth(.1) }} />
      </Wrapper>
      <Spacer isBasic />
      <Wrapper flexDirectionRow justifyContentSpaceEvenly >
        {socialApps.map((item) => (
          <Pressable key={item.id} style={appStyles.socialBtn}>
            <Icon
              name={item.name}
              type={'font-awesome'}
              color={colors.appBgColor1}
              size={responsiveFontSize(18)}
            />
          </Pressable>
        ))}
      </Wrapper>
      <Spacer isBasic />
      <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter>
        <Text isGray isSmall>Don't have an account?{" "}</Text>
        <Pressable
          onPress={handleSignUp}

        >
          <Text
            isSmall
            isUnderlined
            style={{ color: colors.appColor5 }}
          >
            Sign Up
          </Text>
        </Pressable>
      </Wrapper>
      <Spacer isSmall />

    </AuthLayout>
  );
}
