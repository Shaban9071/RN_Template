import React, { Component, useState } from 'react';
import { Wrapper, Text, Headers, Stepper, Buttons, Spacer, ScrollViews, Modals } from '../../../components';
import { useHooks } from './hooks'
import { colors, responsiveFontSize, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { Icon } from '@rneui/base';
import { HelperButton } from '../../../components/buttons';
import { EstimateCards } from '../../../components/cards';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
    const {
        costEstimateDetail,
        timeEstimateDetail,
        reviewPoints,
        showReviewModal, setShowReviewModal,
        messages,setMessages,
        inputText,setInputText,
        showCostOptimizeModal,setShowCostOptimizeModal,
        showTimerOptimizeModal,setShowTimerOptimizeModal,
        handleSendMessage
    } = useHooks()

    const navigation = useNavigation()


    

    return (
        <Wrapper isMain >
            {/* Header Stepper */}
            <ScrollViews.KeyboardAvoiding
                stickyHeaderIndices={[1, 10]}
            >
                <Stepper
                    activeStep={1}
                />
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Cost Estimate</Text>
                </Wrapper>
                <Wrapper marginHorizontalMedium>
                    <Text isRegTextSmall isLightGray alignTextCenter >An approximate budget based on feature complexity, development hours, and platform coverage.</Text>
                </Wrapper>

                <Spacer isBasic />
                <Wrapper flexDirectionRow justifyContentFlexend marginHorizontalMedium>
                    <Buttons.FeatureButton
                        title={'Engineer Review'}
                        iconName={'person-outline'}
                        iconType={'material'}
                        onPress={() => setShowReviewModal(true)}
                    />

                </Wrapper>
                <Spacer isSmall />
                <EstimateCards
                    data={costEstimateDetail}
                    costHeader
                    description
                    keyHeader
                />
                <Spacer isBasic />
                <Wrapper alignItemsCenter marginHorizontalLarge>
                    <Text alignTextCenter isSemiTextH5>Still have questions about pricing?</Text>
                    <Spacer isSmall />
                    <HelperButton
                        onPress={() =>setShowCostOptimizeModal(true)}
                        rightIcon
                        spaceAfterText
                        smallText={'Not sure where you fall? Ask a real engineer!'}
                    />
                </Wrapper>
                <Spacer isSmall />
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }} >
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Time Estimate</Text>
                </Wrapper>

                <Wrapper marginHorizontalMedium>
                    <Text isRegTextSmall isLightGray alignTextCenter >Development timelines depends on team size, testing requirements, and project complexity. Explore different scenarios to optimize your timeline.</Text>
                </Wrapper>
                <Spacer isSmall />
                <EstimateCards
                    data={timeEstimateDetail}
                    timerHeader
                    keyTextmarginBottom={1}
                />
                <Spacer isSmall />
                <Wrapper alignItemsCenter>
                    <HelperButton
                        onPress={() => setShowTimerOptimizeModal(true)}
                        rightIcon
                        spaceAfterText
                        smallText={'Ask how to speed this up?'}
                    />
                </Wrapper>
                <Spacer isMediums />
                <Buttons.Colored
                    text="Continue to Milestone"
                    onPress={() => navigation.navigate(routes.milestone)}
                    buttonColor={colors.appBgColor2}
                    tintColor={colors.white}
                    rightCircleIcon={true}

                />


                <Spacer style={{ height: responsiveHeight(10) }} />
            </ScrollViews.KeyboardAvoiding>

            <Modals.ReviewModal
                isVisible={showReviewModal}
                toggle={() => setShowReviewModal(false)}
                cost={'500'}
                onPressBookReview={() => { }}
                pointsData={reviewPoints}
            />
            <Modals.BotModal
                heading={'AI Assistant - Time Optimizaion'}
                data={messages}
                isVisible={showTimerOptimizeModal}
                toggle={() => setShowTimerOptimizeModal(false)}
                onPressSendButton={handleSendMessage}
                value={inputText}
                onChangeText={(text) => setInputText(text)}

            />
            <Modals.BotModal
                heading={'AI Assistant - Cost Optimizaion'}
                data={messages}
                isVisible={showCostOptimizeModal}
                toggle={() => setShowCostOptimizeModal(false)}
                onPressSendButton={handleSendMessage}
                value={inputText}
                onChangeText={(text) => setInputText(text)}

            />
        </Wrapper>
    );
}

