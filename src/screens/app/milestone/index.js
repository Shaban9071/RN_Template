import React, { Component, useState } from 'react';
import { Wrapper, Text, Headers, Stepper, Spacer, Buttons, Images, ScrollViews, Modals, TextInputs, Pickers } from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, responsiveFontSize, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import { MilestoneCard } from '../../../components/cards';
import { HelperButton } from '../../../components/buttons';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'


import Modal from "react-native-modal"

export default function Index() {
    const {
        featuresList, setFeaturesList,
        removeFeaturePoint, addFeaturePoint,
        title, setTitle,
        description, setDescription,
        feature, setFeature,
        cost, setCost,
        duration, setDuration,
        startDate, setStartDate,
        endDate, setEndDate,
        status, setStatus,
        statusData,
        formatDate, today,
        formattedEnd, setFormattedEnd,
        formattedStart, setFormattedStart,
        list, setList,
        messages, setMessages,
        openStart, setOpenStart,
        openEnd, setOpenEnd,
        inputText, setInputText,
        showAddMilestoneModal, setShowMilestoneModal,
        showAiModal, setShowAiModal,
        handleDelete, handleSendMessage, handleUpdateMilestone,

        handleEdit, resetForm,
        selectedId,




    } = useHooks()

    const navigation = useNavigation()




    return (
        <Wrapper isMain >
            <ScrollViews.KeyboardAvoiding
                stickyHeaderIndices={[1, 10]}
            >
                <Stepper
                    activeStep={2}
                />
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Milestones</Text>
                </Wrapper>
                <Wrapper marginHorizontalMedium>
                    <Text isRegTextSmall isLightGray alignTextCenter >Explore eah milestone in detail. lick through to see deliverables, timelines, and what makes each phase special</Text>
                </Wrapper>
                <Spacer isBasic />

                <Wrapper flexDirectionRow justifyContentFlexend marginHorizontalMedium>

                    <Buttons.FeatureButton
                        onPress={() => {
                            resetForm(); // Pehle form clear karein
                            setShowMilestoneModal(true);
                        }}
                        title={'Add Milestone'}
                        iconName={'add'}
                        iconType={'material'}
                    />
                </Wrapper>


                <Spacer isBasic />
                <Wrapper alignItemsCenter>
                    <MilestoneCard
                        data={list}
                        onPressEdit={(item) => handleEdit(item)}
                        onPressTrash={(item) => handleDelete(item.id)}
                    />


                </Wrapper>
                <Spacer isSmall />
                <Wrapper alignItemsCenter>
                    <HelperButton
                        onPress={() => setShowAiModal(true)}
                        rightIcon
                        spaceAfterText
                        smallText={'Not sure where you fall? Ask a real engineer!'}
                    />


                </Wrapper>
                <Spacer isBasic />

                <Buttons.Colored
                    text="Continue to Test Cases"
                    onPress={() => navigation.navigate(routes.testcases)}
                    buttonColor={colors.appBgColor2}
                    tintColor={colors.white}
                    rightCircleIcon={true}

                />
                <Spacer style={{ height: responsiveHeight(10) }} />

            </ScrollViews.KeyboardAvoiding>

            <Modals.BotModal
                heading={'AI Assistant - Time Optimizaion'}
                data={messages}
                isVisible={showAiModal}
                toggle={() => setShowAiModal(false)}
                onPressSendButton={handleSendMessage}
                value={inputText}
                onChangeText={(text) => setInputText(text)}

            />

            <Modals.AddNewMilestoneModal
                isVisible={showAddMilestoneModal}
                toggle={() => setShowMilestoneModal(false)}
                selectedId={selectedId}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                feature={feature}
                setFeature={setFeature}
                cost={cost}
                setCost={setCost}
                duration={duration}
                setDuration={setDuration}
                status={status}
                setStatus={setStatus}
                statusData={statusData}

                formattedStart={formattedStart}
                onStartDatePress={() => setOpenStart(true)}
                formattedEnd={formattedEnd}
                onEndDatePress={() => setOpenEnd(true)}

                onPressUpdate={handleUpdateMilestone}
                removeFeaturePoint={removeFeaturePoint}
                addFeaturePoint={addFeaturePoint}
                featuresList={featuresList}
            />


            <DatePicker
                modal
                mode="date"
                androidVariant="wheel"
                open={openStart}
                date={startDate}
                minimumDate={today}
                textColor={colors.black}
                onConfirm={(date) => {
                    setOpenStart(false);
                    setStartDate(date);
                    setFormattedStart(formatDate(date));
                    if (date > endDate) {
                        setEndDate(date);
                        setFormattedEnd('');
                    }
                }}
                onCancel={() => setOpenStart(false)}
            />


            <DatePicker
                modal
                mode="date"
                androidVariant="wheel"
                open={openEnd}
                date={endDate}
                minimumDate={startDate}
                textColor={colors.black}
                onConfirm={(date) => {
                    setOpenEnd(false);
                    setEndDate(date);
                    setFormattedEnd(formatDate(date));
                }}
                onCancel={() => setOpenEnd(false)}
            />
        </Wrapper >
    );
}

