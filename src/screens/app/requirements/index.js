import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, TextInput, View } from 'react-native';
// 1. Bottom Sheet Imports
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wrapper, Text, Spacer, Images, TextInputs, ScrollViews, ProjectSummary, Modals, Buttons } from '../../../components';
import { useHooks } from './hooks';
import { appImages, appStyles, colors, responsiveFontSize, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { Icon } from '@rneui/base';
import { SummaryCard } from '../../../components/cards';
import Modal from "react-native-modal"

export default function Index() {
    const {
        builderOption,
        selectedBuilder, setSelectedBuilder,
        stageOption,
        selectedStageOption, setSelectedStageOption,
        isMainInputFocused, setIsMainInputFocused,

        //Modal state
        isEditModalVisible, setIsEditModalVisible,

        //edit detail state
        projectName, setProjectName,
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        timeline, setTimeline,

        // Inka final state (jo SummaryCard mein dikhega)
        finalProjectName, setFinalProjectName,
        finalBudget, setFinalBudget,
        finalTimeline, setFinalTimeline,

        handleSaveProjectDetails,

        navigation

    } = useHooks();








    const flatListRef = useRef(null);


    useEffect(() => {

        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }, [messages]);


    const TOTAL_STEPS = 5;

    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Your project details will appear here. These help us identify the essential roles your project needs to succeed.",
            sender: "bot",
            step: 1,
            reaction: null,
        },
    ]);

    const handleReaction = (messageId, type) => {
        setMessages(prev =>
            prev.map(msg => {
                if (msg.id === messageId) {
                    return {
                        ...msg,
                        reaction: msg.reaction === type ? null : type,

                    };
                }
                return msg;
            })
        );
    };

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
        const show = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);


        });

        const hide = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);


        });

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    const chatIcons = [
        { id: 1, image: appImages.copyImage, value: 'copy' },
        { id: 2, image: appImages.thumbsupImage, value: 'thumbsup' },
        { id: 3, image: appImages.thumbsdownImage, value: 'thumbsdown' },
        { id: 4, image: appImages.volumeImage, value: 'volume' },
        { id: 5, image: appImages.retryImage, value: 'retry' },
    ]

    const addBotMessage = (text) => {
        const botCount = messages.filter(m => m.sender === "bot").length;

        const newMessage = {
            id: Date.now(),
            text,
            sender: "bot",
            step: botCount + 1,
        };

        setMessages(prev => [...prev, newMessage]);
    };

    const getNextBotMessage = (currentStep) => {

        switch (currentStep) {
            case 1:
                return "What is the main purpose of the website?";
            case 2:
                return "Who is your target audience?";
            case 3:
                return "Do you need user authentication?";
            case 4:
                return "What timeline are you aiming for?";

            default:
                return "Thanks for the details!";
        }
    };


    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim().length === 0) return;

        const userMessage = {
            id: Date.now(),
            text: input,
            sender: "user",
        };

        setMessages(prev => {
            const updatedMessages = [...prev, userMessage];

            // count existing bot messages
            const botCount = updatedMessages.filter(m => m.sender === "bot").length;

            setTimeout(() => {

                const botCountNow = updatedMessages.filter(m => m.sender === "bot").length;


                if (botCountNow >= TOTAL_STEPS) return;

                const botMessage = {
                    id: Date.now() + 1,
                    text: getNextBotMessage(botCountNow),
                    sender: "bot",
                    step: botCountNow + 1,
                    reaction: null,
                };

                setMessages(prev2 => [...prev2, botMessage]);

            }, 800);


            return updatedMessages;
        });

        setInput("");
    };

    const shouldHideSummary = isKeyboardVisible && isMainInputFocused;



    return (
        <Wrapper isMain >
            <Spacer isBasic />
            <Wrapper alignItemsCenter>
                <Text isBoldTextH5>Requirements</Text>
            </Wrapper>


            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 30}
            >
                <Wrapper
                    marginHorizontalBase
                    style={{
                        borderWidth: responsiveWidth(.2),
                        borderColor: colors.appColor9,
                        borderRadius: responsiveWidth(4),
                        backgroundColor: colors.black,
                        flex: 1,
                        marginTop: responsiveHeight(2),
                        maxHeight: responsiveHeight(64),
                        overflow: 'hidden'
                    }}
                >


                    <FlatList
                        data={messages}
                        ref={flatListRef}
                        keyExtractor={(item) => item.id.toString()}
                        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
                        contentContainerStyle={{

                            marginHorizontal: responsiveWidth(2),
                            paddingTop: responsiveHeight(2),


                        }}
                        keyboardShouldPersistTaps="handled"
                        removeClippedSubviews={false}
                        renderItem={({ item, index }) => {

                            const isUser = item.sender === "user";

                            const isLastItem = index === messages.length - 1;

                            return (
                                <Wrapper
                                    style={{
                                        alignSelf: isUser ? "flex-end" : "flex-start",
                                        maxWidth: "80%",
                                        marginBottom: responsiveHeight(.8)
                                    }}
                                >
                                    <Wrapper flexDirectionRow >
                                        {
                                            !isUser && (
                                                <Wrapper
                                                    alignItemsCenter
                                                    justifyContentCenter
                                                    style={{
                                                        height: responsiveWidth(8),
                                                        width: responsiveWidth(8),
                                                        backgroundColor: colors.appBgColor9,
                                                        borderRadius: responsiveWidth(4),
                                                        marginRight: responsiveWidth(2),
                                                    }}
                                                >
                                                    <Images.SqareRound
                                                        source={appImages.aiImage}
                                                        size={responsiveWidth(7)}
                                                    />
                                                </Wrapper>
                                            )
                                        }
                                        <Wrapper>
                                            {!isUser && (
                                                <Wrapper flexDirectionRow alignItemsCenter marginBottomTiny>

                                                    {/* Step Counter */}
                                                    <Wrapper
                                                        alignItemsCenter
                                                        justifyContentCenter
                                                        style={{
                                                            paddingHorizontal: responsiveWidth(2),
                                                            height: responsiveHeight(2.5),
                                                            borderRadius: responsiveWidth(3),
                                                            borderWidth: 1,
                                                            borderColor: colors.appColor9
                                                        }}
                                                    >
                                                        <Text isTiny isWhite style={{ fontSize: responsiveFontSize(8) }}>
                                                            {item.step ? item.step : '0'}/{TOTAL_STEPS}
                                                        </Text>
                                                    </Wrapper>
                                                </Wrapper>
                                            )}


                                            <Wrapper
                                                style={{
                                                    backgroundColor: isUser ? colors.appBgColor2 : "transparent",
                                                    paddingVertical: responsiveWidth(2),
                                                    paddingHorizontal: isUser ? responsiveWidth(2) : 0,
                                                    borderRadius: responsiveWidth(2),
                                                    borderTopRightRadius: 0,

                                                }}
                                            >
                                                <Text isRegTextSmall>
                                                    {item.text}
                                                </Text>

                                            </Wrapper>


                                            {!isUser && (
                                                <Wrapper flexDirectionRow>
                                                    {
                                                        chatIcons.map((iconItem, index) => {

                                                            const isLiked = item.reaction === 'thumbsup';
                                                            const isDisliked = item.reaction === 'thumbsdown';

                                                            let iconSource = iconItem.image;


                                                            if (iconItem.value === 'thumbsup' && isLiked) {
                                                                iconSource = appImages.filledthumbsupImage;
                                                            }

                                                            if (iconItem.value === 'thumbsdown' && isDisliked) {
                                                                iconSource = appImages.filledthumbsDownImage;
                                                            }

                                                            return (
                                                                <Pressable
                                                                    onPress={() => {
                                                                        if (iconItem.value === 'thumbsup' || iconItem.value === 'thumbsdown') {
                                                                            handleReaction(item.id, iconItem.value);
                                                                        }
                                                                    }}
                                                                    key={iconItem.id}
                                                                    style={{ paddingRight: responsiveWidth(2) }}

                                                                >
                                                                    <Images.SqareRound
                                                                        source={iconSource}
                                                                        size={responsiveFontSize(20)}
                                                                    />

                                                                </Pressable>
                                                            )
                                                        })
                                                    }

                                                </Wrapper>
                                            )}
                                        </Wrapper>
                                    </Wrapper>
                                    {isLastItem && <Spacer isMedium />}
                                </Wrapper>
                            );
                        }}

                    />
                    <Spacer isTiny />
                    <TextInputs.Colored
                        placeholder={'Ask me something...'}
                        shareButton
                        sentIcon
                        rightIcons
                        onPressSendButton={handleSend}
                        onFocus={() => setIsMainInputFocused(true)}
                        onBlur={() => setIsMainInputFocused(false)}
                        containerStyle={{
                            borderWidth: responsiveWidth(.3),
                            borderColor: colors.appColor11,
                            borderRadius: responsiveWidth(10)
                        }}
                        onPressShareButton={() => { }}
                        value={input}
                        onChangeText={(text) => setInput(text)}

                    />
                    <Spacer isSmall />
                </Wrapper>
                <Spacer style={{height:responsiveHeight(1.8)}} />
                <Buttons.Colored
                    text="Continue to Scope"
                    onPress={() => navigation.navigate(routes.scopestack)}
                    buttonColor={colors.appBgColor2}
                    tintColor={colors.white}
                    rightCircleIcon={true}

                />

            </KeyboardAvoidingView>


            {
                !shouldHideSummary &&
                <ProjectSummary
                    onInputFocus={() => setIsMainInputFocused(false)}
                    projectName={finalProjectName}
                    budget={finalBudget}
                    timeline={finalTimeline}
                    onEditPress={() => setIsEditModalVisible(true)}
                    stageOption={stageOption}
                    builderOption={builderOption}
                    selectedBuilder={selectedBuilder}
                    setSelectedBuilder={setSelectedBuilder}
                    selectedStageOption={selectedStageOption}
                    setSelectedStageOption={setSelectedStageOption}

                />
            }

            <Modals.EditProjectDetail
                isVisible={isEditModalVisible}
                toggle={() => setIsEditModalVisible(false)}
                timeline={timeline}
                setTimeline={setTimeline}
                projectName={projectName}
                setProjectName={setProjectName}
                minBudget={minBudget}
                setMinBudget={setMinBudget}
                maxBudget={maxBudget}
                setMaxBudget={setMaxBudget}
                onPressSave={handleSaveProjectDetails}

            />
        </Wrapper>
    );
}
