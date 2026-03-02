import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Animated,
  Platform,
} from 'react-native';
import { Icon } from '@rneui/base';
import {
  colors,
  appStyles,
  sizes,
  fontSizes,
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  appImages,
  appFonts,
} from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import { Images } from '..';
function Colored({
  iconNameRight,
  inputRef,
  iconTypeRight,
  returnKeyLabel,
  returnKeyType,
  onSubmitEditing,
  onPress,
  maxLength,
  autoFocus,
  title,
  isButton,
  duration,
  titleStyle,
  placeholder,
  editable,
  animation,
  multiline,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  iconColorRight,
  iconSizeRight,
  containerStyle,
  inputContainerStyle,
  onPressIconRight,
  inputStyle,
  right,
  keyboardType,
  iconStyleRight,
  error,
  left,
  customIconLeft,
  iconNameLeft,
  iconTypeLeft,
  iconSizeLeft,
  iconColorLeft,
  iconStyleLeft,
  onPressIconLeft,
  placeholderTextColor,
  sentIcon,
  shareButton,
  onPressShareButton,
  onPressSendButton,
  rightIcons,
  placeholderTextSize
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      disabled={!onPress}
      style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
      {title ? (
        <Wrapper style={{ marginHorizontal: 0 }}>
          <Text isInputTitle style={[{}, titleStyle]}>
            {title}
          </Text>
          <Spacer isTiny />
        </Wrapper>
      ) : null}
      <Wrapper
        style={[
          appStyles.inputContainerColored,
          {
            borderRadius: responsiveWidth(8),
            backgroundColor: colors.black,
            marginHorizontal: 0,
          },
          inputContainerStyle,
        ]}>
        {left ? (
          left
        ) : customIconLeft ? (
          <Wrapper
            style={{
              alignItems: 'center',
              marginLeft: sizes.marginHorizontal / 2,
            }}>
            <Icons.Custom
              icon={customIconLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
              color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
              containerStyle={iconStyleLeft}
            />
          </Wrapper>
        ) : iconNameLeft ? (
          <Wrapper
            style={{
              alignItems: 'center',
              marginLeft: sizes.marginHorizontal / 2,
              backgroundColor: colors.appColor12,
              borderRadius: responsiveWidth(4)

            }}>
            <Icon
              name={iconNameLeft}
              type={iconTypeLeft}
              size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
              color={iconColorLeft ? iconColorLeft : colors.appTextColor3}
              iconStyle={iconStyleLeft}
              onPress={onPressIconLeft}
            />
          </Wrapper>
        ) : null}
        <View style={{ flex: 1 }}>
          {onPress ? (
            <Wrapper
              marginHorizontalBase
              style={{ height: sizes.inputHeight, justifyContent: 'center' }}>
              <Text isMedium style={value ? null : appStyles.textGray}>
                {value ? value : placeholder}
              </Text>
            </Wrapper>
          ) : (
            <TextInput
              ref={inputRef}
              onChangeText={onChangeText}
              value={value}
              placeholder={placeholder}
              editable={editable}
              autoFocus={autoFocus}
              returnKeyLabel={returnKeyLabel}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              multiline={multiline}
              placeholderTextColor={placeholderTextColor || '#DBDBDB'}
              keyboardType={keyboardType}
              onFocus={onFocus}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              maxLength={maxLength}
              style={[
                appStyles.inputField,
                {
                  fontSize: placeholderTextSize ? placeholderTextSize : fontSizes.small,
                  width: null,
                  height: sizes.inputHeight,
                  paddingHorizontal: sizes.marginHorizontal,

                },
                inputStyle,
              ]}
            />
          )}
        </View>
        {
          rightIcons && (
            <Wrapper flexDirectionRow marginHorizontalSmall>
              {
                shareButton && (
                  <TouchableOpacity
                    onPress={onPressShareButton}
                    style={{
                      borderRadius: responsiveWidth(6),
                      backgroundColor: '#2F2F2F',
                      alignContent: "center",
                      justifyContent: "center",
                      height: responsiveWidth(8),
                      width: responsiveWidth(8)
                    }}
                  >
                    <Icon
                      name="attachment"
                      type="material"
                      size={responsiveFontSize(22)}
                      color={colors.appTextColor1}
                      style={{

                        transform: [{ rotate: '135deg' }]
                      }}
                    />
                  </TouchableOpacity>
                )
              }
              <Spacer horizontal isSmall />
              {
                sentIcon && (
                  <TouchableOpacity
                    onPress={onPressSendButton}
                    style={{
                      borderRadius: responsiveWidth(4),
                      backgroundColor: colors.appBgColor2,
                      alignContent: "center",
                      justifyContent: "center",
                      height: responsiveWidth(8),
                      width: responsiveWidth(8)
                    }}
                  >
                    <Wrapper style={{ paddingHorizontal: 3 }}>
                      <Images.SqareRound
                        source={appImages.sentIconImge}
                        size={responsiveFontSize(26)}
                      />
                    </Wrapper>
                  </TouchableOpacity>
                )
              }
            </Wrapper>
          )
        }
        <View style={{}}>
          {right ? (
            right
          ) : iconNameRight ? (
            <Wrapper
              style={{
                alignItems: 'center',
                marginRight: sizes.marginHorizontal,
              }}>
              <Icon
                name={iconNameRight}
                type={iconTypeRight}
                size={iconSizeRight ? iconSizeRight : sizes.icons.medium}
                color={iconColorRight ? iconColorRight : colors.appTextColor5}
                iconStyle={iconStyleRight}
                onPress={onPressIconRight}
              />
            </Wrapper>
          ) : null}
        </View>
      </Wrapper>
      {error ? (
        <Wrapper animation="shake">
          <Spacer isTiny />
          <Text isSmall style={[{ color: colors.error, textAlign: 'right' }]}>
            {error}
          </Text>
        </Wrapper>
      ) : null}
    </TouchableOpacity>
  );
}
function Bordered({
  label, // Naya prop heading ke liye
  onPress,
  iconContainerStyle,
  autoFocus,
  // right params
  right,
  iconNameRight,
  iconTypeRight,
  iconSizeRight,
  iconColorRight,
  iconStyleRight,
  onPressIconRight,
  // left params
  left,
  customIconLeft,
  iconNameLeft,
  iconTypeLeft,
  iconColorLeft,
  iconSizeLeft,
  iconStyleLeft,
  onPressIconLeft,
  // input params
  placeholder,
  placeholderTextColor,
  onFocus,
  onChangeText,
  secureTextEntry,
  value,
  containerStyle,
  inputStyle,
  // Multiline params
  multiline = false,
  numberOfLines = 1,
  textAlignVertical,
  keyboardType,
  editable,
  maxLength
}) {
  return (
    <Wrapper >
      {/* Agar label prop pass kiya ho to heading show hogi */}
      {label && (
        <Wrapper style={{ marginBottom: responsiveHeight(.5) }}>
          <Text isSemiTextReg >{label}</Text>
        </Wrapper>
      )}

      <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
        activeOpacity={1}
        style={[
          appStyles.inputContainerBorderd,
          {
            borderRadius: responsiveWidth(2),
            borderWidth: responsiveWidth(.2),
            borderColor: '#6E6E6E',
            backgroundColor: colors.black, // Dark theme background
            height: multiline ? undefined : 30,
            minHeight: multiline ? 70 : undefined,
            alignItems: multiline ? 'flex-start' : 'center',
            paddingVertical: multiline ? 5 : 0,

          },
          containerStyle,
        ]}>

        {/* Left Icon Logic */}
        {left ? left : customIconLeft ? (
          <Wrapper style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
            <Icons.Custom
              icon={customIconLeft}
              size={iconSizeLeft || sizes.icons.medium}
              color={iconColorLeft || colors.appTextColor1}
            />
          </Wrapper>
        ) : iconNameLeft ? (
          <Wrapper style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
            <Icon
              name={iconNameLeft}
              type={iconTypeLeft}
              size={iconSizeLeft || sizes.icons.medium}
              color={iconColorLeft || colors.appBgColor3}
              onPress={onPressIconLeft}
            />
          </Wrapper>
        ) : null}

        <View style={{ flex: 1 }}>
          {onPress ? (
            <Wrapper marginHorizontalBase style={[{ height: sizes.inputHeight, justifyContent: 'center' }, inputStyle]}>
              <Text isRegTextSmall style={value ? { color: 'white' } : appStyles.textLightGray}>
                {value ? value : placeholder}
              </Text>
            </Wrapper>
          ) : (
            <TextInput
              onChangeText={onChangeText}
              value={value}
              placeholder={placeholder}
              onFocus={onFocus}
              autoFocus={autoFocus}
              multiline={multiline}
              numberOfLines={numberOfLines}
              maxLength={maxLength}
              keyboardType={keyboardType}
              editable={editable}
              placeholderTextColor={placeholderTextColor || colors.appBgColor3}
              secureTextEntry={secureTextEntry}
              textAlignVertical={multiline ? 'top' : (textAlignVertical || 'center')}
              style={[

                {
                  fontSize: responsiveFontSize(11),
                  fontFamily: appFonts.appTextRegular,
                  width: null,
                  color: 'white',
                  paddingTop: 2,
                  paddingHorizontal: sizes.marginHorizontal / 2,

                  paddingTop: multiline ? 2 : 0, // Multiline mein thoda niche se shuru hoga
                  paddingBottom: multiline ? 0 : 0,

                },
                inputStyle,
              ]}
            />
          )}
        </View>

        {/* Right Icon Logic */}
        <View>
          {right ? right : iconNameRight ? (
            <Wrapper style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
              <Icon
                name={iconNameRight}
                type={iconTypeRight}
                size={iconSizeRight || sizes.icons.medium}
                color={iconColorRight || colors.appTextColor5}
                onPress={onPressIconRight}
              />
            </Wrapper>
          ) : null}
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
}
function Underlined({
  onPress,
  inputRef,
  autoFocus,
  left,
  keyboardType,
  right,
  error,
  editable,
  titleStyle,
  title,
  maxLength,
  customIconLeft,
  iconNameLeft,
  multiline,
  iconNameRight,
  placeholderTextColor,
  iconTypeLeft,
  iconTypeRight,
  iconSizeLeft,
  iconSizeRight,
  iconColorLeft,
  iconColorRight,
  iconStyleLeft,
  iconStyleRight,
  onPressIconLeft,
  onPressIconRight,
  placeholder,
  onFocus,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  titleStatic,
  autoCapitalize,
  children,
  inputBorderStyle,
  inputTitle,
  inputTitleMarginLeft
}) {
  const [titleMarginBottom] = useState(new Animated.Value(0));
  //const [titleSize] = useState(new Animated.Value(fontSizes.regular))
  const defaultTitleBottomMargin = responsiveHeight(4.5);
  const FocusedTitleMarginBottom = defaultTitleBottomMargin;
  //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
  //const [titleSize, setTitleSize] = useState(fontSizes.input)
  const moveTitleUp = () => {
    Animated.timing(titleMarginBottom, {
      toValue: defaultTitleBottomMargin,
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSizes.small,
    //     duration: 250,
    //    // useNativeDriver: true
    // }).start();
  };
  const moveTitleDown = () => {
    Animated.timing(titleMarginBottom, {
      toValue: 0,
      duration: 250,
      speed: 50,
      useNativeDriver: false,
    }).start();
    // Animated.spring(titleSize, {
    //     toValue: fontSizes.regular,
    //     duration: 250,
    //   //  useNativeDriver: true
    // }).start();
  };
  const onFocusInput = () => {
    moveTitleUp();
  };
  const onBlurInput = () => {
    moveTitleDown();
  };

  const styles = StyleSheet.create({
    iconContainer: {
      alignItems: 'flex-end',
      paddingTop: title
        ? Platform.OS === 'ios'
          ? responsiveHeight(1.5)
          : responsiveHeight(2.5)
        : null,
    },
  });
  const defaultTintColor = colors.appTextColor1;
  return (
    <Wrapper>
      {inputTitle ? (
        <>
          <Text
            isInputTitle
            style={{
              marginLeft: inputTitleMarginLeft ? inputTitleMarginLeft : responsiveWidth(5)
            }} >{inputTitle}</Text>
        </>
      ) : null}
      <Spacer isTiny />
      <TouchableOpacity disabled={!onPress} activeOpacity={1} onPress={onPress}>
        <Wrapper marginHorizontalBase style={[containerStyle, {
          backgroundColor: colors.appInputBgColor,
          borderRadius: 12,
          borderBottomWidth: 1,
          borderColor: colors.placeholderBorderColor,
          paddingHorizontal: 10,


        }]}>
          {titleStatic ? (
            <>
              <Text isInputTitle>{titleStatic}</Text>
            </>
          ) : null}
          <Wrapper
            style={[
              appStyles.inputContainerUnderLined,
              {
                //borderRadius: sizes.b,
                borderBottomWidth: 0,
                borderBottomColor: defaultTintColor,
                marginHorizontal: 0,


              },
              inputBorderStyle,
            ]}>
            {left ? (
              left
            ) : customIconLeft ? (
              <Wrapper style={[styles.iconContainer]}>
                <Icons.Custom
                  icon={customIconLeft}
                  size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
                  color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
                  containerStyle={iconStyleLeft}
                />
              </Wrapper>
            ) : iconNameLeft ? (
              <Wrapper style={[styles.iconContainer]}>
                <Icon
                  name={iconNameLeft}
                  type={iconTypeLeft}
                  size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
                  color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
                  iconStyle={iconStyleLeft}
                  onPress={onPressIconLeft}
                />
              </Wrapper>
            ) : null}
            <Wrapper
              style={[{ flex: 7, justifyContent: 'center' }, inputContainerStyle]}>
              <Wrapper
                isAbsolute
                style={{
                  top: 0,
                  bottom: 0,
                  ...appStyles.center,
                  backgroundColor: 'transparent',
                }}>
                <Wrapper
                  style={{
                    marginBottom: value
                      ? FocusedTitleMarginBottom
                      : titleMarginBottom,
                  }}>
                  <Text isInputTitle style={[titleStyle, {}]}>
                    {title}
                  </Text>
                </Wrapper>
              </Wrapper>
              <Wrapper style={{}}>
                {children ? (
                  children
                ) : onPress ? (
                  <Wrapper
                    style={{ height: sizes.inputHeight, justifyContent: 'center' }}>
                    {value ? (
                      <Wrapper>
                        <Spacer
                          height={
                            title
                              ? Platform.OS === 'ios'
                                ? responsiveHeight(1.25)
                                : responsiveHeight(1.25)
                              : 0
                          }
                        />
                        <Text isMedium numberOfLines={1}>
                          {value}
                        </Text>
                      </Wrapper>
                    ) : null}
                  </Wrapper>
                ) : (
                  <TextInput
                    ref={inputRef}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                    onFocus={() => {
                      onFocusInput();
                      onFocus ? onFocus() : null;
                    }}
                    onBlur={() => {
                      onBlurInput(), onBlur ? onBlur() : null;
                    }}
                    editable={editable}
                    underlineColorAndroid="transparent"
                    maxLength={maxLength}
                    multiline={multiline}
                    placeholderTextColor={
                      placeholderTextColor
                        ? placeholderTextColor
                        : colors.placeholderTextColor
                    }
                    secureTextEntry={secureTextEntry}
                    style={[
                      appStyles.inputField,
                      {
                        color: defaultTintColor,
                        width: null,
                        height: sizes.inputHeight,
                        paddingTop: title
                          ? Platform.OS === 'ios'
                            ? responsiveHeight(1.5)
                            : responsiveHeight(2.5)
                          : null,
                        paddingHorizontal: 0,
                      },
                      inputStyle,
                    ]}
                  />
                )}
              </Wrapper>
            </Wrapper>

            {right ? (
              right
            ) : iconNameRight ? (
              <Wrapper alignItemsFlexEnd style={[styles.iconContainer]}>
                <Icon
                  name={iconNameRight}
                  type={iconTypeRight ? iconTypeRight : "material-community"}
                  size={iconSizeRight ? iconSizeRight : sizes.icons.medium}
                  color={iconColorRight ? iconColorRight : colors.appTextColor1}
                  iconStyle={iconStyleRight}
                  onPress={onPressIconRight}
                />
              </Wrapper>
            ) : null}

          </Wrapper>

        </Wrapper>
        {error ? (
          <Wrapper style={{}} marginHorizontalBase>
            <Spacer isTiny />
            <Icons.WithText
              // iconName="alert-circle-outline"
              //title="New"
              text={error}
              tintColor={colors.error}
              // iconSize={sizes.icons.tiny}
              textStyle={[{ fontSize: fontSizes.tiny }]}
            />
          </Wrapper>
        ) : null}
      </TouchableOpacity>

    </Wrapper>
  );
};

function SearchBar({
  value,
  placeholder,
  inputContainerStyle,
  onChangeText,
  right,
  onPressCross,
  iconStyle,
  placeholderTextColor,
  ...props
}) {
  return (
    <Colored
      value={value}
      onChangeText={onChangeText}
      iconNameLeft="search"
      iconTypeLeft="feather"
      iconSizeLeft={sizes.icons.tiny}
      placeholder={placeholder ? placeholder : 'Search'}
      inputContainerStyle={inputContainerStyle}
      iconNameRight={value && onPressCross && 'close-circle'}
      iconTypeRight="ionicon"
      iconStyleLeft={iconStyle}
      onPressIconRight={onPressCross}
      placeholderTextSize={fontSizes.tiny}
      right={right}
      inputStyle={{
        height: responsiveHeight(6),
        paddingHorizontal: sizes.marginHorizontal / 2,
      }}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};




export { Colored, Bordered, Underlined, SearchBar };
