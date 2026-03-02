import React, { useState } from 'react';
import { Wrapper, Text, Spacer, ScrollViews, Modals, Images, Buttons } from '../../../components';
import { useHooks } from './hooks';
import { appFonts, appImages, appStyles, colors, fontSizes, responsiveFontSize, responsiveHeight, responsiveWidth, routes } from '../../../services';
import { BarChart, PieChart } from "react-native-gifted-charts";
import { Icon } from '@rneui/base';
import { ImageBackground, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const IMAGES = {
    yellow: appImages.summarycard1,
    green: appImages.summarycard2,
    purple: appImages.summarycard3,
    orange: appImages.summarycard4,
};

const SummaryCard = ({ title, count, color, iconName, iconType, onPress }) => (
    <Pressable onPress={onPress}  >
        <Wrapper
            paddingHorizontalSmall
            paddingVerticalSmall
            flexDirectionRow
            alignItemsCenter
            marginHorizontalSmall
            style={[appStyles.summaryCardContainer, { borderColor: color }]}
        >
            <Wrapper
                style={{
                    borderWidth: 1,
                    borderColor: color,
                    borderRadius: responsiveWidth(2),
                    padding: responsiveWidth(1)
                }}

            >
                <Icon
                    name={iconName}
                    type={iconType ? iconType : 'material-community'}
                    size={responsiveFontSize(12)}
                    color={color}
                />
            </Wrapper>
            <Spacer isSmall />
            <Wrapper style={{ marginLeft: responsiveWidth(2) }}>
                <Text isRegTextSmall>{title}</Text>
                <Text isSemiTextSmall>{count}</Text>
            </Wrapper>
        </Wrapper>
    </Pressable>

);


const CustomProgressBar = ({ percentage, color }) => (
    <Wrapper
        style={{
            height: 6,
            backgroundColor: '#1A1A1A',
            borderRadius: 10,
            marginTop: 8,
            overflow: 'hidden',
            width: '100%'
        }}
    >
        <Wrapper
            style={{
                height: '100%',
                width: `${percentage}%`,
                backgroundColor: color,
                borderRadius: 10
            }}
        />
    </Wrapper>
);

const AIInsightItem = ({ iconName, iconType, title, description, priority, color }) => {
    const priorityColor = priority === 'Low priority' ? colors.parrot : priority === 'Medium' ? colors.yellow : priority === 'High priority' ? colors.purple : colors.appColor9
    return (
        <Wrapper
            paddingHorizontalSmall
            paddingVerticalSmall
            style={{
                borderWidth: 1,
                borderColor: priorityColor,
                borderRadius: responsiveWidth(6),
                marginBottom: 15,

                borderLeftWidth: 10,
            }}
        >
            <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter>
                <Wrapper flexDirectionRow alignItemsCenter style={{ flex: 1 }}>
                    <Icon name={iconName} type={iconType} size={responsiveFontSize(18)} color={priorityColor} />
                    <Text isBoldTextSmall style={{ marginLeft: responsiveWidth(2) }}>{title}</Text>
                </Wrapper>
                <Wrapper style={{
                    borderWidth: 1,
                    borderColor: priorityColor,
                    paddingHorizontal: 8,
                    borderRadius: 12,

                }}>
                    <Text isRegTextTiny style={{ color: priorityColor }}>{priority}</Text>
                </Wrapper>
            </Wrapper>
            <Spacer isSmall />
            <Text isRegTextTiny isLightGray style={{ lineHeight: 16 }}>{description}</Text>
        </Wrapper>
    )
};

const MilestoneItem = ({ title, status, date, percentage, tags }) => {


    const statusColor = (status === 'Needs Attention' ? colors.yellow : status === 'On Track' ? colors.sky : status === 'Completed' ? colors.parrot : colors.appColor9)

    return (
        <Wrapper marginVerticalTiny paddingVerticalSmall paddingHorizontalSmall style={{ backgroundColor: "#0F0F0F", borderRadius: responsiveWidth(2) }} >
            <Wrapper flexDirectionRow justifyContentSpaceBetween alignItemsCenter  >
                <Text isSemiTextReg>{title}</Text>
                <Wrapper style={{
                    borderWidth: 1,
                    borderColor: statusColor,
                    paddingHorizontal: responsiveWidth(2),
                    borderRadius: responsiveWidth(3),

                }}>
                    <Text isRegTextTiny style={{color:statusColor}}>{status}</Text>
                </Wrapper>
            </Wrapper>
            <Spacer isSmall />
            <Wrapper flexDirectionRow >
                <Wrapper flexDirectionRow>
                    <Icon name='calendar-blank-outline' type='material-community' size={responsiveFontSize(12)} color={colors.appTextColor9} />
                    <Text isRegTextTiny style={{ color: colors.appTextColor9 }}> {date}  </Text>
                </Wrapper>
                <Wrapper flexDirectionRow>
                    <Icon name='clock-time-four-outline' type='material-community' size={responsiveFontSize(12)} color={colors.appTextColor9} />
                    <Text isRegTextTiny style={{ color: colors.appTextColor9 }}> {percentage}%  </Text>
                </Wrapper>
            </Wrapper>

            <CustomProgressBar percentage={percentage} color={statusColor} />

            {/* Actionable Tags */}
            <Wrapper flexDirectionRow style={{ marginTop: 10 }}>
                {tags.map((tag, index) => (
                    <Wrapper key={index} style={{
                        borderWidth: 1,
                        borderColor: '#333',
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 12,
                        marginRight: 8
                    }}>
                        <Text isRegTextTiny isLightGray>{tag}</Text>
                    </Wrapper>
                ))}
            </Wrapper>
        </Wrapper>
    )
};
export default function Index() {
    const {
        //contact state
        fullName, setFullName,
        phoneNumber, setPhoneNumber,
        email, setEmail,
        company, setCompany,
        notes, setNotes,
        //modal state
        showSaveModal, setShowSaveModal,
        showContactModal, setShowContactModal,
        //summary card state
        totalFeature,
        totalMilestone,
        estimateCost,
        estimateTime,

        barData, pieData,
        aiInsightsData, milestonesData,
        topFeatureData




    } = useHooks();

    const navigation = useNavigation()

    return (
        <Wrapper isMain>
            <ScrollViews.KeyboardAvoiding stickyHeaderIndices={[0]}>
                <Wrapper alignItemsCenter style={{ backgroundColor: colors.appBgColor1 }}>
                    <Text isBoldTextH5 style={{ paddingTop: responsiveHeight(2.5) }}>Project Summary</Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalSmall>
                    <Text isRegTextSmall isLightGray alignTextCenter>
                        Code Baiz Turning your project data into actionable insights
                    </Text>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper flexDirectionRow justifyContentCenter style={{ flexWrap: "wrap" }}>
                    <SummaryCard
                        title="Total Features"
                        count={totalFeature}
                        color={colors.yellow}
                        iconName={'calendar-blank-outline'}
                        onPress={() => { }}
                    />
                    <SummaryCard
                        title="Est. Cost"
                        count={estimateCost}
                        iconName={'dollar-sign'}
                        iconType={'feather'}
                        color={colors.green}
                        onPress={() => { }}
                    />
                    <SummaryCard
                        title="Est. Time"
                        count={`${estimateTime} weeks`}
                        iconName={'clock-time-four-outline'}
                        color={colors.cardpurple}
                        onPress={() => { }}
                    />
                    <SummaryCard
                        title="Milestones"
                        count={totalMilestone}
                        iconName={'trending-up'}
                        color={colors.cardorange}
                        onPress={() => { }}
                    />
                </Wrapper>
                <Spacer isMedium />
                <Wrapper marginHorizontalSmall>
                    <Wrapper
                        style={appStyles.cardContainer}
                    >
                        <Text isBoldTextH6 style={{ color: 'white', marginBottom: 20 }}>Cost Analysis</Text>
                        <Wrapper marginHorizontalSmall>
                            <BarChart
                                data={barData}
                                barWidth={responsiveWidth(5)}
                                noOfSections={4}
                                maxValue={6000}
                                isAnimated
                                barBorderRadius={responsiveWidth(2)}
                                initialSpacing={responsiveWidth(4)}
                                spacing={responsiveWidth(4.5)}
                                xAxisLabelsVerticalShift={responsiveHeight(.4)}
                                xAxisTextNumberOfLines={1}
                                yAxisTextStyle={{
                                    color: colors.appColor2,
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.appTextRegular,
                                    width: responsiveWidth(14),
                                }}
                                yAxisLabelPrefix="$"
                                xAxisLabelTextStyle={{
                                    color: colors.appColor2,
                                    fontFamily: appFonts.appTextLight,
                                    fontSize: fontSizes.tiny,
                                    width: responsiveWidth(14),
                                    textAlign: 'center',
                                }}
                                yAxisColor={'transparent'}
                                xAxisColor={'transparent'}
                                rulesType="dashed"
                                rulesColor={colors.appColor2}
                            />
                        </Wrapper>
                    </Wrapper>
                    <Spacer isBasic />
                    <Wrapper
                        style={appStyles.cardContainer}
                    >
                        <Wrapper alignItemsFlexStart>
                            <Text isBoldTextH6>Feature Distribution</Text>
                        </Wrapper>
                        <Spacer isBasic />
                        <Wrapper alignItemsCenter>
                            <PieChart
                                data={pieData}
                                radius={85}
                                innerRadius={0}
                                textSize={10}
                                focusOnPress={true}
                                extraRadiusForFocused={2}
                                toggleFocusOnPress={true}
                            />

                        </Wrapper>
                        <Spacer isBasic />
                        <Wrapper
                            flexDirectionRow
                            justifyContentCenter
                            style={{ flexWrap: 'wrap' }}
                        >
                            {pieData.map((item, index) => (
                                <Wrapper key={index}
                                    flexDirectionRow
                                    alignItemsCenter
                                    justifyContentCenter
                                    marginHorizontalSmall
                                    marginVerticalTiny
                                >
                                    <Wrapper
                                        style={{
                                            height: responsiveHeight(1),
                                            width: responsiveWidth(2),
                                            borderRadius: responsiveWidth(1),
                                            backgroundColor: item.color,
                                            marginRight: responsiveWidth(1.5)
                                        }} />
                                    <Text isSemiTextSmall>{item.text}</Text>
                                </Wrapper>
                            ))}
                        </Wrapper>
                    </Wrapper>

                </Wrapper>
                <Spacer isBasic />
                <Wrapper alignItemsCenter>
                    <Wrapper
                        marginHorizontalSmall

                        style={appStyles.cardContainer}>
                        <Wrapper flexDirectionRow alignItemsCenter>
                            <Wrapper
                                style={{
                                    borderWidth: 1,
                                    borderColor: colors.parrot,
                                    borderRadius: responsiveWidth(2),
                                    padding: responsiveWidth(1)
                                }}
                            >
                                <Icon name='flag-variant-outline' type='material-community' size={responsiveFontSize(18)} color={colors.parrot} />
                            </Wrapper>
                            <Text isBoldTextH6 style={{ marginLeft: responsiveWidth(2) }}>Project Milestone</Text>
                        </Wrapper>
                        <Spacer isBasic />
                        {milestonesData.map((item, index) => (
                            <MilestoneItem
                                key={index}
                                title={item.title}
                                status={item.status}
                                date={item.date}
                                percentage={item.percentage}
                                tags={item.tags}
                            />
                        ))}
                    </Wrapper>
                    <Spacer isBasic />
                    <Wrapper
                        marginHorizontalSmall
                        style={appStyles.cardContainer}>
                        <Wrapper flexDirectionRow alignItemsCenter>
                            <Images.SqareRound
                                source={appImages.star}
                                size={responsiveFontSize(25)}
                            />
                            <Text isBoldTextH6 style={{ marginLeft: responsiveWidth(2) }}>Top Features</Text>
                        </Wrapper>
                        <Spacer isBasic />
                        {topFeatureData.map((item, index) => {
                            const statusColor =
                                item.status === 'Completed' ?
                                    colors.parrot : item.status === 'In Progress' ?
                                        colors.sky : item.status === 'Pending' ?
                                            colors.appColor9 : colors.yellow

                            const priorityColor =
                                item.priority === 'High' ?
                                    colors.red : item.priority === 'Medium' ?
                                        colors.yellow : item.priority === 'Low' ?
                                            colors.darkOrange : colors.appColor9
                            return (
                                <Wrapper key={index}
                                    flexDirectionRow
                                    justifyContentSpaceBetween
                                    alignItemsCenter
                                    paddingHorizontalSmall
                                    paddingVerticalSmall
                                    style={{
                                        marginBottom: responsiveHeight(1),
                                        backgroundColor: "#0F0F0F",
                                        borderRadius: responsiveWidth(2)
                                    }}>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Wrapper
                                            style={{
                                                height: 6,
                                                width: 6,
                                                borderRadius: 3,
                                                backgroundColor: colors.sky,
                                                marginRight: 10
                                            }}
                                        />
                                        <Text isRegTextSmall >{item.name}</Text>
                                    </Wrapper>
                                    <Wrapper flexDirectionRow>
                                        <Wrapper style={{ borderWidth: 1, borderColor: statusColor, paddingHorizontal: 6, borderRadius: responsiveWidth(6), marginRight: 5 }}>
                                            <Text isRegTextTiny style={{ color: statusColor }}>{item.status}</Text>
                                        </Wrapper>
                                        <Wrapper style={{ borderWidth: 1, borderColor: priorityColor, paddingHorizontal: 6, borderRadius: responsiveWidth(6) }}>
                                            <Text isRegTextTiny style={{ color: priorityColor }}>{item.priority}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                            )
                        })}
                    </Wrapper>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper
                    marginHorizontalSmall
                    style={appStyles.cardContainer}>
                    <Wrapper flexDirectionRow alignItemsCenter>
                        <Images.SqareRound
                            source={appImages.allsight}
                            size={responsiveFontSize(25)}
                        />
                        <Text isBoldTextH6 style={{ marginLeft: responsiveWidth(2) }}>AI Insights</Text>
                    </Wrapper>
                    <Spacer isBasic />
                    {aiInsightsData.map((item, index) => (
                        <AIInsightItem
                            key={index}
                            iconName={item.iconName}
                            iconType={item.iconType}
                            title={item.title}
                            description={item.description}
                            priority={item.priority}
                            color={item.color}
                        />
                    ))}
                    <Wrapper style={{ right: responsiveWidth(4), height: responsiveHeight(.1), width: responsiveWidth(91.5), backgroundColor: colors.appColor9 }} />
                    <Spacer isSmall />
                    <Text isRegTextTiny style={{ color: colors.appTextColor9 }}>Last updated: Just now</Text>
                </Wrapper>
                <Spacer isBasic />
                <Wrapper >
                    <Buttons.Colored
                        text="Contact Code Baiz"
                        onPress={() => setShowContactModal(true)}
                        rightCircleIcon
                        buttonColor={colors.appBgColor2}
                        tintColor={colors.white}
                        iconName={'message-reply-text-outline'}
                        iconType={'material-community'}
                        buttonStyle={{
                            backgroundColor: colors.black,
                            borderWidth: responsiveWidth(.15),
                            borderColor: colors.appTextColor9
                        }}
                    />
                    <Spacer isBasic />
                    <Buttons.Colored
                        text="Save Summary"
                        onPress={() =>navigation.navigate(routes.drawTab)}
                        buttonColor={colors.appBgColor2}

                        rightCircleIcon={true}
                    />
                </Wrapper>
                <Spacer style={{ height: responsiveHeight(10) }} />
            </ScrollViews.KeyboardAvoiding>
            <Modals.ContactModal
                isVisible={showContactModal}
                toggle={() => setShowContactModal(false)}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                company={company}
                setCompany={setCompany}
                notes={notes}
                setNotes={setNotes}
                Button1Text={'Cancel'}
                Button2Text={'Send Message'}

                onButton2Press={() => { }}

            />
            <Modals.PopupModal
                image={appImages.signinprojectImage}
                isVisible={showSaveModal}
                toggle={() => setShowSaveModal(false)}
                button1Text={'Cancle'}
                button2Text={'Sign In'}
                subtitle={'If you don’t sign up, you’ll lose all the information'}
                title={'Sign In to save this project'}
                onButton2Press={() => {

                    setShowSaveModal(false);


                    setTimeout(() => {
                        navigation.navigate(routes.drawTab);
                    }, 300);
                }}
                horizontalButtons


            />
        </Wrapper>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        width: responsiveWidth(40),
        height: responsiveWidth(20),
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