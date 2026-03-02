import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { Wrapper, Text, Stepper, Spacer, ScrollViews, TextInputs, Pickers, Icons, Buttons, Cards, Images, Modals } from '../../../components';
import { appImages, colors, fontSizes, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useHooks } from './hooks'
import Modal from "react-native-modal"



const IMAGES = {
    yellow: appImages.testcard1,
    green: appImages.testcard2,
    purple: appImages.testcard3,
    orange: appImages.testcard4,
};



const TestCard = ({ title, count, color, bgImage, onPress }) => (

    <Pressable onPress={onPress} style={styles.cardContainer}>
        <ImageBackground
            source={bgImage}
            style={styles.imageBg}
            resizeMode="contain"
        >
            <Spacer isSmall />
            <Text isSemiTextH6>{title}</Text>
            <Text isRegTextReg isGray>{count} test cases</Text>
            <Wrapper style={[styles.badge, { borderColor: color }]}>
                <Text isSemiTextH6 style={{ color: color }}>{count}</Text>
            </Wrapper>
        </ImageBackground>
    </Pressable>

);



export default function Index() {


    const {

        pioriities, setpiorities,
        pioritiesData,
        testData
    } = useHooks()



    const navigation = useNavigation()



    return (
        <Wrapper isMain >
            <ScrollViews.KeyboardAvoiding stickyHeaderIndices={[1]}>
                <Stepper activeStep={3} />
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Test Cases</Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalSmall>
                    <Text isRegTextSmall isLightGray alignTextCenter >Comprehensive test cases to ensure your application meets all requirements</Text>
                </Wrapper>
                <Spacer isBasic />

                <Wrapper flexDirectionRow justifyContentCenter style={{ flexWrap: "wrap" }}>
                    <TestCard title="All Tests" count={10} color={colors.yellow} bgImage={IMAGES.yellow} onPress={() => { }} />
                    <TestCard title="Auth" count={3} color={colors.green} bgImage={IMAGES.green} onPress={() => { }} />
                    <TestCard title="Search" count={2} color={colors.cardpurple} bgImage={IMAGES.purple} onPress={() => { }} />
                    <TestCard title="Booking" count={2} color={colors.cardorange} bgImage={IMAGES.orange} onPress={() => { }} />
                </Wrapper>
                <Spacer isBasic />

                <Wrapper flexDirectionRow alignItemsCenter>
                    <Wrapper style={{ width: responsiveWidth(70) }}>

                        <TextInputs.SearchBar
                            placeholder={'Search test cases by ID or name '}
                            inputContainerStyle={{
                                borderWidth: responsiveWidth(.2),
                                borderColor: colors.appColor11,
                                borderRadius: responsiveWidth(10),
                                height: responsiveHeight(4.5)
                            }}
                         
                            iconStyle={{ padding: responsiveWidth(1.5) }}
                        />
                    </Wrapper>
                    <Wrapper style={{ left: responsiveWidth(-4) }}>
                        <Pickers.Secondary
                            value={pioriities}
                            onChange={setpiorities}
                            data={pioritiesData}
                            placeholder="All Priorities"

                        />
                    </Wrapper>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper marginHorizontalBase>
                    <Text isRegTextSmall isGray>Showing 3 of 10 cases</Text>
                </Wrapper>
                <Spacer isSmall />
                <Cards.TestCasesCard
                    data={testData}
                />
                <Spacer isBasic />
                <Buttons.Colored
                    text="Continue to Summary"
                    onPress={() => navigation.navigate(routes.summary)}
                    buttonColor={colors.appBgColor2}
                    tintColor={colors.white}
                    rightCircleIcon={true}

                />

                <Spacer style={{ height: responsiveHeight(10) }} />
            </ScrollViews.KeyboardAvoiding>
            <Modals.PopupModal
                image={appImages.contactImage}
                isVisible={false}
                button1Text={'Visit Code Baiz'}
                button2Text={'Maybe Later'}
                subtitle={'Web, app, and custom software development done properly, not duct-taped together by amateurs.'}
                title={'Turn Your Idea Into a Real Product'}
                onButton1Press={() => { }}
                onButton2Press={() => { }}
                verticallButtons


            />
            <Modals.PopupModal
                image={appImages.signinprojectImage}
                isVisible={false}
                button1Text={'Cancle'}
                button2Text={'Sign In'}
                subtitle={'If you don’t sign up, you’ll lose all the information'}
                title={'Sign In to save this project'}
                onButton1Press={() => { }}
                onButton2Press={() => { }}
                horizontalButtons


            />
        </Wrapper>
    );
}


const styles = StyleSheet.create({

    cardContainer: {
        width: responsiveWidth(40),
        height: responsiveWidth(26),
        marginHorizontal: responsiveWidth(4)

    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(4),
    },

    badge: {
        position: 'absolute',
        top: responsiveHeight(1.1),
        right: responsiveWidth(.4),
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },



});