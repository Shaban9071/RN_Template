import React from 'react'
import { View, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import { Icon } from '@rneui/base';
import { colors, appStyles, fontSizes, sizes, responsiveHeight, responsiveWidth, responsiveFontSize, appImages } from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import ButtonGroupAnimated from './buttonGroupAnimated'
import Spacer from '../spacer';
import { Images } from '..';

export function Colored({
    text,
    isLoading,
    activityColor,
    animation,
    onPress,
    disabled,
    buttonStyle,
    customIcon,
    textStyle,
    iconName,
    iconType,
    iconSize,
    buttonColor,
    iconStyle,
    tintColor,
    direction,
    rightBgColor,
    rightCircleIcon = false
}) {

    const bgColor = disabled
        ? colors.buttonColor + '80'
        : buttonColor
            ? buttonColor
            : colors.buttonColor;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading ? true : disabled}
        >
            <Wrapper
                animation={animation}
                style={[
                    appStyles.buttonColord,
                    {
                        borderRadius: sizes.buttonRadius,
                        height: sizes.buttonHeight,
                        backgroundColor: bgColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    buttonStyle
                ]}
            >


                {
                    isLoading ?
                        <ActivityIndicator
                            color={activityColor ? activityColor : colors.appBgColor1}
                            size={"small"}
                        />
                        :
                        <Text
                            isButtonMedium
                            style={[
                                {
                                    color: tintColor ? tintColor : colors.appTextColor3,
                                },
                                textStyle
                            ]}
                        >
                            {text}
                        </Text>
                }


                {
                    rightCircleIcon && !isLoading && (
                        <Wrapper
                            style={{
                                position: 'absolute',
                                right: responsiveWidth(1),
                                width: responsiveHeight(5),
                                height: responsiveHeight(5),
                                borderRadius: responsiveHeight(3),
                                borderWidth: 1.5,
                                borderColor: tintColor ? tintColor : colors.black,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: rightBgColor ? rightBgColor : colors.black
                            }}
                        >
                            {
                                iconName ?
                                    <Icon
                                        name={iconName}
                                        type={iconType ? iconType : "material-community"}
                                        size={iconSize ? iconSize : responsiveFontSize(20)}
                                        color={tintColor ? tintColor : colors.appTextColor3}
                                        iconStyle={iconStyle}
                                    />
                                    :
                                    <Wrapper>
                                        <Images.SqareRound
                                            source={appImages.arrow}
                                            size={responsiveFontSize(16)}
                                        />
                                    </Wrapper>
                            }
                          

                        </Wrapper>
                    )
                }

            </Wrapper>
        </TouchableOpacity>
    );
}


export function ColoredSmall({
    text,
    textColor,
    onPress,
    buttonStyle,
    customIcon,
    direction,
    textStyle,
    iconName,
    iconType,
    iconSize,
    iconColor,
    iconStyle,
    paddingHorizontal,
    isSemiTextMed
}) {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: responsiveWidth(10), paddingHorizontal: paddingHorizontal ? paddingHorizontal : responsiveWidth(8), paddingVertical: responsiveHeight(.8), backgroundColor: colors.buttonColor }, buttonStyle]}>
            <Wrapper style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <Icons.Custom
                            icon={customIcon}
                            size={iconSize ? iconSize : responsiveFontSize(2)}
                            color={iconColor ? iconColor : colors.appTextColor6}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : responsiveFontSize(2)}
                                color={iconColor ? iconColor : colors.appTextColor6}
                                iconStyle={[{}, iconStyle]}
                            />
                            :
                            null
                }
                <Text isRegTextH6 isSemiTextMed={isSemiTextMed} style={[{ color: textColor ? textColor : colors.appTextColor3, }, textStyle]}>  {text}  </Text>
            </Wrapper>
        </TouchableOpacity>
    );
}

export function Bordered({ text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor }) {
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight, borderColor: tintColor ? tintColor : colors.appColor2 }, buttonStyle]}>
            <Wrapper style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <Icons.Custom
                            icon={customIcon}
                            size={iconSize ? iconSize : responsiveFontSize(3)}
                            color={iconColor ? iconColor : null}
                            containerStyle={[{ marginRight: responsiveWidth(2.5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : responsiveFontSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: responsiveWidth(2.5) }, iconStyle]}

                            />
                            :
                            null
                }
                <Text isButtonMedium style={[{ color: tintColor ? tintColor : colors.appColor2, }, textStyle]}>{text}</Text>
            </Wrapper>
        </TouchableOpacity>
    );
}

export function BorderedSmall({ text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor }) {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
            <Wrapper style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : responsiveFontSize(2)}
                            color={tintColor ? tintColor : colors.appColor1}
                            iconStyle={[{ marginHorizontal: responsiveWidth(2) }, iconStyle]}
                        />
                        :
                        null
                }
                <Text isButtonRegular style={[{ color: tintColor ? tintColor : colors.appColor1, fontSize: fontSizes.regular }, textStyle]}>{text}</Text>
            </Wrapper>
        </TouchableOpacity>
    );
}

export function FeatureButton({
    iconName,
    iconType,
    title,
    onPress
}) {
    return (
        <Pressable onPress={onPress}>
            <Wrapper

                justifyContentCenter
                style={{

                    height: responsiveHeight(4),
                    borderRadius: responsiveWidth(10),
                    borderWidth: 1,
                    borderColor: colors.appColor2,
                    marginLeft: responsiveWidth(2)
                }}>
                <Wrapper flexDirectionRow paddingHorizontalSmall alignItemsCenter>
                    <Text isMedTextTiny>{title}</Text>
                    <Spacer horizontal isTiny />
                    <Icon name={iconName} type={iconType} size={16} color={'white'} />
                </Wrapper>
            </Wrapper>
        </Pressable>


    )
} export function HelperButton({
    leftImage,
    smallText,
    tinyText,
    onPress,
    spaceBeforeImage,
    spaceAfterText,
    rightIcon
}) {
    return (
        <Pressable onPress={onPress}  >
            <Wrapper
                alignItemsCenter
                flexDirectionRow
                style={[
                    appStyles.helpYouContainer,

                ]}>

                {spaceBeforeImage && <Spacer isTiny horizontal />}

                {/* Left Image Logic */}
                {leftImage && (
                    <Wrapper
                        marginHorizontalTiny
                        style={{
                            backgroundColor: colors.appColor2,
                            borderRadius: responsiveWidth(3),
                            padding: 2
                        }}>
                        <Images.SqareRound
                            source={appImages.starimage}
                            size={18}
                        />
                    </Wrapper>
                )}
                {tinyText && <Text isRegTextTiny isWhite>{tinyText}</Text>}
                {/* Text Wrapper - Isko flex: 1 diya hai taake ye bachi hui space le le */}
                <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    {smallText && (
                        <Text
                            isRegTextSmall

                        >
                            {smallText}
                        </Text>
                    )}
                </Wrapper>

                {/* Right Icon Logic */}
                {rightIcon && (
                    <Wrapper
                        style={{
                            backgroundColor: '#FFFFFF', // Image ke mutabiq white background
                            height: responsiveWidth(8),
                            width: responsiveWidth(8),
                            borderRadius: responsiveWidth(4), // Perfect Circle
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: responsiveWidth(2)
                        }}>
                        <Icon
                            type='feather'
                            size={responsiveFontSize(16)}
                            color={'black'}
                            name='message-square'
                        />
                    </Wrapper>
                )}

                {spaceAfterText && <Spacer isTiny horizontal />}
            </Wrapper>
        </Pressable>
    )
}
export { ButtonGroupAnimated }