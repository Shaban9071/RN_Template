import React, { Component, useState } from 'react';
import { Wrapper, Text, Headers, Stepper, Spacer, Images, Buttons, ScrollViews, Cards, Modals, TextInputs } from '../../../components';
import { useHooks } from './hooks'
import { appImages, appStyles, colors, responsiveFontSize, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { Icon } from '@rneui/base';
import { Pressable, StyleSheet, View } from 'react-native';
import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native';
import { HelperButton } from '../../../components/buttons';
import { ReviewModal } from '../../../components/modals';

export default function Index() {

    const {
        featuresData, reviewPoints,
        list, setList,
        messages, setMessages,
        inputText, setInputText,
        title, setTitle,
        description, setDescription,
        selectedIcon, setSelectedIcon,
        iconsList,
        showAiModal, setShowAiModal,
        showFeatureModal, setShowFeatureModal,
        openReviewModal, setOpenReviewModal,
        handleAddFeature, handleDelete,
        handleEditPress,
        handleSave, handleSendMessage,

        selectedId, setSelectedId,

        handleAddDescriptionPoint, handleRemoveDescriptionPoint,
        descriptionPoints, setDescriptionPoints,

        resetForm






    } = useHooks()
    const navigation = useNavigation()


    return (
        <Wrapper isMain >
            <ScrollViews.KeyboardAvoiding stickyHeaderIndices={[1]}>
                <Stepper activeStep={0} />
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Features</Text>
                </Wrapper>
                <Wrapper marginHorizontalMedium>
                    <Text isRegTextSmall isLightGray alignTextCenter >A seamless travel experience powered by intuitive features for users and full control for admins.</Text>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper alignItemsCenter>
                    <HelperButton
                        leftImage
                        spaceBeforeImage
                        tinyText={'How can I help you? '}
                        onPress={() => setShowAiModal(true)}
                    />
                </Wrapper>
                <Spacer isBasic />
                <Wrapper flexDirectionRow justifyContentFlexend marginHorizontalMedium>
                    <Buttons.FeatureButton
                        onPress={() => setOpenReviewModal(true)}
                        title={'Engineer Review'}
                        iconName={'person-outline'}
                        iconType={'material'}
                    />
                    <Buttons.FeatureButton
                        onPress={() => {
                            setSelectedId(null);
                            setTitle('');
                            setDescriptionPoints([]);
                            setShowFeatureModal(true);
                        }}
                        title={'Add Feature'}
                        iconName={'add'}
                        iconType={'material'}
                    />
                </Wrapper>
                <Spacer isSmall />
                <Cards.FeatureCards
                    data={list}
                    onPressEdit={(item) => handleEditPress(item)}
                    onPressTrash={(item) => handleDelete(item.id)}
                    edit trash rightIcons
                    borderColor={colors.appColor9}

                />
                <Spacer isSmall />
                <Buttons.Colored
                    text="Continue to Estimate"
                    onPress={() => navigation.navigate(routes.estimate)}
                    buttonColor={colors.appBgColor2}
                    tintColor={colors.white}
                    rightCircleIcon={true}
                />
                <Spacer style={{ height: responsiveHeight(10) }} />
            </ScrollViews.KeyboardAvoiding>

            <Modals.ReviewModal
                isVisible={openReviewModal}
                toggle={() => setOpenReviewModal(false)}
                cost={'500'}
                onPressBookReview={() => { }}
                pointsData={reviewPoints}
            />

            <Modals.AddNewFeatureModal
                isVisible={showFeatureModal}
                toggle={resetForm}
                iconData={iconsList}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
                title={title}
                setTitle={(text) => setTitle(text)}
                description={description}
                setDescription={(text) => setDescription(text)}
                onPressBookReview={handleSave}
                selectedId={selectedId}
                descriptionList={descriptionPoints}
                handleAddPoint={handleAddDescriptionPoint}
                handleRemovepoint={handleRemoveDescriptionPoint}

            />
            <Modals.BotModal
                heading={'Code Baiz'}
                data={messages}
                isVisible={showAiModal}
                toggle={() => setShowAiModal(false)}
                onPressSendButton={handleSendMessage}
                value={inputText}
                onChangeText={(text) => setInputText(text)}

            />
        </Wrapper>
    );
}

