import React, { useState } from "react";
import { View } from "react-native"
import { ScrollViews, Wrapper, Text, Spacer, Buttons, TextInputs, Pickers } from "../../../components";
import { appStyles, colors, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../../services";
import { Icon } from "@rneui/base";




export default function index() {


    const clientRequestData = [
        {
            id: 1, title: 'UI/UX Design', subtitle: 'Need a complete redesign of our e-commerce platform with focus on', date: '2024-01-15'
        },
        {
            id: 2, title: 'Web App Development', subtitle: 'Building a SaaS product for team collaboration. Looking for React', date: '2024-01-14'
        },
        {
            id: 3, title: 'Branding', subtitle: 'Complete brand identity package including logo, color palette, typography, and brand..', date: '2024-01-15'
        },
        {
            id: 4, title: 'Mobile App', subtitle: 'iOS and Android app for fitness tracking with social features and integration with...', date: '2024-01-10'
        }
    ]
    
         const [request, setRequest] = useState('')
      
    
        const requestList = [
            { label: 'Old', value: 'old' },
            { label: 'Latest', value: 'latest' },
             
        ];
    
      

    return (

        <Wrapper isMain>
            <ScrollViews.KeyboardAvoiding stickyHeaderIndices={[0]}>
                <Wrapper style={{ backgroundColor: colors.black, paddingBottom: 10 }}>
                    <Wrapper marginHorizontalBase alignItemsCenter style={{ paddingTop: responsiveHeight(2.5) }}>
                        <Text isBoldTextH5>Client Requests</Text>
                    </Wrapper>
                    <Spacer isTiny />
                    <Wrapper marginHorizontalBase>
                        <Text isRegTextSmall isLightGray alignTextCenter>
                            View and manage all client project requests.
                        </Text>
                    </Wrapper>

                    <Spacer isBasic />

                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Wrapper style={{ width: responsiveWidth(70) }}>
                            <TextInputs.SearchBar
                                placeholder={'Search requests'}
                                inputContainerStyle={{
                                    backgroundColor: "#0F0F0F",
                                    borderRadius: responsiveWidth(10),
                                    height: responsiveHeight(6),
                                    borderWidth: 1,
                                    borderColor: colors.appBgColor2
                                }}
                                iconStyle={{ color: colors.appColor2 }}
                                placeholderTextColor={colors.appTextColor9}

                            />

                        </Wrapper>
                        <Wrapper style={{ left: responsiveWidth(-4) }}>
                            <Pickers.Secondary
                                value={request}
                                onChange={setRequest}
                                data={requestList}
                                placeholder="All Requests"
                                borderWidth={1}
                                borderColor={'#898989'}
                                placeholdeTextColor={colors.appColor2}
                                iconColor={colors.appColor2}

                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>


                <Wrapper alignItemsCenter marginVerticalSmall>
                    {
                        clientRequestData && clientRequestData.map((item, index) => {
                            return (
                                <Wrapper
                                    key={item.id}
                                    marginVerticalSmall
                                    style={appStyles.cardContainer}

                                >

                                    <Wrapper>
                                        <Text isSemiTextH6>{item.title}</Text>
                                        <Spacer isSmall />
                                        <Text isRegTextSmall>{item.subtitle}</Text>
                                        <Spacer isSmall />
                                        <Wrapper flexDirectionRow alignItemsCenter>
                                            <Icon name="calendar-blank-outline" type="material-community" size={responsiveFontSize(16)} color={'#6E6E6E'} />
                                            <Spacer horizontal isTiny />
                                            <Text isRegTextTiny isGray style={{ marginTop: 4 }}>{item.date}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                    <Spacer isBasic />
                                    <Buttons.Colored
                                        text="View detail"
                                        buttonColor={colors.appBgColor2}
                                        buttonStyle={{
                                            backgroundColor: colors.black,
                                            borderWidth: responsiveWidth(.15),
                                            borderColor: colors.appTextColor9
                                        }}
                                    />

                                </Wrapper>
                            )
                        })
                    }
                </Wrapper>
                <Spacer isDoubleBase />
            </ScrollViews.KeyboardAvoiding>




        </Wrapper>



    )
}