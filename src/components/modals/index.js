import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList, Platform, Pressable, TextInput, KeyboardAvoidingView } from 'react-native'
import { Icon } from '@rneui/base';
import { colors, sizes, appStyles, useKeyboardStatus, responsiveHeight, responsiveWidth, responsiveFontSize, appImages } from '../../services';
import Modal from 'react-native-modal'
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as Buttons from '../buttons';
import * as ScrollViews from '../scrollViews';
import LinearGradient from 'react-native-linear-gradient';
import { Images, Pickers, TextInputs } from '..';


// export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
//     return (
//         <Modal
//             isVisible={isVisible}
//             swipeDirection="down"
//             onSwipeComplete={toggleModal}
//             style={{ margin: 0 }}
//             // backdropOpacity={0}
//             onBackdropPress={toggleModal}
//         >
//             <Wrapper flex={1}>
//                 <Wrapper flex={headerFlex ? headerFlex : 1.5} />
//                 <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
//                     {children}
//                     <Wrapper style={[styles.barContainer]}>
//                         <Wrapper style={[appStyles.center]}>
//                             <TouchableOpacity onPress={toggleModal}>
//                                 <Lines.Horizontal
//                                     height={4}
//                                     width={responsiveWidth(15)}
//                                     style={{ borderRadius: 5 }}
//                                     color={colors.appBgColor3}
//                                 />
//                             </TouchableOpacity>
//                             <Spacer isBasic />
//                             <Text isTinyTitle>{title}</Text>
//                         </Wrapper>
//                     </Wrapper>
//                     <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
//                         <Icon
//                             name="close"
//                         />
//                     </Wrapper>
//                 </Wrapper>
//             </Wrapper>
//         </Modal>
//     );
// }

export function Swipable({
    visible, toggle, disableSwipe, disableBackdropPress, topMargin, headerTitle,
    headerRight, headerLeft, hideHeader, children, backdropOpacity, backdropColor, containerStyle }) {

    // manage keyboard
    const keyboardVisible = useKeyboardStatus()


    const defaultTopMargin = keyboardVisible ? responsiveHeight(12) : topMargin ? (Platform.OS === 'ios' ? topMargin : topMargin + responsiveHeight(5)) : responsiveHeight(12)
    return (
        <Modal
            isVisible={visible} // Comment on video User
            style={{ margin: 0 }}
            onSwipeComplete={toggle}
            swipeDirection={disableSwipe ? null : "down"}
            propagateSwipe
            onBackdropPress={disableBackdropPress ? null : toggle}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            backdropColor={backdropColor && backdropColor}

        >
            <Wrapper flex={1} >
                {/* <LinearGradient style={{ flex: 1 }}
                colors={['#00000000', '#000000']}
            > */}
                {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <LinearGradient style={{ flex: 1 }}
                        colors={['#00000000', '#000000BF']}
                    />
                </TouchableOpacity> */}
                <Wrapper flex={1} justifyContentFlexend={!keyboardVisible}>
                    <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                        <LinearGradient style={{ flex: 1 }}
                            colors={['#00000000', '#000000BF']}
                        />
                    </TouchableOpacity>
                    <Wrapper
                        style={[{
                            //flex: 1,
                            //marginTop: defaultTopMargin,
                            backgroundColor: colors.appBgColor1,
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,
                            //...appStyles.shadowExtraDark
                        }, containerStyle]}>
                        {
                            hideHeader ? null :
                                <Wrapper style={appStyles.rowCompContainer}>
                                    <Wrapper style={{ alignItems: 'center', right: 0, left: 0 }}>
                                        <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                                            {/* {data ? data.length + ' People' : 0 + ' People'} */}
                                            {headerTitle ? headerTitle : 'Title'}
                                        </Text>
                                    </Wrapper>
                                    <Wrapper>
                                        {
                                            headerLeft ? headerLeft :
                                                // <BackIcon
                                                //     onPress={toggle}
                                                //     color={colors.appTextColor6}
                                                // />
                                                <Icon
                                                    name="x"
                                                    type="feather"
                                                    size={responsiveFontSize(2.5)}
                                                    color={colors.appTextColor1}
                                                    onPress={toggle}
                                                />
                                        }
                                    </Wrapper>

                                    <Wrapper style={{}}>
                                        {headerRight}
                                    </Wrapper>
                                </Wrapper>
                        }
                        {children}

                    </Wrapper>
                </Wrapper>
                {/* </LinearGradient> */}
            </Wrapper>
        </Modal >
    )
}

export function PopupPrimary({
    visible, toggle, title, info, iconName, iconType,
    customIcon, buttonText1, buttonText2, onPressButton1,
    onPressButton2, topMargin, children, scrollEnabled,
    backdropColor, backdropOpacity, onPressClose,
    button1Style, button2Style, keyboardShouldPersistTaps,
    headerTitle, topImage, headerRight, closeIconColor, disableSwipe, icon, disableBackdropPress,
    headerTitleStyle, preBottom, headerStyle, closeIconSize, rightContainerStyle, closeIconContainerSize,
    buttonWrapperShadow, headerBottom, titleStyle, buttonText1Style, buttonText2Style, headerSubtitleStyle, headerSubtitle,
    buttonsDirection, buttonsContainerStyle, mainContainerStyle, containerStyle,

    //loaders
    loadingButton1, loadingButton2
}) {


    // manage keyboard
    const keyboardVisible = useKeyboardStatus()

    const defaultTopMargin = Platform.OS === 'ios' ? responsiveHeight(50) : responsiveHeight(40)
    const customTopMargin = keyboardVisible ? responsiveHeight(10) : topMargin ? Platform.OS === 'ios' ? topMargin : topMargin - responsiveHeight(10) : defaultTopMargin
    const isRowButtons = buttonsDirection === 'row' || buttonsDirection === 'row-reverse'
    return (
        <Swipable
            visible={visible}
            toggle={toggle}
            hideHeader
            topMargin={customTopMargin}
            backdropColor={backdropColor}
            backdropOpacity={backdropOpacity ? backdropOpacity : 0}
            disableSwipe={disableSwipe}
            disableBackdropPress={disableBackdropPress}
            containerStyle={mainContainerStyle}
        >
            <Wrapper style={containerStyle}>
                {
                    headerTitle ?
                        <Wrapper style={{}}>
                            <Wrapper style={[{ paddingHorizontal: sizes.marginHorizontal, backgroundColor: 'transparent', paddingBottom: sizes.marginVertical, paddingTop: sizes.marginVertical * 1.5, justifyContent: 'center', }, headerStyle]}>
                                <Text isSmallTitle style={[appStyles.textCenter, headerTitleStyle]}>{headerTitle}</Text>
                                {
                                    headerSubtitle ?
                                        <Text isRegular style={[appStyles.textCenter, { marginTop: sizes.smallMargin }, headerSubtitleStyle]}>{headerSubtitle}</Text>
                                        :
                                        null
                                }
                                <Wrapper isAbsolute style={[{ right: sizes.marginHorizontal, top: sizes.marginVertical * 1.3 }, rightContainerStyle]}>
                                    {
                                        headerRight ? headerRight :
                                            onPressClose ?
                                                <Icons.Button
                                                    iconName="close"
                                                    iconColor={closeIconColor ? closeIconColor : colors.appTextColor1}
                                                    //buttonColor={colors.appBgColor3}
                                                    onPress={onPressClose}
                                                    iconSize={closeIconSize ? closeIconSize : responsiveFontSize(3)}
                                                    buttonSize={closeIconContainerSize ? closeIconContainerSize : responsiveFontSize(4)}
                                                    isRound
                                                //buttonColor={'red'}
                                                />
                                                :
                                                null
                                    }
                                </Wrapper>
                            </Wrapper>
                            {headerBottom && headerBottom}
                        </Wrapper>
                        :
                        <Spacer height={sizes.baseMargin * 1.5} />
                }


                <ScrollViews.WithKeyboardAvoidingView
                    containerStyle={{ flex: 0 }}
                    scrollEnabled={scrollEnabled}

                >
                    <Wrapper style={[appStyles.alignItemsCenter]}>
                        {

                            (icon || iconName || customIcon) ?

                                <>
                                    {icon ? icon :
                                        <Icons.Button
                                            iconName={iconName}
                                            iconType={iconType}
                                            customIcon={customIcon}
                                            iconColor={colors.appTextColor6}
                                            buttonColor={colors.appColor1}
                                            buttonSize={responsiveFontSize(10)}
                                            iconSize={responsiveFontSize(4)}
                                            buttonStyle={{ borderRadius: 100, }}
                                        />
                                    }
                                    <Spacer height={sizes.baseMargin * 1.5} />
                                </>
                                :
                                null
                        }
                    </Wrapper>
                    {
                        title ?
                            <>
                                <Wrapper marginHorizontalBase style={{ backgroundColor: 'transparent' }}>
                                    <Text isSmallTitle isBoldFont style={[appStyles.textCenter, titleStyle]}>{title}</Text>
                                </Wrapper>
                                <Spacer height={sizes.baseMargin} />
                            </>
                            :
                            null
                    }
                    {
                        info ?
                            <>
                                <Wrapper marginHorizontalLarge style={{ backgroundColor: 'transparent', }}>
                                    <Text isRegular style={[appStyles.textCenter]}>{info}</Text>
                                </Wrapper>
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }
                    {children}
                </ScrollViews.WithKeyboardAvoidingView>
                {preBottom}
                {/* </KeyboardAvoidingView> */}
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

                {
                    onPressButton1 || onPressButton2 ?
                        <Wrapper
                            marginHorizontalBase
                            style={[{
                                backgroundColor: colors.appBgColor1,
                                paddingBottom: sizes.baseMargin * 1.5,
                                paddingTop: sizes.baseMargin,
                                flexDirection: buttonsDirection || 'column-reverse',
                            },
                            buttonWrapperShadow && appStyles.shadowDark,
                                buttonsContainerStyle
                            ]}>
                            {
                                onPressButton2 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Bordered
                                            text={buttonText2}
                                            onPress={onPressButton2}
                                            tintColor={colors.appColor1}
                                            //tintColor={colors.appTextColor1}
                                            buttonStyle={[appStyles.marginHorizontalZero, button2Style]}
                                            textStyle={[buttonText2Style]}
                                            isLoading={loadingButton2}

                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                            {
                                (onPressButton2 && onPressButton1) ?
                                    isRowButtons ?
                                        <Spacer width={sizes.marginHorizontal} />
                                        :
                                        <Spacer height={sizes.marginVertical} />
                                    : null
                            }

                            {
                                onPressButton1 ?
                                    <Wrapper style={[isRowButtons && { flex: 1 }]}>
                                        <Buttons.Colored
                                            text={buttonText1}
                                            onPress={onPressButton1}
                                            shadow
                                            buttonStyle={[{ marginHorizontal: 0, }, button1Style]}
                                            textStyle={[buttonText1Style]}
                                            isLoading={loadingButton1}
                                        />
                                    </Wrapper>
                                    :
                                    null
                            }
                        </Wrapper>
                        :
                        null
                }
                {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

            </Wrapper>
        </Swipable>
    )
}


export function ImagePickerPopup({ visible, toggle, onPressButton1, onPressButton2, title, button1Text, button2Text, cancelText }) {
    return (
        <PopupPrimary
            visible={visible}
            title={title || "Choose Image"}
            // buttonText2="Cancel"
            // onPressButton2={toggle}
            toggle={toggle}
            topMargin={responsiveHeight(60)}
        >
            <Wrapper>
                <Wrapper marginHorizontalBase>
                    {
                        onPressButton1 ?
                            <>
                                <Buttons.Colored
                                    text={button1Text || "Take Photo"}
                                    //  iconName="camera"
                                    buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                                    textStyle={[{ color: colors.appTextColor3 }]}
                                    onPress={() => {
                                        toggle();
                                        setTimeout(() => {
                                            onPressButton1()
                                        }, 500);
                                    }}
                                    disableShadow
                                />
                                <Spacer isBasic />
                            </>
                            :
                            null
                    }

                    <Buttons.Colored
                        text={button2Text || "Select from Gallery"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.appBgColor2 }}
                        textStyle={[{ color: colors.appTextColor3 }]}
                        onPress={() => {
                            toggle();
                            setTimeout(() => {
                                onPressButton2()
                            }, 500);
                        }}
                        disableShadow
                    />
                    <Spacer isBasic />
                    <Buttons.Colored
                        text={cancelText || "Cancel"}
                        //iconName="image"
                        buttonStyle={{ backgroundColor: colors.transparent }}
                        textStyle={[{ color: colors.appTextColor1 }]}
                        onPress={() => {
                            toggle();
                        }}
                        disableShadow
                    />
                </Wrapper>
            </Wrapper>
        </PopupPrimary>
    );
}



export function ReviewModal({
    isVisible,
    toggle,
    pointsData,
    cost,
    onPressBookReview

}) {

    return (

        <Modal
            isVisible={isVisible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}



            style={appStyles.modalbg}
        >
            <Wrapper
                style={appStyles.modalContainer}>
                <Wrapper alignItemsCenter>
                    <Text isTinyTitle alignTextCenter isWhite>AI + Engineer Review</Text>
                    <Text isLightGray isTiny>Live 30-minute expert review of your generated scope</Text>
                    <Spacer isBasic />
                    <Text isPrimaryColor isSmallTitle>${cost}{' '}<Text isWhite isMedium>/one time</Text></Text>
                </Wrapper>
                <Text isTinyTitle isWhite>Features</Text>
                <Spacer isSmall />
                {
                    pointsData?.map((point, index) => {
                        return (

                            <Wrapper>
                                <Wrapper key={point} flexDirectionRow style={{ marginBottom: 10 }}>
                                    <Icon name="check-circle" type="feather" color={colors.appColor2} size={16} />
                                    <Spacer horizontal isSmall />
                                    <Text isTiny isWhite style={{ flex: 1 }}>{point}</Text>
                                </Wrapper>
                            </Wrapper>
                        )
                    })
                }
                <Spacer isSmall />

                <Wrapper flexDirectionRow justifyContentFlexend>
                    <Buttons.ColoredSmall
                        onPress={toggle}
                        paddingHorizontal={responsiveWidth(2)}
                        isSemiTextMed
                        text="Go Back"
                        textColor={colors.appTextColor9}
                        buttonStyle={{
                            backgroundColor: "transparent",
                            borderWidth: responsiveWidth(.15),
                            borderColor: colors.appTextColor9
                        }}
                    />
                    <Spacer horizontal isSmall />
                    <Buttons.ColoredSmall
                        isSemiTextMed
                        paddingHorizontal={responsiveWidth(2)}
                        onPress={onPressBookReview}
                        text="Book Review"
                    />
                </Wrapper>
            </Wrapper>

        </Modal>


    )
}

export function AddNewFeatureModal({
    isVisible,
    toggle,
    title,
    setTitle,
    iconData,
    onPressBookReview,
    description,
    setDescription,
    selectedIcon,
    setSelectedIcon,
    heading,
    selectedId,
    descriptionList,
    handleRemovepoint,
    handleAddPoint,



}) {
    return (


        <Modal
            isVisible={isVisible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}

            style={appStyles.modalbg}
        >

            <Wrapper
                style={appStyles.modalContainer}>
                <ScrollViews.KeyboardAvoiding>
                    <Wrapper alignItemsCenter>
                        <Text isTinyTitle alignTextCenter isWhite>{selectedId ? 'Edit Feature ' : 'Add New Feature'}</Text>
                    </Wrapper>

                    <Spacer isSmall />

                    <TextInputs.Bordered
                        label={'Title'}
                        placeholder="e.g., Destination & Package Exploration"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <Spacer isMedium />

                    <TextInputs.Bordered
                        label={'Description'}
                        placeholder="Enter Feature details or use bullet points for better clarity"
                        multiline={true}
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}

                    />
                    <Spacer isTiny />
                    {
                        description.length !== 0 && (
                            <Pressable
                                onPress={handleAddPoint}
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "flex-end"
                                }}>

                                <Text isGray isRegTextTiny>(Add a description point 👉)</Text>
                                <Spacer isTiny horizontal />
                                <Icon name='plus' type='material-community' color={colors.appColor2} size={16} />
                            </Pressable>
                        )
                    }
                    <Spacer isBasic />
                    {descriptionList.length !== 0 && (
                        <Wrapper flexDirectionRow justifyContentSpaceBetween>
                            <Text isSemiTextReg isWhite>Description Points :</Text>
                            <Text isTiny isGray>(Tap a point to edit)</Text>
                        </Wrapper>
                    )}
                    <Wrapper>
                        {descriptionList.map((item, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    setDescription(item);
                                    handleRemovepoint(index);
                                }}
                            >
                                <Wrapper
                                    flexDirectionRow
                                    justifyContentSpaceBetween
                                    alignItemsCenter
                                    style={{
                                        backgroundColor: colors.appBgColor1,
                                        padding: responsiveWidth(2),
                                        borderRadius: 8,
                                        marginBottom: responsiveWidth(1),
                                        borderWidth: 1,
                                        borderColor: colors.placeholderBorderColor
                                    }}
                                >
                                    <Wrapper style={{ flex: 1 }}>
                                        <Text isRegTextSmall isWhite>{item}</Text>
                                    </Wrapper>


                                    <Pressable
                                        style={{ marginLeft: responsiveWidth(2) }}
                                        onPress={() => handleRemovepoint(index)}>
                                        <Icon name="close" type="material" color={colors.appColor2} size={16} />
                                    </Pressable>
                                </Wrapper>
                            </Pressable>
                        ))}
                    </Wrapper>

                    <Spacer isBasic />

                    {/* CHOOSE ICON SECTION */}
                    <Text isSemiTextReg isWhite style={{ marginBottom: 12 }}>Choose Icon</Text>
                    <Wrapper flexDirectionRow justifyContentSpaceBetween>
                        {iconData.map((item) => {
                            const isSelected = selectedIcon === item.id;
                            return (
                                <Pressable
                                    key={item.id}
                                    onPress={() => setSelectedIcon(item.id)}
                                    style={[
                                        appStyles.iconCard,
                                        isSelected ? appStyles.selectedIconCard : appStyles.unselectedIconCard
                                    ]}
                                >
                                    {
                                        item.label !== 'Upload' && (
                                            <Images.SqareRound
                                                source={item.label === 'Report' ? appImages.reportImage : appImages.fileImage}
                                                size={responsiveWidth(12)}

                                            />
                                        )
                                    }
                                    {item.label === 'Upload' && (
                                        <>
                                            <Icon
                                                name={'upload'}
                                                type={'feather'}
                                                size={responsiveFontSize(26)}
                                                color={colors.appColor2}
                                            />
                                            <Text isRegTextSmall style={{ marginTop: 5 }}>{item.label}</Text>
                                        </>
                                    )}
                                </Pressable>
                            );
                        })}
                    </Wrapper>

                    <Spacer isBasic />
                    <Wrapper flexDirectionRow justifyContentFlexend>
                        <Buttons.ColoredSmall
                            onPress={toggle}
                            paddingHorizontal={responsiveWidth(2)}
                            isSemiTextMed
                            text="Go Back"
                            textColor={colors.appTextColor9}
                            buttonStyle={{
                                backgroundColor: "transparent",
                                borderWidth: responsiveWidth(.15),
                                borderColor: colors.appTextColor9
                            }}
                        />
                        <Spacer horizontal isSmall />
                        <Buttons.ColoredSmall
                            isSemiTextMed
                            onPress={onPressBookReview}
                            paddingHorizontal={responsiveWidth(2)}

                            text={selectedId ? "Update Feature" : "Save Feature"}
                        />
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

        </Modal>
    )


}






export function BotModal({
    isVisible,
    toggle,
    heading,
    value,
    onChangeText,
    onPressSendButton,
    data


}) {
    return (
        <Modal
            isVisible={isVisible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}
            animationIn="zoomIn"
            animationOut="zoomOut"
            style={appStyles.modalbg}
        >
            <Wrapper
                style={{
                    backgroundColor: colors.appColor1,
                    width: responsiveWidth(90),
                    height: responsiveHeight(66),
                    borderRadius: responsiveWidth(6),
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#333'
                }}>


                <Wrapper
                    flexDirectionRow
                    justifyContentSpaceBetween
                    alignItemsCenter
                    paddingHorizontalSmall
                    paddingVerticalSmall
                    style={{ backgroundColor: colors.black }}

                >
                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Images.SqareRound
                            source={appImages.botImage}
                            size={responsiveWidth(10)}
                        />
                        <Spacer isSmall horizontal />
                        <Wrapper>
                            <Text isSemiTextSmall isWhite>{heading}</Text>
                        </Wrapper>
                    </Wrapper>

                    <Pressable
                        onPress={toggle}
                        style={{
                            borderRadius: responsiveWidth(10),
                            backgroundColor: '#ffffff20',
                        }}>
                        <Icon name='close' type='material-community' size={20} color={'white'} style={{ padding: 4 }} />
                    </Pressable>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper style={{ flex: 1 }}>
                    <ScrollViews.KeyboardAvoiding contentContainerStyle={{ padding: 20 }}>
                        {data.map((item, index) => {
                            const isBot = item.sender === 'bot';
                            const BulletPoint = ({ text }) => (
                                <Wrapper flexDirectionRow style={{ marginVertical: 2, paddingRight: 10 }}>
                                    <Text isWhite>{''}•{' '}</Text>
                                    <Text isRegTextTiny>
                                        {text}
                                    </Text>
                                </Wrapper>
                            );

                            return (
                                <Wrapper>

                                    <Wrapper
                                        key={item.id} // Unique key zaroori hai
                                        style={{
                                            alignSelf: isBot ? 'flex-start' : 'flex-end',
                                            backgroundColor: isBot ? colors.black : colors.appBgColor2,
                                            paddingHorizontal: 12,
                                            paddingVertical: 6,
                                            borderRadius: responsiveWidth(4),
                                            borderBottomLeftRadius: isBot ? 0 : responsiveWidth(4),
                                            borderBottomRightRadius: isBot ? responsiveWidth(4) : 0,

                                            maxWidth: '85%',
                                            marginBottom: responsiveHeight(.5),
                                            marginLeft: isBot ? responsiveWidth(2) : 0,
                                            marginRight: isBot ? 0 : responsiveWidth(2)
                                        }}
                                    >
                                        <Text isRegTextTiny>{item.text}</Text>
                                        <Spacer isTiny />
                                        <Wrapper>
                                            {
                                                item.points?.map((point, index) => {
                                                    return (
                                                        <BulletPoint
                                                            key={index}
                                                            text={point}
                                                        />
                                                    )
                                                })
                                            }
                                        </Wrapper>

                                        {/* <ChatTail isBot={isBot} /> */}

                                    </Wrapper>
                                    <Wrapper marginHorizontalSmall style={{ alignSelf: isBot ? 'flex-start' : 'flex-end', }}>
                                        <Text isRegTextTiny>
                                            {item.timestamp}
                                        </Text>
                                    </Wrapper>
                                    <Spacer isTiny />
                                </Wrapper>
                            );
                        })}
                    </ScrollViews.KeyboardAvoiding>
                </Wrapper>


                <Wrapper
                    paddingVerticalTiny
                    style={{
                        backgroundColor: colors.black,

                    }}
                >
                    <TextInputs.Colored
                        placeholder={'Ask me something...'}
                        value={value} // State se connect kiya
                        onChangeText={onChangeText} // Text update handle kiya
                        onPressSendButton={onPressSendButton}
                        shareButton
                        sentIcon
                        rightIcons
                        containerStyle={{

                            borderWidth: 1,
                            borderColor: '#333',
                            borderRadius: responsiveWidth(10),


                        }}

                    />
                </Wrapper>


            </Wrapper>
        </Modal>
    )
}

export function AddNewMilestoneModal({

    isVisible,
    toggle,
    onPressUpdate,
    title, setTitle,
    description, setDescription,
    feature, setFeature,
    cost, setCost,
    duration, setDuration,
    formattedStart,
    onStartDatePress,
    formattedEnd,
    onEndDatePress,

    statusData,
    status, setStatus,

    featuresList,
    removeFeaturePoint,
    addFeaturePoint,
    selectedId

}) {

    return (

        <Modal
            isVisible={isVisible}

            onBackButtonPress={toggle}
            onBackdropPress={toggle}
            avoidKeyboard={true}
            propagateSwipe={true}

            style={appStyles.modalbg}
        >
            <Wrapper
                style={appStyles.modalContainer}>
                <ScrollViews.KeyboardAvoiding>
                    <Wrapper alignItemsCenter>
                        <Text isTinyTitle alignTextCenter isWhite> {selectedId ? 'Edit Milestone' : ' Add New Milestone'}</Text>
                    </Wrapper>

                    <Spacer isSmall />

                    <TextInputs.Bordered
                        label={'Title'}
                        placeholder="e.g., Destination & Package Exploration"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <Spacer isBasic />

                    <TextInputs.Bordered
                        label={'Description'}
                        placeholder="Describe this milestone"
                        multiline={true}
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}

                    />

                    <Spacer isSmall />


                    <TextInputs.Bordered
                        label={'Features'}
                        placeholder="Add a feature"
                        value={feature}
                        onChangeText={setFeature}
                    />
                    <Spacer isTiny />
                    {
                        feature.length !== 0 && (
                            <Pressable
                                onPress={addFeaturePoint}
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "flex-end"
                                }}>

                                <Text isGray isRegTextTiny>(Add a feature 👉)</Text>
                                <Spacer isTiny horizontal />
                                <Icon name='plus' type='material-community' color={colors.appColor2} size={16} />
                            </Pressable>
                        )
                    }
                    <Spacer isBasic />
                    {featuresList.length !== 0 && (
                        <Wrapper flexDirectionRow justifyContentSpaceBetween>
                            <Text isSemiTextReg isWhite>Feature List :</Text>
                            <Text isTiny isGray>(Tap a point to edit)</Text>
                        </Wrapper>
                    )}
                    <Wrapper>
                        {featuresList.map((item, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    setFeature(item);
                                    removeFeaturePoint(index);
                                }}
                            >
                                <Wrapper
                                    flexDirectionRow
                                    justifyContentSpaceBetween
                                    alignItemsCenter
                                    style={{
                                        backgroundColor: colors.appBgColor1,
                                        padding: responsiveWidth(2),
                                        borderRadius: 8,
                                        marginBottom: responsiveWidth(1),
                                        borderWidth: 1,
                                        borderColor: colors.placeholderBorderColor
                                    }}
                                >
                                    <Wrapper style={{ flex: 1 }}>
                                        <Text isRegTextSmall isWhite>{item}</Text>
                                    </Wrapper>


                                    <Pressable
                                        style={{ marginLeft: responsiveWidth(2) }}
                                        onPress={() => removeFeaturePoint(index)}>
                                        <Icon name="close" type="material" color={colors.appColor2} size={16} />
                                    </Pressable>
                                </Wrapper>
                            </Pressable>
                        ))}
                    </Wrapper>
                    <Spacer isSmall />
                    <Wrapper flexDirectionRow justifyContentSpaceBetween>
                        <Wrapper style={{ width: '48%' }}>
                            <Pressable onPress={() => { }}>
                                <TextInputs.Bordered
                                    label={'Cost ($)'}
                                    value={cost}
                                    placeholder={'0'}
                                    onChangeText={setCost}
                                    keyboardType={'numeric'}

                                />
                            </Pressable>
                        </Wrapper>
                        <Wrapper style={{ width: '48%' }}>

                            <TextInputs.Bordered
                                label={'Duration (Weeks)'}
                                placeholder="1"
                                keyboardType={'numeric'}
                                value={duration}
                                onChangeText={setDuration}


                            />

                        </Wrapper>
                    </Wrapper>
                    <Spacer isSmall />
                    <Wrapper flexDirectionRow justifyContentSpaceBetween>
                        <Pickers.Primary
                            titleStatic="Start Date*"
                            placeholder="mm/dd/yyyy"
                            value={formattedStart}
                            isPressable
                            isRightIcon
                            onPressCalendar={onStartDatePress}
                        />
                        <Pickers.Primary
                            titleStatic="End Date*"
                            placeholder="mm/dd/yyyy"
                            value={formattedEnd}
                            isPressable
                            isRightIcon
                            onPressCalendar={onEndDatePress}
                        />

                    </Wrapper>
                    <Spacer isSmall />
                    <Pickers.Primary
                        titleStatic="Status"
                        placeholder="Select Status"
                        data={statusData}
                        value={status}
                        onChange={setStatus}
                        mainContainerStyle={{ marginHorizontal: 0 }} // Modal padding ke sath align karne ke liye


                    />

                    <Spacer isMedium />
                    <Wrapper flexDirectionRow justifyContentFlexend>
                        <Buttons.ColoredSmall
                            onPress={toggle}
                            paddingHorizontal={responsiveWidth(2)}
                            isSemiTextMed
                            text="Go Back"
                            textColor={colors.appTextColor9}
                            buttonStyle={{
                                backgroundColor: "transparent",
                                borderWidth: 1,
                                borderColor: colors.appTextColor9
                            }}
                        />
                        <Spacer horizontal isSmall />
                        <Buttons.ColoredSmall
                            isSemiTextMed
                            onPress={onPressUpdate}
                            paddingHorizontal={responsiveWidth(2)}

                            text={selectedId ? "Update Milestone" : "Save Milestone"}
                        />
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

        </Modal>


    )
}

export function PopupModal({

    isVisible,
    toggle,
    image,
    title,
    subtitle,
    button1Text,
    button2Text,
    onButton2Press,
    onButton1Press,
    verticallButtons,
    horizontalButtons


}) {

    return (
        <Modal
            isVisible={isVisible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}


            style={appStyles.modalbg}
        >

            <Wrapper
                paddingVerticalSmall
                style={appStyles.modalContainer}>
                <Wrapper alignItemsCenter>
                    <Images.SqareRound
                        source={image}
                        size={responsiveWidth(40)}

                    />
                </Wrapper>

                <Wrapper marginHorizontalBase marginVerticalSmall>
                    <Text isSemiTextH6 alignTextCenter>{title}</Text>
                    <Text isGray isRegTextSmall alignTextCenter>{subtitle}</Text>
                </Wrapper>

                {
                    verticallButtons && (
                        <Wrapper>
                            <Buttons.Colored
                                text={button1Text}
                                onPress={onButton1Press}


                            />
                            <Spacer isSmall />
                            <Buttons.Colored
                                text={button2Text}
                                onPress={onButton2Press}
                                buttonStyle={{
                                    backgroundColor: colors.black,
                                    borderWidth: responsiveWidth(.2),
                                    borderColor: colors.appColor11,

                                }}
                            />
                        </Wrapper>
                    )
                }
                <Wrapper alignItemsCenter >
                    {
                        horizontalButtons && (
                            <Wrapper flexDirectionRow justifyContentSpaceBetween style={{ width: responsiveWidth(80) }}>
                                <Buttons.ColoredSmall

                                    text={button1Text}
                                    onPress={onButton1Press ? onButton1Press : toggle}
                                    buttonStyle={{
                                        backgroundColor: "transparent",
                                        borderWidth: responsiveWidth(.15),
                                        borderColor: colors.appColor5
                                    }}
                                />
                                <Buttons.ColoredSmall
                                    onPress={onButton2Press}
                                    text={button2Text}
                                />
                            </Wrapper>
                        )
                    }
                </Wrapper>
                <Spacer isBasic />
            </Wrapper>


        </Modal>
    )
}

export function ContactModal({

    isVisible,
    toggle,
    fullName, setFullName,
    email, setEmail,
    company, setCompany,
    phoneNumber, setPhoneNumber,
    notes, setNotes,
    Button1Text, Button2Text,
    onButton1Press, onButton2Press

}) {
    return (
        <Modal
            isVisible={isVisible}
            onBackButtonPress={toggle}
            onBackdropPress={toggle}

            style={appStyles.modalbg}
        >


            <Wrapper
                paddingVerticalSmall
                style={appStyles.modalContainer}>
                <ScrollViews.KeyboardAvoiding>

                    <Wrapper marginHorizontalSmall marginVerticalSmall>
                        <Text isSemiTextH5>Contact Info</Text>
                        <Text isGray isRegTextSmall alignTextCenter>We will vet an agency for your specific project and get in touch within 24 hours</Text>
                        <Spacer isSmall />
                        <TextInputs.Bordered
                            label={'Full Name:'}
                            placeholder="John Doe"
                            value={fullName}
                            onChangeText={setFullName}
                        />
                        <Spacer isSmall />
                        <TextInputs.Bordered
                            label={'Email Address:'}
                            placeholder='John@email.com'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Spacer isSmall />
                        <TextInputs.Bordered
                            label={'Phone Number:'}
                            placeholder="+1 (555) 000-0000"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                        <Spacer isSmall />
                        <TextInputs.Bordered
                            label={'Company'}
                            placeholder="Your Company"
                            value={company}
                            onChangeText={setCompany}
                        />
                        <Spacer isSmall />

                        <TextInputs.Bordered
                            label={'Leave a note for agency'}
                            placeholder="Tell us about your project requirements...'"
                            multiline={true}
                            numberOfLines={4}
                            value={notes}
                            onChangeText={setNotes}
                            maxLength={100}


                        />
                        <Spacer isTiny />
                        <Wrapper alignItemsFlexEnd marginHorizontalSmall>
                            <Text isTiny isGray>{notes ? notes.length : 0}/100</Text>


                        </Wrapper>
                        <Spacer isSmall />
                        <Wrapper alignItemsCenter >

                            <Wrapper flexDirectionRow justifyContentSpaceBetween style={{ width: responsiveWidth(80) }}>
                                <Buttons.ColoredSmall

                                    text={Button1Text}
                                    paddingHorizontal={responsiveWidth(4)}
                                    onPress={onButton1Press ? onButton1Press : toggle}
                                    buttonStyle={{
                                        backgroundColor: "transparent",
                                        borderWidth: responsiveWidth(.15),
                                        borderColor: colors.appColor5,

                                    }}
                                />
                                <Buttons.ColoredSmall
                                    paddingHorizontal={responsiveWidth(2)}
                                    text={Button2Text}
                                    onPress={onButton2Press}
                                />
                            </Wrapper>


                        </Wrapper>
                    </Wrapper>
                </ScrollViews.KeyboardAvoiding>
            </Wrapper>

        </Modal>
    )
}

export function EditProjectDetail({
    isVisible,
    toggle,
    projectName, setProjectName,
    minBudget, setMinBudget,
    maxBudget, setMaxBudget,
    timeline, setTimeline,
    onPressSave



}) {

    const formatNumber = (value) => {
        const safeValue = String(value || "");
        const cleanValue = safeValue.replace(/[^0-9]/g, "");
        if (cleanValue === "") return "";
        const formatted = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `$${formatted}`;
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={toggle}
            onBackButtonPress={toggle}
            style={appStyles.modalbg}
        >
            <Wrapper style={appStyles.modalContainer}>
                <Text isSemiTextMed>Edit Project Details</Text>
                <Spacer isBasic />
                <TextInputs.Underlined
                    inputTitle={"Project Name"}
                    value={projectName}
                    onChangeText={setProjectName}
                />
                <Spacer isSmall />
                <Wrapper flexDirectionRow alignItemsCenter >
                    <Wrapper style={{ flex: 1 }}>
                        <TextInputs.Underlined
                            inputTitle={'Min Budget'}
                            placeholder="Min ($)"
                            value={formatNumber(minBudget)}
                            onChangeText={(txt) => setMinBudget(txt.replace(/[^0-9]/g, ""))}
                            keyboardType="numeric"
                        />
                    </Wrapper>
                    <Text isRegTextSmall style={{ marginTop: responsiveHeight(4) }}>-</Text>
                    <Wrapper style={{ flex: 1 }}>
                        <TextInputs.Underlined
                            inputTitle={'Max Budget'}
                            placeholder="Max ($)"
                            value={formatNumber(maxBudget)}
                            onChangeText={(txt) => setMaxBudget(txt.replace(/[^0-9]/g, ""))}
                            keyboardType="numeric"
                        />
                    </Wrapper>
                </Wrapper>
                <Spacer isSmall />
                <TextInputs.Underlined
                    inputTitle="Timeline"
                    value={timeline}
                    onChangeText={setTimeline}

                />
                <Spacer isBasic />
                <Wrapper flexDirectionRow justifyContentSpaceBetween>
                    <Pressable onPress={toggle}>
                        <Text isGray isRegTextSmall>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={onPressSave}>
                        <Text isRegTextSmall style={{ color: colors.appBgColor2 }}>Save Changes</Text>
                    </Pressable>
                </Wrapper>
            </Wrapper>
        </Modal>
    )
}