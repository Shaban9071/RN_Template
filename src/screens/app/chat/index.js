import React from "react";
import { StyleSheet, TextInput, Image, TouchableOpacity, View, Pressable } from "react-native";
import { Images, ScrollViews, Spacer, Text, TextInputs, Wrapper } from "../../../components";
import { colors, responsiveHeight, responsiveWidth, responsiveFontSize, appImages, routes } from "../../../services";
import { Icon } from "@rneui/base";
import { useHooks } from "./hooks"
import { useNavigation } from "@react-navigation/native";

export default function Index() {

    const {
        getTagColor,
        chatData
    } = useHooks()

    const navigation = useNavigation()

    return (
        <Wrapper isMain>
            <ScrollViews.KeyboardAvoiding stickyHeaderIndices={[0]}>

                <Wrapper style={{ backgroundColor: colors.black, paddingBottom: 10 }}>
                    <Wrapper marginHorizontalBase alignItemsCenter style={{ paddingTop: responsiveHeight(2.5) }}>
                        <Text isBoldTextH5>Chat</Text>
                    </Wrapper>
                    <Spacer isTiny />
                    <Wrapper marginHorizontalBase>
                        <Text isRegTextSmall isLightGray alignTextCenter>
                            Chat directly with the designers you’re interested in hiring.
                        </Text>
                    </Wrapper>
                    <Spacer isBasic />
                    <Wrapper flexDirectionRow alignItemsCenter justifyContentCenter >
                        <Wrapper style={{ marginLeft: responsiveWidth(3) }}>
                            <Icon name="menu" type="material-community" size={responsiveFontSize(30)} color={colors.appColor9} />
                        </Wrapper>
                        <Wrapper style={{ width: responsiveWidth(85) }}>

                            <TextInputs.SearchBar
                                placeholder={'Search'}
                                inputContainerStyle={{
                                    backgroundColor: "#0F0F0F",
                                    borderRadius: responsiveWidth(10),
                                    height: responsiveHeight(6)
                                }}
                                iconStyle={{ color: colors.appTextColor10 }}
                                placeholderTextColor={colors.appTextColor10}

                            />
                        </Wrapper>

                    </Wrapper>

                    <Spacer isBase />


                </Wrapper>


                <Wrapper marginHorizontalBase >
                    {chatData.map((item) => {

                        const tagColor = getTagColor(item.tag);
                        return (
                            <Pressable key={item.id}

                                onPress={() => navigation.navigate(routes.messages, {item })}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: responsiveHeight(2),
                                }} >
                                <Images.SqareRound
                                    source={item.image}
                                    size={responsiveWidth(10)}
                                />
                                <Wrapper flex={1} marginHorizontalSmall>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Text isSemiTextSmall>{item.name}</Text>
                                        <Wrapper
                                            marginHorizontalSmall
                                            style={{ borderWidth: 1, borderColor: tagColor, paddingHorizontal: 6, borderRadius: responsiveWidth(6), marginRight: 5 }}>
                                            <Text isRegTextTiny style={{ color: tagColor }}>{item.tag}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                    <Spacer isTiny />
                                    <Text isRegTextTiny style={{ numberOfLines: 1, color: colors.appTextColor10 }}>
                                        {item.message}
                                    </Text>
                                </Wrapper>

                                <Text style={{ color: colors.appTextColor10 }} isRegTextTiny>{item.time}</Text>
                            </Pressable>
                        )
                    })}
                </Wrapper>

                <Spacer isDoubleBase />
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}
