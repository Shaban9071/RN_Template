import React, { useState } from 'react';
import { Wrapper, Text, Images, Spacer, TextInputs, ScrollViews } from '../../../components';
import { colors, responsiveWidth, appImages, responsiveHeight } from '../../../services';
import { useHooks } from "./hooks"
import { FlatList, View } from 'react-native';

export default function index({ route }) {
    const { item } = route.params;
    const { getTagColor } = useHooks();
    const tagColor = getTagColor(item?.tag);

    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: "Sure! I usually start with user research and wireframes.", type: 'receiver' },
        { id: '2', text: "Would you like me to send over the prototype link?", type: 'receiver' },

    ]);

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            const newMessage = {
                id: Date.now().toString(),
                text: inputText,
                type: 'sender',
            };
            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };
    const IMAGE_SIZE = responsiveWidth(8);

    const renderChatBubble = ({ item: msg, index }) => {

        const isSender = msg.type === 'sender';

        const previousMessage = messages[index - 1];

        const showSenderImage =
            isSender &&
            (!previousMessage || previousMessage.type !== 'sender');

        const showReceiverImage =
            !isSender &&
            (!previousMessage || previousMessage.type !== 'receiver');

        return (
            <Wrapper
                flexDirectionRow
                style={{
                    alignSelf: isSender ? 'flex-end' : 'flex-start',
                    marginBottom: 10,
                    maxWidth: '85%',
                    alignItems: 'flex-end'
                }}
            >

                {/* Receiver Side */}
                {!isSender && (
                    showReceiverImage ? (
                        <Images.SqareRound
                            source={item.image}
                            size={IMAGE_SIZE}
                        />
                    ) : (
                        <View style={{ width: responsiveWidth(8)}} />
                    )
                )}

                <Wrapper
        marginHorizontalTiny
                    style={{
                        backgroundColor: isSender ? colors.appColor3 : colors.black,
                        padding: responsiveWidth(2),
                        borderRadius: 12,
                        borderWidth: isSender ? 0 : .5,
                        borderColor: colors.appColor11
                    }}
                >
                    <Text isRegTextSmall>{msg.text}</Text>
                </Wrapper>

                {/* Sender Side */}
                {isSender && (
                    showSenderImage ? (
                        <Images.SqareRound
                            source={appImages.user1}
                            size={IMAGE_SIZE}
                        />
                    ) : (
                        <View style={{ width:responsiveWidth(8)}} />
                    )
                )}

            </Wrapper>
        );
    };
    return (
        <Wrapper isMain style={{ backgroundColor: colors.black }}>


            <Wrapper
                flexDirectionRow
                alignItemsCenter
                marginHorizontalSmall
                style={{ paddingVertical: 15 }}
            >
                <Spacer horizontal isSmall />
                <Images.SqareRound source={item.image} size={responsiveWidth(10)} />
                <Wrapper marginHorizontalSmall>
                    <Wrapper flexDirectionRow>
                        <Text isSemiTextReg>{item.name ? item.name : 'user'}</Text>
                        <Wrapper
                            marginHorizontalSmall
                            justifyContentCenter
                            style={{ borderWidth: 1, borderColor: tagColor, paddingHorizontal: 6, borderRadius: responsiveWidth(6) }}>
                            <Text isRegTextTiny style={{ color: tagColor }}>{item.tag}</Text>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Wrapper style={{ width: responsiveWidth(2), height: responsiveWidth(2), borderRadius: responsiveWidth(1), backgroundColor: colors.parrot }} />
                        <Spacer isTiny horizontal />
                        <Text isRegTextTiny style={{ color: colors.appTextColor10 }}>Online</Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>


            <ScrollViews.WithKeyboardAvoidingView
                containerStyle={{ backgroundColor: colors.black }}
                footer={
                    <Wrapper marginVerticalSmall alignItemsCenter>
                        <TextInputs.Colored
                            placeholder={'Ask me something...'}
                            shareButton
                            sentIcon
                            rightIcons
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}
                            onPressSendButton={handleSend}
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: colors.appColor11,
                                borderRadius: responsiveWidth(2),
                                width: responsiveWidth(90),

                            }}
                            onPressShareButton={() => { }}
                        />
                    </Wrapper>
                }
            >
                <FlatList
                    data={messages}
                    keyExtractor={msg => msg.id}
                    renderItem={renderChatBubble}
                    contentContainerStyle={{ paddingLeft: responsiveWidth(4), paddingRight: responsiveWidth(3) }}
                    scrollEnabled={false}
                />
            </ScrollViews.WithKeyboardAvoidingView>
        </Wrapper>
    );
}