import React, { useRef, useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Animated, Platform, Pressable } from 'react-native'
import { Icon } from '@rneui/base';
import { colors, fontSizes, appFonts, sizes, appIcons, appStyles, HelpingMethods, responsiveHeight, responsiveWidth, responsiveFontSize } from '../../services';
import RNPickerSelect from 'react-native-picker-select'
import * as Icons from '../icons';
import * as TextInputs from '../textInput';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';

export function Primary({
    onDonePress, containerStyle, data, title, onChange,
    placeholder, error, value, itemKey,
    left, customIconLeft, iconSizeLeft, iconColorLeft,
    iconStyleLeft, iconNameLeft, mainContainerStyle, iconTypeLeft,
    titleStatic, isPressable,
    rightIconName,rightIconType,isRightIcon,
    onPressCalendar
}) {

    const placeholderObject = {
        label: placeholder,
        value: null, // 'placeholder' ki jagah null behtar hai dropdown logic ke liye
        color: '#909090',
    }

    // Animated logic stays same...
    const [titleMarginBottom] = useState(new Animated.Value(value ? responsiveHeight(6) : 0))
    const detaultTitleMarginBottom = responsiveHeight(4.5)
    const FocusedTitleMarginBottom = detaultTitleMarginBottom

    const moveTitleUp = () => {
        Animated.timing(titleMarginBottom, {
            toValue: detaultTitleMarginBottom,
            duration: 250,
            useNativeDriver: false
        }).start();
    };
    const moveTitleDown = () => {
        Animated.timing(titleMarginBottom, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false
        }).start();
    };

    const onChangeValue = (value) => {
        !value || value === 'placeholder' ? moveTitleDown() : moveTitleUp()
    }

    return (
        <Wrapper  >
            {titleStatic && <Text isInputTitle style={{ marginBottom: 2 }}>{titleStatic}</Text>}

            <Wrapper style={[
                {
                    borderWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: '#6E6E6E', // Aapki image jaisa dark color
                    borderRadius: responsiveWidth(2),
                    backgroundColor: 'transparent',
                    height: responsiveHeight(4.5), // Standard height
                    justifyContent: 'center', // Vertical centering,
                    width: responsiveWidth(38),

                },
                containerStyle
            ]}>
                {
                    isPressable ?
                        <Pressable onPress={onPressCalendar}>
                            <Wrapper
                                flexDirectionRow
                                alignItemsCenter
                                marginHorizontalTiny
                            >
                                <Text isRegTextTiny style={{
                                    color: value ? 'white' : '#7A7A7A',

                                }}>
                                    {value ? value : placeholder}
                                </Text>
                                <Wrapper marginHorizontalTiny>
                                    {
                                        isRightIcon && <Icon
                                            name={rightIconName ? rightIconName : "calendar-blank-outline"}
                                            type={rightIconType ? rightIconType : 'material-community'}
                                            size={responsiveFontSize(16)}
                                            color={'#6E6E6E'}
                                        />
                                    }
                                </Wrapper>
                            </Wrapper>
                        </Pressable> :

                        <RNPickerSelect
                            onDonePress={onDonePress}
                            onValueChange={(value, index) => {
                                onChangeValue(value)
                                onChange ? onChange(value, index) : null;
                            }}
                            value={value}
                            itemKey={itemKey}
                            items={data}
                            placeholder={placeholderObject}
                            useNativeAndroidPickerStyle={false} // Custom styling ke liye zaroori hai
                            style={{
                                inputIOS: {
                                    fontSize: fontSizes.tiny,
                                    fontFamily: appFonts.appTextRegular,
                                    color: 'white',
                                    paddingLeft: responsiveWidth(4),
                                    paddingRight: 40,
                                    height: '100%',
                                    textAlignVertical: 'center',
                                },
                                inputAndroid: {
                                    fontSize: fontSizes.tiny,
                                    fontFamily: appFonts.appTextRegular,
                                    color: 'white',
                                    paddingLeft: responsiveWidth(3),
                                    paddingRight: 40,
                                    height: responsiveHeight(5.5), // Android par height fix
                                    textAlignVertical: 'center',
                                    paddingBottom: 10, // Minor adjustment for text centering
                                },

                                placeholder: {
                                    color: '#7A7A7A',
                                },
                                iconContainer: {
                                    top: '30%', // Icon ko vertically center karne ke liye
                                    right: 15,
                                },
                            }}
                            Icon={() => (
                                <Icon
                                    name='chevron-thin-down'
                                    type='entypo'
                                    size={responsiveFontSize(12)}
                                    color={'#6E6E6E'}
                                />
                            )}
                        />
                }


            </Wrapper>

            {error && (
                <Wrapper animation="shake" style={{ marginTop: 5 }}>
                    <Icons.WithText
                        iconName="alert-circle-outline"
                        text={error}
                        tintColor={colors.error}
                        iconSize={sizes.icons.tiny}
                        textStyle={{ fontSize: fontSizes.small }}
                    />
                </Wrapper>
            )}
        </Wrapper>
    );
}

export function Searchable({ placeholder, error, titleStyle, containerStyle, iconColor, inputBorderStyle, data, value, inputStyle, onPressItem, onPressAdd, title, onChangeText, right, left, tintColor, onFocus, onBlur }) {
    const searchInputRef = useRef(null)
    const [isFocused, setFocused] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const handleOnFocus = () => {
        HelpingMethods.handleAnimation()
        setFocused(true)
    }
    const handleOnBlur = () => {
        HelpingMethods.handleAnimation()
        setFocused(false)
        setSearchQuery('')
    }
    const handleOnPressItem = () => {
        HelpingMethods.handleAnimation()
        handleOnBlur()
        searchInputRef.current.blur()
        setSearchQuery('')
    }
    const getData = () => {
        let tempData = []
        if (searchQuery) {
            let query = searchQuery.toLowerCase()
            tempData = data?.filter(item => {
                return (
                    item.label.toLowerCase().includes(query)
                )
            })
        } else {
            tempData = data
        }
        return tempData
        //console.log('Searched options===>',tempData)
    }

    return (
        <Wrapper>
            <TextInputs.Underlined
                containerStyle={containerStyle}
                title={title}
                titleStyle={titleStyle}
                inputBorderStyle={inputBorderStyle}
                inputRef={searchInputRef}
                placeholder={isFocused ? "Type Here" : placeholder}
                placeholderTextColor={tintColor}
                value={value ? value : searchQuery ? searchQuery : ''}
                onFocus={() => {
                    handleOnFocus();
                    onFocus && onFocus()
                }}
                onBlur={() => {
                    handleOnBlur();
                    onBlur && onBlur()
                }}
                onChangeText={text => {
                    setSearchQuery(text);
                    onChangeText ? onChangeText(text) : null
                }}
                inputStyle={inputStyle}
                error={error}
                right={
                    right ? right :
                        <Icon name="caret-down-sharp" type="ionicon" size={responsiveFontSize(1.5)} color={[iconColor, colors.appColor1]} />
                }
                left={left}
            />
            {
                isFocused &&
                <Wrapper marginHorizontalBase style={{ height: "auto", backgroundColor: colors.appBgColor2, marginBottom: sizes.smallMargin }}>
                    {
                        getData().length ?

                            <>
                                <Spacer isTiny />
                                {
                                    getData().map((item, index) => {
                                        return (
                                            <Wrapper marginHorizontalBase key={index + ''} style={[appStyles.marginHorizontalSmall]}>
                                                <TouchableOpacity onPress={() => onPressItem(item, index, handleOnPressItem())} activeOpacity={1} style={{ paddingVertical: sizes.TinyMargin }}>
                                                    <Text isMedium style={[appStyles.textMedium]}>{item.label}</Text>
                                                </TouchableOpacity>
                                            </Wrapper>
                                        )
                                    })
                                }
                            </>
                            :
                            <Wrapper style={{ flex: 1, ...appStyles.center }}>
                                <Text isRegular isGray >No Data Available</Text>
                            </Wrapper>
                    }

                </Wrapper>
            }
        </Wrapper >
    )
}



export function Secondary({
    onDonePress, containerStyle, data, title, onChange,
    placeholder, error, value, itemKey,
    left, customIconLeft, iconSizeLeft, iconColorLeft,
    iconStyleLeft, iconNameLeft, mainContainerStyle, iconTypeLeft,
    titleStatic, isPressable,
    rightIconName,rightIconType,isRightIcon,
    onPressCalendar,
    borderWidth,borderColor,
    iconColor,placeholdeTextColor
}) {

    const placeholderObject = {
        label: placeholder,
        value: null, // 'placeholder' ki jagah null behtar hai dropdown logic ke liye
        color: '#909090',
    }

    // Animated logic stays same...
    const [titleMarginBottom] = useState(new Animated.Value(value ? responsiveHeight(6) : 0))
    const detaultTitleMarginBottom = responsiveHeight(4.5)
    const FocusedTitleMarginBottom = detaultTitleMarginBottom

    const moveTitleUp = () => {
        Animated.timing(titleMarginBottom, {
            toValue: detaultTitleMarginBottom,
            duration: 250,
            useNativeDriver: false
        }).start();
    };
    const moveTitleDown = () => {
        Animated.timing(titleMarginBottom, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false
        }).start();
    };

    const onChangeValue = (value) => {
        !value || value === 'placeholder' ? moveTitleDown() : moveTitleUp()
    }

    return (
        <Wrapper  >
            {titleStatic && <Text isInputTitle style={{ marginBottom: 2 }}>{titleStatic}</Text>}

            <Wrapper style={[
                {
                 
                    borderRadius: responsiveWidth(4),
                    backgroundColor: '#121212',
                    height: responsiveHeight(4.5), // Standard height
                    justifyContent: 'center', // Vertical centering,
                    width: responsiveWidth(30),
                    borderWidth:borderWidth,
                    borderColor:borderColor

                },
                containerStyle
            ]}>
              

                        <RNPickerSelect
                            onDonePress={onDonePress}
                            onValueChange={(value, index) => {
                                onChangeValue(value)
                                onChange ? onChange(value, index) : null;
                            }}
                            value={value}
                            itemKey={itemKey}
                            items={data}
                            placeholder={placeholderObject}
                            useNativeAndroidPickerStyle={false} // Custom styling ke liye zaroori hai
                            style={{
                                inputIOS: {
                                    fontSize: fontSizes.tiny,
                                    fontFamily: appFonts.appTextRegular,
                                    color: 'white',
                                    paddingLeft: responsiveWidth(4),
                                    paddingRight: 40,
                                    height: '100%',
                                    textAlignVertical: 'center',
                                },
                                inputAndroid: {
                                    fontSize: fontSizes.tiny,
                                    fontFamily: appFonts.appTextRegular,
                                    color: 'white',
                                    paddingLeft: responsiveWidth(2),
                                    paddingRight: 20,
                                    height: responsiveHeight(5.5), // Android par height fix
                                    textAlignVertical: 'center',
                                    paddingBottom: 10, // Minor adjustment for text centering
                                },

                                placeholder: {
                                    color: placeholdeTextColor?placeholdeTextColor:'#7A7A7A',
                                },
                                iconContainer: {
                                    top: '30%', // Icon ko vertically center karne ke liye
                                    right: 10,
                                },
                            }}
                            Icon={() => (
                                <Icon
                                    name='chevron-thin-down'
                                    type='entypo'
                                    size={responsiveFontSize(12)}
                                    color={iconColor?iconColor:'#6E6E6E'}
                                />
                            )}
                        />
               

            </Wrapper>

            {error && (
                <Wrapper animation="shake" style={{ marginTop: 5 }}>
                    <Icons.WithText
                        iconName="alert-circle-outline"
                        text={error}
                        tintColor={colors.error}
                        iconSize={sizes.icons.tiny}
                        textStyle={{ fontSize: fontSizes.small }}
                    />
                </Wrapper>
            )}
        </Wrapper>
    );
}
