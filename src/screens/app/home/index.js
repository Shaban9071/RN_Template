import React from "react";
import { Buttons, ScrollViews, Spacer, Text, Wrapper } from "../../../components";
import { colors, responsiveHeight, responsiveWidth, responsiveFontSize, appStyles } from "../../../services";
import { Icon } from "@rneui/base";
import {useHooks} from "./hooks"

export default function Index() {
 
    const {projects}=useHooks()

    return (
        <Wrapper isMain style={{ backgroundColor: colors.black }}>
            <ScrollViews.KeyboardAvoiding
                stickyHeaderIndices={[0]}
            >

                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Home Dashboard</Text>
                </Wrapper>
                <Spacer isTiny />
                <Wrapper marginHorizontalBase>
                    <Text isRegTextSmall isLightGray alignTextCenter>
                        Access your projects and view their summaries quickly.
                    </Text>
                </Wrapper>

                <Spacer isBase />

                {/* Map Logic for Projects */}
                <Wrapper alignItemsCenter>
                    {projects.map((item, index) => {
                        const statusColor =
                            item.status === 'Completed' ?
                                colors.parrot : item.status === 'In Progress' ?
                                    colors.sky : item.status === 'Pending' ?
                                        colors.yellow: colors.yellow

                        return (
                            <Wrapper key={item.id} marginVerticalSmall paddingVerticalBase style={[appStyles.cardContainer,{padding:0}]}>

                               <Wrapper marginHorizontalBase>
                               
                                <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter>
                                    <Wrapper
                                        style={{
                                            borderWidth: 1,
                                            borderColor: statusColor,
                                            borderRadius: responsiveWidth(2),
                                            padding: responsiveWidth(2)
                                        }}
                                    >
                                        <Icon name='folder-open-outline' type='material-community' size={responsiveFontSize(24)} color={statusColor} />
                                    </Wrapper>
                                    <Wrapper

                                        style={{ borderWidth: 1, borderColor: statusColor, paddingHorizontal: 6, borderRadius: responsiveWidth(6), marginRight: 5 }}>
                                        <Text isRegTextTiny style={{ color: statusColor }}>{item.status}</Text>
                                    </Wrapper>
                                </Wrapper>

                                <Spacer isSmall />

                               
                                <Text isBoldTextH6 >{item.title}</Text>
                                <Text isRegTextSmall  >
                                    Project ID : {item.projectId}
                                </Text>

                                <Spacer isTiny />

                                <Text isRegTextSmall isLightGray numberOfLines={2}>
                                    {item.description}
                                </Text>

                                </Wrapper>
                                <Spacer isBasic />

                                <Buttons.Colored
                                    text="View Summary"
                                    onPress={() => {}}
                                    buttonColor={colors.appBgColor2}
                                    rightCircleIcon={true}
                                />
                            </Wrapper>
                        )
                    })}
                </Wrapper>
                <Spacer isDoubleBase/>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}
 